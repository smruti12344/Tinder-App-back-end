import express from "express";
import Cards from "../Model/tinderCardSchema.js"
const router = express.Router();

//access router
router.get('/',(req,res)=>{
    return res.status(200).send("Hello world!!!+++your name");});
router.post('/tinder/cards',async(req,res)=>{
    const tinderCard = req.body;
    try{
        const  tinderCards = await Cards.create(tinderCard);
        if(tinderCards){
            res.status(200).send(tinderCards);
        }

    }
    catch(err){
      res.status(500).send(err);  
    }
});
router.get('/tinder/cards',async(req,res)=>{
   // Retrieve all data from the collection
   try{
    const allCards = await Cards.find({});
   if(allCards){
    res.status(200).send(allCards);
   }
   }catch(err){
    res.status(500).send(err);
   }

   

})
export default router;