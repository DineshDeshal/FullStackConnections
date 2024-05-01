import Models from "../Models/Models.mjs";

const getUser =async (req,res) => {
    try{
        const users = await Models.find();
    return res.status(200).send({ status: 'ok', message: users });
    }catch(err){
    return res.status(500).send({status:"failed",message:err.message})
   }

}
const createuser = async (req,res) =>{
   try{
     const data = req.body;
    const userdata= await Models.create(data);
   return  res.status(201).send({ status: "ok", message: userdata });
   }catch(err){
    return res.status(500).send({status:"failed",message:err.message})
   }

}
export {getUser,createuser}