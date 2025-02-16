import Service from "../services/userService.js";
import StoreServices from "../services/storeService.js";

const register = async (req, res, next) => {
    try{
        const result = await Service.RegisterUser(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

const login = async (req, res, next) => {
    try{
        const result = await Service.LoginUser(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

const getUser = async (req, res, next) => {
    try{
        const result = await Service.GetUser(req.body);
        res.status(200).json(result);
    }catch(e) {
        next(e);
    }
}

const updateProfile = async (req, res, next) => {
    try{
        const result = await Service.UpdateProfile(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

const CreateStore = async (req, res, next) => {
    try{
        const result = await StoreServices.CreateStore(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}

const UpdateStore = async (req, res, next) => {
    try{
        const result = await StoreServices.UpdateStore(req.body);
        res.status(200).json(result);
    }catch(e){
        next(e);
    }
}


export default { register, login, getUser, CreateStore, UpdateStore, updateProfile };