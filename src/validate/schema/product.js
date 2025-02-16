import yup from "yup";

const ProductSchema = yup.object({
    id : yup.string().required({message: "storeId is required"}),
    name: yup.string().required({message: "name is required"}),
    description: yup.string().optional().default("Description not provided"),
    price: yup.number().required({message: "price is required"}),
    stock: yup.number().required({message: "stock is required"}),
})

const UpdateProductSchema = yup.object({
    id : yup.string().required({message: "storeId is required"}),
    name: yup.string().optional(),
    description: yup.string().optional(),
    price: yup.number().optional(),
    stock: yup.number().optional(),
})

export {ProductSchema, UpdateProductSchema};