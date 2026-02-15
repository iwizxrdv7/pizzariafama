import { Plus } from "lucide-react";
import { type Product } from "../data/products";
import { formatCurrency } from "../lib/utils";

interface ProductCardProps {
    product: Product;
    onAdd: (product: Product) => void;
}

export function ProductCard({ product, onAdd }: ProductCardProps) {
    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden flex flex-row md:flex-col h-auto md:h-full relative">
            {/* Image Section */}
            <div className="relative w-32 h-32 md:w-full md:h-48 shrink-0">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover md:transition-transform md:hover:scale-105 duration-300"
                    loading="lazy"
                />
                {product.isCombo && (
                    <span className="absolute top-1 left-1 bg-red-600 text-white text-[10px] uppercase font-bold px-1.5 py-0.5 rounded shadow-sm animate-pulse z-10 w-fit">
                        Mais Pedido
                    </span>
                )}
            </div>

            {/* Content Section */}
            <div className="p-3 flex flex-col flex-1 justify-between">
                <div className="flex flex-col">
                    <h3 className="font-bold text-gray-900 text-sm md:text-base line-clamp-2 leading-tight mb-1">
                        {product.name}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 md:line-clamp-3 mb-2">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                    <div className="flex flex-col">
                        {product.originalPrice && (
                            <span className="text-[10px] text-gray-400 line-through">
                                {formatCurrency(product.originalPrice)}
                            </span>
                        )}
                        <span className="text-sm md:text-lg font-bold text-primary">
                            {formatCurrency(product.price)}
                        </span>
                    </div>

                    <button
                        onClick={() => onAdd(product)}
                        className="bg-primary hover:bg-primary/90 text-white p-1.5 md:p-2 rounded-full shadow-sm active:scale-95 transition-all"
                        aria-label="Adicionar"
                    >
                        <Plus size={18} className="md:w-5 md:h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
}
