import { Info, MapPin, Star } from "lucide-react";

export function Header() {
    return (
        <header className="bg-white shadow-sm pb-4">
            <div className="relative h-32 md:h-48 w-full bg-cover bg-center" style={{ backgroundImage: "url('/images/cover.jpg')" }}>
                <div className="absolute -bottom-8 left-4 md:left-8">
                    <img
                        src="/images/famalogo.png"
                        alt="Fama Pizzaria Logo"
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-md bg-white object-contain"
                    />
                </div>
            </div>

            <div className="mt-10 px-4 md:px-8">
                <div className="flex justify-between items-start">
                    <h1 className="text-2xl font-bold text-gray-900">Fama Pizzaria - Campo Bom</h1>
                    <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                        <Info size={24} />
                    </button>
                </div>

                <div className="mt-2 space-y-1 text-sm text-gray-600">
                    <div className="flex items-center gap-2 text-amber-600 font-medium">
                        <Star className="fill-amber-600 text-amber-600" size={16} />
                        <span>4.9 (1.007 avaliações)</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>R. Paulista, 357 - Paulista, Campo Bom - RS</span>
                    </div>

                    <div className="flex items-center gap-2 text-green-600 font-semibold bg-green-50 px-2 py-1 rounded w-fit">
                        <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
                        <span>Aberto para pedidos no site!</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 text-xs mt-1">
                        <span>30-50 min • Entrega Grátis</span>
                    </div>
                </div>
            </div>
        </header>
    );
}
