import { createSlice, PayloadAction} from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import api from '../api/apiClient';

interface ProductState {
    products: Product[];
}

const initialState: ProductState = {
    products: [
        {
            id: '1',
            name: 'Красный смартфон',
            description: 'Новый смартфон с отличной камерой и долговечным аккумулятором. Смартфон с отличными характеристиками, ' +
                'ярким экраном и мощным процессором. Супер - современный и мега-легкий, простой в использовании, подойдет для каждого юзера.',
            image: 'https://www.art-gsm.ru/upload/iblock/7a6/7a6cdda9abc4563bf9bf52c9f9d6ea2e.jpg',
            liked: true
        },
        {
            id: '2',
            name: 'Смарт-часы',
            description: 'Умные часы с функцией мониторинга здоровья, уведомлений и управления музыкой.',
            image: 'https://main-cdn.sbermegamarket.ru/big1/hlr-system/-10/649/556/516/151/536/100031821092b0.jpg',
            liked: false
        },
        {
            id: '3',
            name: 'Беспроводные наушники',
            description: 'Наушники с отличным звуком и долгим временем работы без подзарядки.',
            image: 'https://img.razrisyika.ru/kart/105/1200/417541-naushniki-besprovodnye-38.jpg',
            liked: true
        },
    ],
};

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<string>) => {
            const product = state.products.find(product => product.id === action.payload);
            if (product) {
                product.liked = !product.liked;
            }
        },
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
        },
        addProduct: (state, action: PayloadAction<Product>) => {
            const existingProduct = state.products.find(product => product.id === action.payload.id);
            if (!existingProduct) {
                state.products.push(action.payload);
            }
        },
        updateProduct: (state, action: PayloadAction<Product>) => {
            const index = state.products.findIndex(p => p.id === action.payload.id);
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
    },
});

export const { toggleLike, deleteProduct, addProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;