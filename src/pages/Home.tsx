import { useState, useRef } from 'react';
import { ProductCard } from '../components/ProductCard';
import { ReviewList } from '../components/ReviewList';
import { products, type Product } from '../data/products';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

interface HomeProps {
    onOpenModal: (product: Product) => void;
}

export function Home({ onOpenModal }: HomeProps) {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("combos");

    const combos = products.filter(p => p.category === "Combos");
    const pizzas = products.filter(p => p.category === "Pizzas");

    const combosRef = useRef<HTMLDivElement>(null);
    const pizzasRef = useRef<HTMLDivElement>(null);

    const scrollToCategory = (category: string) => {
        setActiveCategory(category);
        const ref = category === "combos" ? combosRef : pizzasRef;
        if (ref.current) {
            const yOffset = -120; // Adjust for sticky header
            const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    const handleProductClick = (product: Product) => {
        if (product.options && product.options.length > 0) {
            navigate(`/produto/${product.id}`);
        } else {
            onOpenModal(product);
        }
    };

    return (
        <>
            {/* Sticky Category Nav */}
            <div className="sticky top-0 z-40 bg-white shadow-sm border-b border-gray-100 overflow-x-auto">
                <div className="flex px-4 py-3 gap-2 md:justify-center min-w-max">
                    <button
                        onClick={() => scrollToCategory('combos')}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors",
                            activeCategory === 'combos'
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        Combos (Promoção)
                    </button>
                    <button
                        onClick={() => scrollToCategory('pizzas')}
                        className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-colors",
                            activeCategory === 'pizzas'
                                ? "bg-primary text-white"
                                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                        )}
                    >
                        Pizzas Artesanais
                    </button>
                </div>
            </div>

            <main className="flex-1 max-w-5xl mx-auto w-full pb-10">

                {/* Alerts */}
                <div className="px-4 mt-4 space-y-2">
                    <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-3 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4">
                        <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
                        <b>Delivery grátis</b> para sua região!
                    </div>
                    <div className="bg-amber-100 border border-amber-200 text-amber-900 px-4 py-3 rounded-lg text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-4 delay-100">
                        <ClockIcon />
                        <span>Aproveite nossa promoção <b>por tempo LIMITADO!</b></span>
                    </div>
                </div>

                {/* Categories */}
                <section ref={combosRef} className="pt-8 px-4 md:px-6">
                    <div className="mb-2 text-center">
                        <span className="text-secondary font-bold text-sm uppercase tracking-wider bg-red-50 px-3 py-1 rounded-full border border-red-100">Promoção SOMENTE pelo site!</span>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Combos</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {combos.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={handleProductClick}
                            />
                        ))}
                    </div>
                </section>

                <section ref={pizzasRef} className="pt-12 px-4 md:px-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Pizzas Artesanais (8 Pedaços)</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
                        {pizzas.map(product => (
                            <ProductCard
                                key={product.id}
                                product={product}
                                onAdd={handleProductClick}
                            />
                        ))}
                    </div>
                </section>

                <ReviewList />
            </main>
        </>
    );
}

function ClockIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
    )
}
