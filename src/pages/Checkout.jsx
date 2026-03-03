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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { base44 } from '@/api/base44Client';
import { toast } from 'sonner';

const US_STATES = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' }
];

export default function Checkout() {
  const { cart, getCartTotal } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedState, setSelectedState] = useState('WA');
  const [isInIframe, setIsInIframe] = useState(false);
  const [shippingDifferent, setShippingDifferent] = useState(false);
  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [couponLoading, setCouponLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZip: '',
  });

  useEffect(() => {
    setIsInIframe(window.self !== window.top);
  }, []);

  const allNoShipping = cart.every(item => item.noShipping);

  const getShippingCost = () => {
    if (allNoShipping) return 0;
    const shippingRates = {
      'AL': 31.57, 'AK': 184.8, 'AZ': 30.14, 'AR': 30.14, 'CA': 29.1,
      'CO': 29.1, 'CT': 30.14, 'DE': 30.14, 'FL': 30.14, 'GA': 30.14,
      'HI': 184.8, 'ID': 29.1, 'IL': 30.14, 'IN': 30.14, 'IA': 30.14,
      'KS': 30.14, 'KY': 30.14, 'LA': 30.14, 'ME': 31.57, 'MD': 30.14,
      'MA': 30.14, 'MI': 30.14, 'MN': 30.14, 'MS': 30.14, 'MO': 30.14,
      'MT': 29.1, 'NE': 30.14, 'NV': 29.1, 'NH': 30.14, 'NJ': 30.14,
      'NM': 29.1, 'NY': 30.14, 'NC': 30.14, 'ND': 30.14, 'OH': 30.14,
      'OK': 30.14, 'OR': 29.1, 'PA': 30.14, 'RI': 30.14, 'SC': 30.14,
      'SD': 30.14, 'TN': 30.14, 'TX': 30.14, 'UT': 29.1, 'VT': 30.14,
      'VA': 30.14, 'WA': 29.1, 'WV': 30.14, 'WI': 30.14, 'WY': 29.1,
      'AS': 184.8, 'DC': 30.14, 'GU': 184.8, 'MP': 184.8, 'PR': 184.8, 'VI': 184.8
    };
    const shippingState = shippingDifferent ? formData.shippingState : formData.billingState;
    return shippingRates[shippingState] || 0;
  };

  const calculateTax = () => {
    const taxState = shippingDifferent ? formData.shippingState : formData.billingState;
    if (taxState === 'WA') {
      return getCartTotal() * 0.105;
    }
    return 0;
  };

  const calculateDiscount = () => {
    if (!appliedCoupon) return 0;
    return appliedCoupon.discount_amount || 0;
  };

  const calculateTotal = () => {
    return getCartTotal() + getShippingCost() + calculateTax() - calculateDiscount();
  };

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code');
      return;
    }

    setCouponLoading(true);
    try {
      const response = await base44.functions.invoke('validateCoupon', {
        code: couponCode.trim(),
        subtotal: getCartTotal()
      });

      if (response?.data?.valid) {
        setAppliedCoupon(response.data);
        toast.success(`Coupon applied! You saved $${response.data.discount_amount.toFixed(2)}`);
      }
    } catch (error) {
      const errorMessage = error?.response?.data?.error || 'Invalid coupon code';
      toast.error(errorMessage);
      setAppliedCoupon(null);
    } finally {
      setCouponLoading(false);
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode('');
    toast.success('Coupon removed');
  };

  const handleCheckout = async () => {
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!shippingDifferent) {
      if (!formData.billingAddress || !formData.billingCity || !formData.billingState || !formData.billingZip) {
        toast.error('Please fill in billing address');
        return;
      }
    } else {
      if (!formData.shippingAddress || !formData.shippingCity || !formData.shippingState || !formData.shippingZip) {
        toast.error('Please fill in shipping address');
        return;
      }
    }

    if (isInIframe) {
      toast.error('Checkout only works from published app. Please open in a new tab.');
      return;
    }

    setIsProcessing(true);

    try {
      const shippingState = shippingDifferent ? formData.shippingState : formData.billingState;

      console.log('Calling checkout function...');
      const response = await base44.functions.invoke('createStripeCheckout', {
        cart,
        state: shippingState,
        customerEmail: formData.email,
        customerName: `${formData.firstName} ${formData.lastName}`,
        frontendUrl: window.location.origin,
        couponDiscount: appliedCoupon ? appliedCoupon.discount_amount : 0,
        couponCode: appliedCoupon ? appliedCoupon.coupon.code : null,
        shippingAddress: shippingDifferent ? {
          line1: formData.shippingAddress,
          city: formData.shippingCity,
          state: formData.shippingState,
          postal_code: formData.shippingZip,
          country: 'US',
        } : {
          line1: formData.billingAddress,
          city: formData.billingCity,
          state: formData.billingState,
          postal_code: formData.billingZip,
          country: 'US',
        },
      });

      console.log('Response:', response);

      if (response?.data?.url) {
        window.location.href = response.data.url;
      } else {
        console.error('Invalid response:', response);
        throw new Error('No checkout URL received from server');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      const errorMessage = error?.response?.data?.error || error?.message || 'Failed to create checkout session';
      toast.error(errorMessage);
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

                {/* Billing Address */}
                <Card className="p-6">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">Billing Address</h2>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="billingAddress">Address *</Label>
                      <Input
                        id="billingAddress"
                        required
                        value={formData.billingAddress}
                        onChange={(e) => setFormData({...formData, billingAddress: e.target.value})}
                        className="rounded-xl mt-2"
                      />
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="billingCity">City *</Label>
                        <Input
                          id="billingCity"
                          required
                          value={formData.billingCity}
                          onChange={(e) => setFormData({...formData, billingCity: e.target.value})}
                          className="rounded-xl mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="billingState">State *</Label>
                        <Select value={formData.billingState} onValueChange={(value) => setFormData({...formData, billingState: value})}>
                          <SelectTrigger className="rounded-xl mt-2">
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            {US_STATES.map((state) => (
                              <SelectItem key={state.code} value={state.code}>
                                {state.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="billingZip">ZIP Code *</Label>
                        <Input
                          id="billingZip"
                          required
                          value={formData.billingZip}
                          onChange={(e) => setFormData({...formData, billingZip: e.target.value})}
                          className="rounded-xl mt-2"
                        />
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Shipping Different Checkbox */}
                <Card className="p-6">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="shippingDifferent" 
                      checked={shippingDifferent}
                      onCheckedChange={setShippingDifferent}
                    />
                    <Label htmlFor="shippingDifferent" className="text-base font-medium cursor-pointer">
                      Shipping address is different than billing
                    </Label>
                  </div>

                  {/* Shipping Address - Conditional */}
                  {shippingDifferent && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6"
                    >
                      <h3 className="text-xl font-bold text-slate-900 mb-4">Shipping Address</h3>
                      <div className="space-y-6">
                        <div>
                          <Label htmlFor="shippingAddress">Address *</Label>
                          <Input
                            id="shippingAddress"
                            required
                            value={formData.shippingAddress}
                            onChange={(e) => setFormData({...formData, shippingAddress: e.target.value})}
                            className="rounded-xl mt-2"
                          />
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="shippingCity">City *</Label>
                            <Input
                              id="shippingCity"
                              required
                              value={formData.shippingCity}
                              onChange={(e) => setFormData({...formData, shippingCity: e.target.value})}
                              className="rounded-xl mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="shippingState">State *</Label>
                            <Select value={formData.shippingState} onValueChange={(value) => setFormData({...formData, shippingState: value})}>
                              <SelectTrigger className="rounded-xl mt-2">
                                <SelectValue placeholder="Select state" />
                              </SelectTrigger>
                              <SelectContent>
                                {US_STATES.map((state) => (
                                  <SelectItem key={state.code} value={state.code}>
                                    {state.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="shippingZip">ZIP Code *</Label>
                            <Input
                              id="shippingZip"
                              required
                              value={formData.shippingZip}
                              onChange={(e) => setFormData({...formData, shippingZip: e.target.value})}
                              className="rounded-xl mt-2"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </Card>

                {/* Payment Notice */}
                <Card className="p-6 bg-cyan-50 border-cyan-200">
                  <div className="flex items-start gap-3">
                    <Lock className="w-6 h-6 text-cyan-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">Secure Payment with Stripe</h3>
                      <p className="text-sm text-slate-600">
                        Your payment information is processed securely by Stripe.
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

                {/* Coupon Code */}
                <div className="border-t pt-4 mb-4">
                  <Label className="text-sm font-semibold text-slate-900 mb-2">Have a coupon code?</Label>
                  <div className="flex gap-2 mt-2">
                    <Input
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      placeholder="Enter code"
                      disabled={appliedCoupon !== null}
                      className="rounded-xl"
                    />
                    {appliedCoupon ? (
                      <Button
                        onClick={handleRemoveCoupon}
                        variant="outline"
                        className="rounded-xl whitespace-nowrap"
                      >
                        Remove
                      </Button>
                    ) : (
                      <Button
                        onClick={handleApplyCoupon}
                        disabled={couponLoading}
                        className="bg-cyan-600 hover:bg-cyan-700 rounded-xl whitespace-nowrap"
                      >
                        {couponLoading ? 'Checking...' : 'Apply'}
                      </Button>
                    )}
                  </div>
                  {appliedCoupon && (
                    <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Coupon "{appliedCoupon.coupon.code}" applied</span>
                    </div>
                  )}
                </div>

                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${getCartTotal().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Shipping</span>
                    <span>
                      {(shippingDifferent ? formData.shippingState : formData.billingState) ? 
                        `$${getShippingCost().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}` : 
                        'Enter address'
                      }
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tax</span>
                    <span>
                      ${calculateTax().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                  </div>
                  {appliedCoupon && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Discount ({appliedCoupon.coupon.code})</span>
                      <span>-${calculateDiscount().toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                  )}
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