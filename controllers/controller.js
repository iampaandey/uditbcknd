import userModal from "../modals/userSchema.js";

export const register= async(req,res)=>{
    try {
        const email=req.body.email;
   const user=await userModal.findOne({email:email});
   if(user){
    res.status(409).json({message:"User Already Exists"});
   }
   else{
   const nuser= new userModal({...req.body});
   await nuser.save();
   res.status(200).json({message:"Registered Successfully !"});
   } 
    } catch (error) {
        console.log(error)
    } 
}
export const buyPlan= async(req,res)=>{
    try {
      const user=await userModal.findOne({email:req.body.email});
      user.plantype=req.body.plantype;
      await user.save();
      if(req.body.plantype==="Monthly"){
        const date=new Date();
       const moth=(new Date().getMonth()+1+1)%12;
       const mth=new Date().getMonth()+1;
        res.json({message:"Your subscription starts from "+ date.getDate()+"/" +mth+"/"+date.getUTCFullYear() + " ends on " + date.getDate()+"/"+ moth +"/"+date.getUTCFullYear()})
      }
      else{
        const date=new Date();
        const moth=new Date().getUTCFullYear()+1;
        const mth=new Date().getMonth()+1;
         res.json({message:"Your subscription starts from "+ date.getDate()+"/" +mth+"/"+date.getUTCFullYear() + " ends on " + date.getDate()+"/"+ mth +"/"+moth})
      }
   } 
     catch (error) {
        console.log(error)
    } 
}

export const cancelPlan=async(req,res)=>{
    try {
        const user=await userModal.findOne({email:req.body.email});
        user.plantype= null;
        await user.save();
        res.json({message:"Your Subscription Cancelled Successfully"})
    } catch (error) {
        console.log(error)
    }
}