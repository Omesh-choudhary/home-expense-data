



const validate = (schema) => async (req,res,next)=>{

    try {
        const parseBody = await schema.parseAsync(req.body);
        req.body = parseBody;
        next()
    } catch (err) {
        const message = err.errors[0].message
        const status = 401
        const error = {
            status,
            message,
        }
       // res.status(401).json({msg:message})
        next(error)
    }

}

export default validate