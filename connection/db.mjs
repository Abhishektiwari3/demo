import { MongoClient } from 'mongodb'

const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri);

let isconnected = false;

export async function ConnectDB(){
    if(isconnected){
        throw new Error("db already connected.");
    } else{
        try {
            const db = (await client.connect()).db("td");
            isconnected = true;
            const Models ={
                Data:db.collection("data"),
                Admin:db.collection("admin"),
                Superadmin:db.collection('superadmin'),
                User:db.collection("user"),
                Blog:db.collection("blog"),
                Testimonal:db.collection("testimonial"),
                Post:db.collection("post"),
                Project:db.collection("project"),
                Blacklist:db.collection("blacklist"),
                Userdevice:db.collection("userdevice"),
            }
            console.log("connected to mongoDb");
            return { db, Models}
        } catch (error) {
            console.error(error);
        }
    }
}