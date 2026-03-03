import React from 'react';
import { useCart } from '@/components/cart/CartContext';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';

export default function ProductPlasticScrew() {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id: 'plastic-screw',
      name: 'Plastic Screw',
      price: 2.00,
      image: null,
      quantity: 1,
      noShipping: true
    });
    toast.success('Plastic Screw added to cart');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center p-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Plastic Screw</h1>
        <p className="text-2xl text-slate-700 mb-8">$2.00</p>
        <Button
          onClick={handleAddToCart}
          className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 rounded-full text-lg"
        >
          <ShoppingCart className="w-5 h-5 mr-2" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}