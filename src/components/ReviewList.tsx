import { Star } from "lucide-react";
import { reviews } from "../data/products";

export function ReviewList() {
    return (
        <div className="py-8 bg-white">
            <div className="px-4 md:px-8 mb-6">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    Avaliações
                    <div className="flex text-primary">
                        {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
                    </div>
                    <span className="text-sm font-normal text-gray-500 ml-auto">Verified</span>
                </h2>
            </div>

            <div className="flex overflow-x-auto pb-4 gap-4 px-4 md:px-8 snap-x">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="flex-none w-72 bg-gray-50 rounded-xl p-4 border border-gray-100 snap-center"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            {/* <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
              </div> */}
                            <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-lg">
                                {review.name.charAt(0)}
                            </div>
                            <div>
                                <h4 className="font-bold text-gray-900">{review.name}</h4>
                                <div className="flex text-primary">
                                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={12} fill="currentColor" strokeWidth={0} />)}
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-sm italic">"{review.text}"</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
