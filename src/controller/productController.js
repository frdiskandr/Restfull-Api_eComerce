import Services from "../services/ProductServices.js";

const CreateProduct = async (req, res, next) => {
    try {
        const result = await Services.CreateProduct(req.body);
        res.status(200).json(result);
    } catch (e) {
        next(e);
    }
};

const UpdateProduct = async (req, res, next) => {
    try{
        const {id} = req.params;
        console.log(id);
        const result = await Services.UpdateProduct(req.body, id);
        res.status(200).json(result);
    }catch(e) {
        next(e);
    }
}

const GetAllProduct = async (req, res, next) => {
    try{
        const result = await Services.GetAllProduct(req.body);
        res.status(200).json(result);
    }catch(e) {
        next(e);
    }
}

const DeleteProduct = async (req, res, next) => {
    try{
        const {id} = req.params;
        const result = await Services.DeleteProduct(id);
        res.status(200).json(result);
    }catch(e) {
        next(e);
    }
}
export default { CreateProduct, UpdateProduct,GetAllProduct, DeleteProduct };
