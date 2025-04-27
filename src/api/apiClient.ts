import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, get, remove } from 'firebase/database';
import { Product } from '../types/Product';

console.log('API Key:', process.env.REACT_APP_FIREBASE_API_KEY);
console.log('Database URL:', process.env.REACT_APP_FIREBASE_DATABASE_URL);
console.log('Project ID:', process.env.REACT_APP_FIREBASE_PROJECT_ID);

const firebaseConfig = {
    apiKey: process.env.ReACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};

console.log('Firebase Config:', firebaseConfig);


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const createProduct = async (productData: Product): Promise<void> => {
    try {
        await set(ref(database, 'products/' + productData.id), productData);
    } catch (error) {
        console.error('Error writing new product to Firebase Database', error);
    }
};

export const updateProduct = async (productData: Product): Promise<void> => {
    try {
        await set(ref(database, 'products/' + productData.id), productData);
    } catch (error) {
        console.error('Error updating product in Firebase Database', error);
    }
};

export const deleteProduct = async (productId: string): Promise<void> => {
    try {
        await remove(ref(database, 'products/' + productId));
    } catch (error) {
        console.error('Error deleting product from Firebase Database', error);
    }
};

export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const dbRef = ref(database, 'products');
        const snapshot = await get(dbRef);

        if (snapshot.exists()) {
            const data = snapshot.val();
            return Object.entries(data).map(([id, productData]) => ({
                id,
                ...(productData as Omit<Product, 'id'>),
            }));
        } else {
            return [];
        }
    } catch (error) {
        console.error('Error fetching products from Firebase Database', error);
        return [];
    }
};
