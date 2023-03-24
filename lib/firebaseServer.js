import { initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const privateKey = process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n');

const config = {
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  privateKey,
};

// Initialize Firebase Admin app only once
const app = initializeApp({
  credential: admin.credential.cert(config),
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
});

export const database = getDatabase(app);