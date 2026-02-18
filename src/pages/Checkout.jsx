import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useCart } from '@/components/cart/CartContext';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock, Package, AlertCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

export default function Checkout() {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedState, setSelectedState] = useState('WA');
  const [isInIframe, setIsInIframe] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });

  useEffect(() => {
    // Check if running in iframe
    setIsInIframe(window.self !== window.top);
  }, []);

  const calculateTax = () => {
    return getCartTotal() * 0.105;
  };

  const calculateTotal = () => {
    return getCartTotal() + calculateTax();
  };

  const handleCheckout = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (isInIframe) {
      toast.error('Checkout only works from published app. Please open in a new tab.');
      return;
    }

    setIsProcessing(true);

    try {
      const response = await base44.functions.invoke('createStripeCheckout', {
        cart,
        state: selectedState,
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
      });

      if (response.data.url) {
        window.location.href = response.data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      toast.error('Failed to create checkout session. Please try again.');
      setIsProcessing(false);
    }
  };

  if (cart.length === 0) {
    navigate(createPageUrl('Cart'));
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">Checkout</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* iframe Warning */}
                {isInIframe && (
                  <Card className="p-4 bg-amber-50 border-amber-200">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-amber-900">
                          Checkout only works from published app. Please open in a new tab to complete your purchase.
                        </p>
                      </div>
                    </div>
                  </Card>
                )}

                {/* Contact Information */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                  </div>
                </Card>

                {/* Payment Notice */}
                <Card className="p-6 bg-cyan-50 border-cyan-200">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Secure Payment with Stripe</h3>
                      <p className="text-sm text-slate-600">
                        Your payment information is processed securely. Billing and shipping address will be collected on the next page.
                      </p>
                    </div>
                  </div>
                </Card>

                <Button
                  onClick={handleCheckout}
                  disabled={isProcessing || isInIframe}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isProcessing ? 'Redirecting to Payment...' : 'Continue to Payment'}
                </Button>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-slate-600">
                        {item.name} × {item.quantity}
                      </span>
                      <span className="font-medium">
                        ${(item.price * item.quantity).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>Calculated at checkout</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span>
                      ${calculateTax().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold text-slate-900">
                      <span>Total</span>
                      <span>${calculateTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}