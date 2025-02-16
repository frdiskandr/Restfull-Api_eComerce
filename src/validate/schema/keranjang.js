import yup from "yup";

const KeranjangSchema = yup.object({
    id : yup.string().required({message: "userId is required"}),
})

const deleteKeranjangSchema = yup.object({
    id : yup.string().required({message: "userId is required"}),
    productId: yup.string().required({message: "productId is required"}),
})

const poolKeranjangSchema = yup.object({
    id: yup.number().required({message: "id is required"}),
    productId: yup.string().required({message: "productId is required"}),
    quantity: yup.number().required({message: "quantity is required"}),
})

export {KeranjangSchema, poolKeranjangSchema, deleteKeranjangSchema};