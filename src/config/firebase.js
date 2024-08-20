import admin from 'firebase-admin';
import serviceAccount from '../../serviceAccount.json' assert { type: 'json' };
import dotenv from 'dotenv';

dotenv.config();

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: process.env.STORAGE_BUCKET
});

const bucket = admin.storage().bucket();

export default bucket;



