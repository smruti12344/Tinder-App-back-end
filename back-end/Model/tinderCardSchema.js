import mongoose from "mongoose";

//create Schema
const cardSchema = mongoose.Schema(
    {
    name:'String',
    picUrl:'String'
})
//collection
const Cards= mongoose.model('Cards',cardSchema);
export default Cards;