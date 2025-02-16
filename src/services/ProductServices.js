import Validate from "../validate/validate.js";
import {
    ProductSchema,
    UpdateProductSchema,
} from "../validate/schema/product.js";
import prisma from "../app/database.js";
import ResponseError from "../error/responseError.js";

const CreateProduct = async (req) => {
    const data = await Validate(ProductSchema, req);
    if (!data.description) data.description = "Description not provided";
    try{
        const response = await prisma.product.create({
            data: {
                storeId: data.id,
                name: data.name,
                description: data.description,
                price: data.price,
                stock: data.stock,
            },
        });
        if (!response) throw new ResponseError(500, "database error");
        response.message = "success create product";
        return response;
    }catch(e){
        throw new ResponseError(404, "store not found");
    }
};

const GetAllProduct = async (req) => {
    const response = await prisma.product.findMany({
        where: {
            storeId: req.id,
        },
    });
    if (!response) throw new ResponseError(404, "product not found");
    return response;
};
const UpdateProduct = async (req, id) => {
    const data = await Validate(UpdateProductSchema, req);
    try{
        const response = await prisma.product.update({
            where: { id: id },
            data: {
                name: data.name,
                description: data.description,
                price: data.price,
                stock: data.stock,
            },
        });
        if (!response) throw new ResponseError(500, "database error");
        response.message = "success update product";
        return response;
    }catch(e){
        throw new ResponseError(404, "product not found");
    }
};

const DeleteProduct = async (id) => {
    const response = await prisma.product.delete({
        where: {
            id: id
        }
    })
    if (!response) throw new ResponseError(404, "product not found");
    response.message = "success delete product";
    return response
}

export default { CreateProduct, UpdateProduct, GetAllProduct, DeleteProduct };
