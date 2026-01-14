import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { useCart } from '@/components/cart/CartContext';
import { motion } from 'framer-motion';
import { CheckCircle2, Lock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    notes: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    setOrderComplete(true);
    setIsProcessing(false);
    
    // Clear cart after successful order
    setTimeout(() => {
      clearCart();
      navigate(createPageUrl('Home'));
    }, 3000);
  };

  if (cart.length === 0 && !orderComplete) {
    navigate(createPageUrl('Cart'));
    return null;
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-slate-50 pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Order Submitted!</h1>
            <p className="text-xl text-slate-600 mb-8">
              Thank you for your order. We'll contact you shortly to finalize payment and shipping details.
            </p>
            <p className="text-slate-500">Redirecting to homepage...</p>
          </motion.div>
        </div>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = 0; // Will be calculated
  const tax = subtotal * 0.08; // 8% estimate
  const total = subtotal + shipping + tax;

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
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <div>
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
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                  </div>
                </Card>

                {/* Shipping Address */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Shipping Address</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="address">Address *</Label>
                      <Input
                        id="address"
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({...formData, address: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <Label htmlFor="city">City *</Label>
                        <Input
                          id="city"
                          required
                          value={formData.city}
                          onChange={(e) => setFormData({...formData, city: e.target.value})}
                          className="rounded-xl mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="state">State *</Label>
                        <Input
                          id="state"
                          required
                          value={formData.state}
                          onChange={(e) => setFormData({...formData, state: e.target.value})}
                          className="rounded-xl mt-2"
                          placeholder="CA"
                        />
                      </div>
                      <div>
                        <Label htmlFor="zipCode">Zip Code *</Label>
                        <Input
                          id="zipCode"
                          required
                          value={formData.zipCode}
                          onChange={(e) => setFormData({...formData, zipCode: e.target.value})}
                          className="rounded-xl mt-2"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="country">Country *</Label>
                      <Select value={formData.country} onValueChange={(value) => setFormData({...formData, country: value})}>
                        <SelectTrigger className="rounded-xl mt-2">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="US">United States</SelectItem>
                          <SelectItem value="CA">Canada</SelectItem>
                          <SelectItem value="MX">Mexico</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </Card>

                {/* Order Notes */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Notes (Optional)</h2>
                  <textarea
                    value={formData.notes}
                    onChange={(e) => setFormData({...formData, notes: e.target.value})}
                    placeholder="Any special instructions or notes about your order..."
                    className="w-full rounded-xl border border-slate-200 p-3 min-h-32 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </Card>

                {/* Payment Notice */}
                <Card className="p-6 bg-cyan-50 border-cyan-200">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Payment Processing</h3>
                      <p className="text-sm text-slate-600">
                        After submitting your order, our team will contact you to arrange payment and confirm shipping details.
                      </p>
                    </div>
                  </div>
                </Card>

                <Button
                  type="submit"
                  disabled={isProcessing}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white rounded-full py-6 text-lg font-semibold"
                >
                  {isProcessing ? 'Processing...' : 'Submit Order'}
                </Button>
              </form>
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
                        {item.price ? `$${(item.price * item.quantity).toFixed(2)}` : 'Quote'}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>TBD</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax (est.)</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between text-xl font-bold text-slate-900">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
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