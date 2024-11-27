import express from "express";
import { postRoutes } from "./routes/post.js";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import * as dotenv from 'dotenv'
dotenv.config();

const app = express ();
const PORT = 8080;
const DB = process.env.DB

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api/post', postRoutes);

mongoose.connect(DB, {
    ssl: true,   // Asegura que SSL esté habilitado
})
    .then(() => console.log('Connected to MongoDB successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () =>{
console.log(`Server listen on http://localhost:${PORT}/api/post`)
});