import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
    const products = useSelector((state: RootState) => state.products.products);

    const popularProducts = products.filter(product => product.liked);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">

            {/* Hero Section */}
            <section className="relative bg-blue-600 text-white py-16">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Добро пожаловать в наш магазин!</h1>
                    <p className="text-lg md:text-xl mb-8">Лучшие товары для вашего комфорта. Высокое качество и доступные цены.</p>
                    <Link
                        to="/products"
                        className="px-6 py-3 bg-yellow-500 text-gray-800 rounded-full text-lg font-semibold hover:bg-yellow-400 transition"
                    >
                        Посмотреть товары
                    </Link>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">О нашем магазине</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Мы стремимся предоставить нашим клиентам качественные товары по разумным ценам. Наша цель – сделать
                        покупки удобными и приятными для вас. В нашем ассортименте вы найдете самые различные категории
                        продуктов, от электроники до одежды и аксессуаров.
                    </p>
                    <p className="text-lg text-gray-600 mt-4">
                        Мы уверены, что покупка должна быть не только удобной, но и выгодной, поэтому постоянно работаем над расширением ассортимента и улучшением качества обслуживания. В нашем магазине вы найдете товары от проверенных производителей и брендов, которые зарекомендовали себя на рынке. Наши сотрудники всегда готовы помочь вам в выборе, а также предоставить консультации по любым вопросам, связанным с нашими продуктами.
                    </p>
                    <Link
                        to="/about"
                        className="px-6 py-3 bg-blue-500 text-white rounded-full text-lg font-semibold hover:bg-blue-400 transition"
                    >
                        Узнать больше о нас
                    </Link>
                </div>
            </section>

            {/* Popular Products Section */}
            <section className="bg-gray-100 py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Популярные товары</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                        {popularProducts.length > 0 ? (
                            popularProducts.slice(0, 3).map((product) => (
                                <div key={product.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
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
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name || 'Без имени'}</h3>
                                    <p className="text-gray-600 mb-4">{product.description || 'Нет описания.'}</p>
                                    <Link
                                        to={`/products/${product.id}`}
                                        className="text-blue-500 hover:text-blue-700 transition"
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

            {/* Footer */}
            <footer className="bg-blue-600 text-white py-8">
                <div className="container mx-auto text-center">
                    <p>&copy; 2025 Наш магазин. Все права защищены.</p>
                </div>
            </footer>

        </div>
    );
};

export default HomePage;
