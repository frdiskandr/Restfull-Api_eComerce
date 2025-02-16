import yup from "yup";

const KeranjangSchema = yup.object({
    userId : yup.string().required({message: "userId is required"}),
})

const poolKeranjangSchema = yup.object({
    keranjangId: yup.number().required({message: "keranjangId is required"}),
    productId: yup.string().required({message: "productId is required"}),
    quantity: yup.number().required({message: "quantity is required"}),
})

export {KeranjangSchema, poolKeranjangSchema};