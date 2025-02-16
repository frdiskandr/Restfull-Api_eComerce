import Validate from "../validate/validate.js";
import {
    deleteKeranjangSchema,
    KeranjangSchema,
    poolKeranjangSchema,
} from "../validate/schema/keranjang.js";
import prisma from "../app/database.js";

const GetKeranjang = async (req) => {
    const data = await Validate(KeranjangSchema, req);
    const result = await prisma.keranjang.findMany({
        where: {
            userId: data.id,
        },
        select: {
            Keranjang: true,
        },
    });
    if (!result) throw new ResponseError(404, "keranjang not found");
    return result;
};

const AddProduct = async (req) => {
    const data = await Validate(poolKeranjangSchema, req);
    const result = await prisma.poolKeranjangUser.create({
        data: {
            keranjangId: data.id,
            productId: data.productId,
            quantity: data.quantity,
        },
    });
    if (!result) throw new ResponseError(404, "keranjang not found");
    return { message: "success add product to keranjang" };
};

const UpdateProduct = async (req) => {
    const data = await Validate(poolKeranjangSchema, req);
    const result = await prisma.poolKeranjangUser.update({
        where: {
            keranjangId: data.id,
            productId: data.productId,
        },
        data: {
            quantity: data.quantity,
        },
    });
    if (!result) throw new ResponseError(404, "keranjang not found");
    return { message: "success update product to keranjang" };
};

const DeleteProduct = async (req) => {
    const data = await Validate(deleteKeranjangSchema, req);
    const result = await prisma.poolKeranjangUser.delete({
        where: {
            keranjangId: data.id,
            productId: data.productId,
        },
    });
    if (!result) throw new ResponseError(404, "keranjang not found");
    return { message: "success delete product to keranjang" };
};

export default { GetKeranjang, AddProduct, UpdateProduct, DeleteProduct };
