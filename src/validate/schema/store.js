import yup from "yup";

const CreateStoreSchema = yup.object({
    username: yup.string().required({message: "username is required"}),
    name: yup.string().required({message: "name of store is required"}),
})

export default CreateStoreSchema;