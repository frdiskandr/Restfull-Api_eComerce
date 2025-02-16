import Validate from "../validate/validate.js";
import { GetUserSchema, ProfileSchema, UserSchema } from "../validate/schema/user.js";
import ResponseError from "../error/responseError.js";
import { v1 as uuid } from "uuid";
import prisma from "../app/database.js";

const RegisterUser = async (req) => {
    const res = await Validate(UserSchema, req);
    const user = await prisma.user.count({ where: { username: res.username } });
    if (user) throw new ResponseError(400, "User already exist");

    const userData = await prisma.user.create({
        data: {
            username: res.username,
            password: res.password,
            token: uuid(),
        },
        select: { id: true, username: true, token: true },
    });

    await prisma.profile.create({
        data: {
            username: userData.username,
            image: "",
            description: "description not provided",
        },
    });

    await prisma.keranjang.create({
        data: {
            userId: userData.id,
        },
    });

    return userData;
};

const LoginUser = async (req) => {
    const request = await Validate(UserSchema, req);
    const user = await prisma.user.findFirst({
        where: { username: request.username, password: request.password },
    });
    if (!user) {
        throw new ResponseError(400, "Password or username is wrong");
    } else {
        const result = await prisma.user.update({
            where: { id: user.id },
            data: { token: uuid() },
            select: { id: true, username: true, token: true },
        });
        return result;
    }
};

const GetUser = async (req) => {
    const data = await Validate(GetUserSchema, req);
    const user = await prisma.user.findFirst({
        where: {
            username: data.username,
        },
        select:{
            id: true,
            username: true,
            token: true,
            Keranjang: true,
            Profile: true,
            Store: {
                select: {
                    name: true,
                    userId: true,
                    Product: true,
                }
            }
        }
    });

    if (!user) {
        throw new ResponseError(404, "User not found");
    }else{
        return user;
    }
};

const UpdateProfile = async (req) => {
    const data = await Validate(ProfileSchema, req);
    let result;
    if (data.username && data.image && data.description) {
       result = await prisma.profile.update({
            where: { username: data.username },
            data: { image: data.image, description: data.description },
        });
    }else if (data.image) {
        result = await prisma.profile.update({
            where: { username: data.username },
            data: { image: data.image },
        });
    }else if (data.description) {
        result = await prisma.profile.update({
            where: { username: data.username },
            data: { description: data.description },
        });
    }
    return {message: "success update profile", result};
}

export default { RegisterUser, LoginUser, GetUser, UpdateProfile };
