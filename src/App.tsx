import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { type Product } from './data/products';
import { ArrowUp } from 'lucide-react';

import { useLocation } from 'react-router-dom';

function AppContent() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const location = useLocation();
  const isProductPage = location.pathname.startsWith('/produto/');

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <Routes>
        <Route path="/" element={<Home onOpenModal={setSelectedProduct} />} />
        <Route path="/produto/:id" element={<ProductPage />} />
      </Routes>

      <Footer />

      {/* Spacer for sticky bottom bar on Product Page */}
      {isProductPage && <div className="h-28" />}

      {/* Product Modal (For items without their own page) */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-30 hover:bg-primary/90 transition-opacity opacity-50 hover:opacity-100"
        aria-label="Voltar ao topo"
        style={{ marginBottom: isProductPage ? '80px' : '0' }}
      >
        <ArrowUp size={24} />
      </button>

    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
