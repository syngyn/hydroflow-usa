import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion } from 'framer-motion';
import { CheckCircle, Package, Mail } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from '@/components/cart/CartContext';
import confetti from 'canvas-confetti';

export default function CheckoutSuccess() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { clearCart } = useCart();
  const [hasCleared, setHasCleared] = useState(false);

  useEffect(() => {
    if (!hasCleared) {
      clearCart();
      setHasCleared(true);
      
      // Trigger confetti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  }, [hasCleared, clearCart]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-32 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-white" />
          </div>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-xl text-slate-600 mb-8">
            Thank you for your purchase. Your order has been successfully processed.
          </p>

          <Card className="p-8 mb-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900 mb-2">Order Confirmation Email</h3>
                  <p className="text-slate-600">
                    A confirmation email with your order details and tracking information will be sent to your email address shortly.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Package className="w-6 h-6 text-cyan-600" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-slate-900 mb-2">What's Next?</h3>
                  <p className="text-slate-600">
                    Your order is being prepared for shipment. You'll receive a tracking number once your package ships.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to={createPageUrl('Home')}>
              <Button className="bg-cyan-600 hover:bg-cyan-700 text-white rounded-full px-8 py-6">
                Back to Home
              </Button>
            </Link>
            <Link to={createPageUrl('Products')}>
              <Button variant="outline" className="rounded-full px-8 py-6">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}