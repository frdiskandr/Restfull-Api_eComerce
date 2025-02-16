import Validate from "../validate/validate.js";
import CreateStoreSchema from "../validate/schema/store.js";
import prisma from "../app/database.js";
import ResponseError from "../error/responseError.js";

const CreateStore = async (req) => {
    const data = await Validate(CreateStoreSchema, req);
    const dataUser = await prisma.user.findFirst({
        where: { username: data.username },
        select: { id: true, Store: true },
    });

    if (!dataUser) {
        throw new ResponseError(404, "user not found");
    }
    if (dataUser.Store) {
        throw new ResponseError(400, "user already have store");
    }
    const result = await prisma.store.create({
        data: {
            userId: dataUser.id,
            name: data.name,
        },
    });
    result.message = "success create store";
    return result;
};

const UpdateStore = async (req) => {
    const data = await Validate(CreateStoreSchema, req);

    const response = await prisma.store.update({
        where: { userId: data.id },
        data: {
            name: data.name
        }
    })
    if(!response) throw new ResponseError(404, "store not found");
    response.message = "success update store";
    return response
}

export default { CreateStore, UpdateStore };
