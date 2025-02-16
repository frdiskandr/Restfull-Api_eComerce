const Validate = async (schema, req) => {
    const result = await schema.validate(req);

    if (result.error) {
        console.warn(result);      
        throw new Error(result.error);
    }else{
        return result;
    }
}

export default Validate;

