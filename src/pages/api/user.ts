import { NextApiRequest, NextApiResponse } from 'next';
import { connnectionToMongoDB } from '../../config/mongodb';
export default async (req: NextApiRequest, res: NextApiResponse) => {
    const db = await connnectionToMongoDB(process.env.MONGODB_URI);
    if (req.method === 'POST') {
        const user = req.body;
        db.collection('users').findOneAndUpdate({ login: user.login }, user);
        res.status(200).json({ result: 'ok' });
    } else {
        res.status(200).json({ result: 'ok' });
    }
};
