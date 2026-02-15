import { useState, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products, type ProductOptionGroup } from '../data/products';
import { cn, formatCurrency } from '../lib/utils';
import { ChevronLeft, Minus, Plus, CheckCircle, AlertCircle } from 'lucide-react';

export function ProductPage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);

    // State to track selections: { [groupId]: { [optionId]: quantity } }
    const [selections, setSelections] = useState<Record<string, Record<string, number>>>({});
    const [observation, setObservation] = useState("");

    if (!product) {
        return <div className="p-8 text-center">Produto não encontrado.</div>;
    }

    // Helper to get total selected items in a group
    const getGroupCount = (groupId: string) => {
        const groupSelections = selections[groupId] || {};
        return Object.values(groupSelections).reduce((a, b) => a + b, 0);
    };

    // Helper to check if a group is satisfied
    const isGroupSatisfied = (group: ProductOptionGroup) => {
        const count = getGroupCount(group.id);
        return count >= group.min && count <= group.max;
    };

    // Helper to handle increment/decrement
    const handleUpdateOption = (groupId: string, optionId: string, delta: number, max: number) => {
        setSelections(prev => {
            const groupSelections = { ...(prev[groupId] || {}) };
            const currentQty = groupSelections[optionId] || 0;
            const groupTotal = Object.values(groupSelections).reduce((a, b) => a + b, 0);

            // Logic to prevent exceeding max
            if (delta > 0 && groupTotal >= max) return prev; // Cannot add more than max for the group

            const newQty = currentQty + delta;

            if (newQty < 0) return prev; // Cannot go below 0

            if (newQty === 0) {
                delete groupSelections[optionId];
            } else {
                groupSelections[optionId] = newQty;
            }

            return { ...prev, [groupId]: groupSelections };
        });
    };

    // Calculate total price (Base + Options) - currently options are 0 but good for future
    const totalPrice = useMemo(() => {
        let total = product.price;
        // Logic to add option prices if they existed
        return total;
    }, [product]);

    const allRequiredSatisfied = product.options?.every(group =>
        !group.required || isGroupSatisfied(group)
    ) ?? true;

    const handleFinish = () => {
        if (!allRequiredSatisfied) return;

        // Here we would ideally pass the selections to the checkout
        // For now, we redirect to the V3 link as requested
        window.location.href = product.link;
    };

    return (
        <div className="bg-gray-50 min-h-screen pb-20 pt-4">
            {/* Header Navigation - Modified to be simple inline without image */}
            <div className="max-w-3xl mx-auto px-4 mb-4">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
                >
                    <ChevronLeft size={20} />
                    <span className="font-bold">Voltar</span>
                </button>
            </div>

            <div className="max-w-3xl mx-auto relative z-10 px-4">
                {/* Product Info Card */}
                <div className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-4">
                    <h1 className="text-2xl font-bold text-gray-900 mb-1">{product.name}</h1>
                    <p className="text-gray-500 text-sm mb-3">{product.description}</p>
                    <div className="flex items-center gap-2">
                        {product.originalPrice && (
                            <span className="text-gray-400 line-through text-sm">{formatCurrency(product.originalPrice)}</span>
                        )}
                        <span className="text-primary font-bold text-xl">{formatCurrency(product.price)}</span>
                    </div>
                </div>

                {/* Options Groups */}
                <div className="space-y-4">
                    {product.options?.map(group => {
                        const currentCount = getGroupCount(group.id);
                        const isSatisfied = isGroupSatisfied(group);

                        return (
                            <div key={group.id} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
                                <div className="bg-gray-100/50 py-3 px-4 flex items-center justify-between border-b border-gray-100">
                                    <div>
                                        <h3 className="font-bold text-gray-900">{group.title}</h3>
                                        {group.description && (
                                            <p className="text-xs text-gray-500">{group.description}</p>
                                        )}
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className={cn(
                                            "text-xs font-bold px-2 py-1 rounded",
                                            isSatisfied ? "bg-green-100 text-green-700" : "bg-gray-200 text-gray-600"
                                        )}>
                                            {currentCount}/{group.max}
                                        </div>
                                        {group.required && (
                                            isSatisfied
                                                ? <CheckCircle size={20} className="text-green-500" />
                                                : <div className="w-5 h-5 rounded-full border-2 border-gray-300" />
                                        )}
                                    </div>
                                </div>

                                <div className="divide-y divide-gray-50">
                                    {group.options.map(option => {
                                        const qty = selections[group.id]?.[option.id] || 0;

                                        return (
                                            <div key={option.id} className="py-3 px-4 flex items-center justify-between border-b border-gray-50 last:border-0">
                                                <div className="flex-1">
                                                    <span className="text-gray-900 font-medium">{option.name}</span>
                                                    {(option.price ?? 0) > 0 && (
                                                        <span className="text-primary text-sm ml-2 font-bold">+ {formatCurrency(option.price!)}</span>
                                                    )}
                                                </div>

                                                <div className="flex items-center gap-3">
                                                    <button
                                                        onClick={() => handleUpdateOption(group.id, option.id, -1, group.max)}
                                                        disabled={qty === 0}
                                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
                                                    >
                                                        <Minus size={16} />
                                                    </button>
                                                    <span className="w-4 text-center font-bold text-gray-900">{qty}</span>
                                                    <button
                                                        onClick={() => handleUpdateOption(group.id, option.id, 1, group.max)}
                                                        disabled={getGroupCount(group.id) >= group.max && qty === 0} // Disable if group full, unless incrementing already selected (which shouldn't happen if max=1)
                                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-600 disabled:opacity-30 hover:bg-gray-50"
                                                    >
                                                        <Plus size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Observation Field */}
                <div className="bg-white rounded-xl shadow-sm p-4 mt-6 mb-2 border border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-1">Adicionar algum detalhe?</h3>
                    <div className="relative">
                        <textarea
                            placeholder="Escreva o detalhe aqui ..."
                            maxLength={140}
                            value={observation}
                            onChange={(e) => setObservation(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-none"
                            rows={3}
                        />
                        <span className="absolute bottom-2 right-2 text-xs text-gray-400 font-medium italic">
                            {observation.length}/140
                        </span>
                    </div>
                </div>
            </div>

            {/* Bottom Sticky Bar */}
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg z-50">
                <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-500">Total</span>
                        <span className="text-xl font-bold text-gray-900">{formatCurrency(totalPrice)}</span>
                    </div>
                    <button
                        onClick={handleFinish}
                        disabled={!allRequiredSatisfied}
                        className="flex-1 bg-green-600 disabled:bg-gray-300 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                    >
                        <span>Fazer Pedido</span>
                        {!allRequiredSatisfied && <AlertCircle size={18} />}
                    </button>
                </div>
            </div>
        </div>
    );
}
