import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);

    const popularProducts = products.filter(product => product.liked);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">


            <section className="relative bg-blue-600 text-white py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-bold mb-4">Добро пожаловать в наш магазин!</h1>
                    <p className="text-lg md:text-2xl mb-8">
                        Лучшие товары для вашего комфорта. Высокое качество и доступные цены.
                    </p>
                    <Link
                        to="/project_test/products"
                        className="inline-block px-6 py-3 bg-yellow-400 text-gray-800 rounded-full text-lg font-semibold hover:bg-yellow-300 transition"
                    >
                        Посмотреть товары
                    </Link>
                </div>
            </section>

            <section className="bg-gray-100 py-16 px-4 md:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-2xl md:text-4xl font-bold mb-10">Популярные товары</h2>
                    <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {popularProducts.length > 0 ? (
                            popularProducts.slice(0, 3).map((product) => (
                                <div
                                    key={product.id}
                                    className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col"
                                >
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                    ) : (
                                        <div className="w-full h-48 bg-gray-200 rounded-md mb-4 flex items-center justify-center">
                                            <span className="text-gray-500">Изображение недоступно</span>
                                        </div>
                                    )}
                                    <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{product.name || 'Без имени'}</h3>
                                    <p className="text-gray-600 mb-4 flex-grow">{product.description || 'Нет описания.'}</p>
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="mt-auto text-blue-500 hover:text-blue-700 transition font-medium"
                                    >
                                        Подробнее
                                    </Link>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Нет популярных товаров.</p>
                        )}
                    </div>
                </div>
            </section>

            <footer className="bg-blue-600 text-white py-6 px-4">
                <div className="max-w-7xl mx-auto text-center text-sm md:text-base">
                    <p>&copy; 2025 Наш магазин. Все права защищены.</p>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;
