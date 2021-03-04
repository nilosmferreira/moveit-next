import url from 'url';
// import { MongoClient, Db } from 'mongodb';
import mongoose from 'mongoose';

// let cachedDb: Db = null;

export const connnectionToMongoDB = async (uri: string) => {
    try {
        const db = await mongoose.connect(uri);
    } catch (error) {}
    // try {
    //     if (cachedDb) return cachedDb;
    //     const client = await MongoClient.connect(uri, {
    //         useNewUrlParser: true,
    //         useUnifiedTopology: true,
    //     });

    //     const dbName = url.parse(uri).pathname.substr(1);
    //     const db = client.db(dbName);
    //     cachedDb = db;

    //     return db;
    // } catch (e) {
    //     console.log(e);
    // }
};
