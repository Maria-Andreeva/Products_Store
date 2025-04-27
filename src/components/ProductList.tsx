import React, { useState, useMemo, useEffect  } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../store/store';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../redux/productSlice';

const ProductList: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const products = useSelector((state: RootState) => state.products.products);
    const [showOnlyLiked, setShowOnlyLiked] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const productsPerPage = 6;

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const filteredProducts = useMemo(() => {
        let result = products;


        if (showOnlyLiked) {
            result = result.filter(product => product.liked);
        }

        if (searchQuery) {
            result = result.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
        }

        return result;
    }, [products, showOnlyLiked, searchQuery]);

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    const toggleFilter = () => {
        setShowOnlyLiked(prev => !prev);
        setCurrentPage(1);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
                <input
                    type="text"
                    placeholder="Поиск по названию продукта"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 border rounded w-1/3"
                />

                <button
                    onClick={toggleFilter}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                    {showOnlyLiked ? 'Показать все' : 'Только избранные'}
                </button>


                <Link
                    to="/create-product"
                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                    Создать новый продукт
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {currentProducts.length > 0 ? (
                    currentProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>Продукты не найдены</p>
                )}
            </div>

            <div className="flex justify-center gap-2 pt-4">
                {[...Array(totalPages)].map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrentPage(i + 1)}
                        className={`px-3 py-1 border rounded ${
                            currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'
                        } hover:bg-blue-400 hover:text-white transition`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ProductList;