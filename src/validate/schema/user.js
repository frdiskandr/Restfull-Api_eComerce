import yup from "yup";

const UserSchema = yup.object({
    username: yup.string().required({ message: "Username is required" }),
    password: yup.string().required(),
});

const ProfileSchema = yup.object({
    username: yup.string().required({message: "Username is required"}),
    image : yup.string().optional(),
    description: yup.string().optional()
});

const GetUserSchema = yup.object({
    token: yup.string().required({message: "Token is required"}),
    username: yup.string().required({message: "Username is required"}),
})

export {UserSchema, GetUserSchema, ProfileSchema};

