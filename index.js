import { ConnectDB } from './connection/db.mjs';
import express from 'express'
const app = express();


ConnectDB().then((v)=>{
    app.db = v.db
    app.collections = v.Models;
    app.listen(3001, ()=>{
        console.log(`Server is running on port:3001`);
    })
}).catch((err)=>{
    console.log(err);
})