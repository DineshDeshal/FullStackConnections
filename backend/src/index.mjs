import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './Routers/Routes.mjs';
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect('mongodb+srv://dsharma41396:Avinashsingh123@cluster0.xuuxhwy.mongodb.net/Pordata?retryWrites=true&w=majority').then(()=>console.log("database is connected")).catch((err)=>console.log(err));
app.use('/',router);
app.listen(8000,()=>console.log("server is running perfectly"))
