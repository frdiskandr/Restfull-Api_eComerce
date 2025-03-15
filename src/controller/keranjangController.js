import keranjangService from "../services/keranjangService.js";

const GetKeranjang = async (req, res, next) => {
    try{
        const response = await keranjangService.GetKeranjang(req.body);
        res.status(200).json(response);
    }catch(e){
        next(e);
    }
} 

const AddProduct = async (req, res, next) => {
    try{
        const response = await keranjangService.AddProduct(req.body);
        res.status(200).json(response);
    }catch(e){
        next(e);
    }
}

const UpdateProduct = async (req, res, next) => {
    try{
        const response = await keranjangService.UpdateProduct(req.body);        
        res.status(200).json(response);
    }catch(e){        
        next(e);
    }
}

const DeleteProduct = async (req, res, next) => {
    try{
        const response = await keranjangService.DeleteProduct(req.body);        
        res.status(200).json(response);
    }catch(e){        
        next(e);
    }
}

export default { GetKeranjang, AddProduct, UpdateProduct, DeleteProduct };