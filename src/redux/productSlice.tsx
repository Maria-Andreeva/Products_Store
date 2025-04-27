import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../types/Product';
import { createProduct as createProductInDb, deleteProduct as deleteProductFromDB, updateProduct as updateProductInDB, getAllProducts as getAllProductsFromDb } from '../api/apiClient';

interface ProductState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, { rejectWithValue }) => {
    try {

        return await getAllProductsFromDb();
    } catch (error) {
        return rejectWithValue('Не удалось загрузить продукты');
    }
});

export const addProduct = createAsyncThunk('products/addProduct', async (product: Product, { rejectWithValue }) => {
    try {
        await createProductInDb(product);
        fetchProducts();
        return product;
    } catch (error) {
        return rejectWithValue('Не удалось добавить продукт');
    }
});

export const updateProduct = createAsyncThunk('products/updateProduct', async (product: Product, { rejectWithValue }) => {
    try {
        await updateProductInDB(product);
        return product;
    } catch (error) {
        return rejectWithValue('Не удалось обновить продукт');
    }
});

export const deleteProduct = createAsyncThunk('products/deleteProduct', async (productId: string, { rejectWithValue }) => {
    try {
        await deleteProductFromDB(productId);
        return productId;
    } catch (error) {
        return rejectWithValue('Не удалось удалить продукт');
    }
});

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        toggleLike: (state, action: PayloadAction<string>) => {
            const product = state.products.find(p => p.id === action.payload);
            if (product) {
                product.liked = !product.liked;
            }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            .addCase(addProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                state.products.push(action.payload);
            })
            .addCase(updateProduct.fulfilled, (state, action: PayloadAction<Product>) => {
                const index = state.products.findIndex(p => p.id === action.payload.id);
                if (index !== -1) {
                    state.products[index] = action.payload;
                }
            })
            .addCase(deleteProduct.fulfilled, (state, action: PayloadAction<string>) => {
                state.products = state.products.filter(p => p.id !== action.payload);
            });
    },
});

export const { toggleLike } = productSlice.actions;
export default productSlice.reducer;
