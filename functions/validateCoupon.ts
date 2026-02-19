import { createClientFromRequest } from 'npm:@base44/sdk@0.8.6';

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const { code, subtotal } = await req.json();

    if (!code) {
      return Response.json({ error: 'Coupon code is required' }, { status: 400 });
    }

    // Find coupon (case-insensitive)
    const coupons = await base44.entities.Coupon.filter({});
    const coupon = coupons.find(c => c.code.toLowerCase() === code.toLowerCase());

    if (!coupon) {
      return Response.json({ error: 'Invalid coupon code' }, { status: 404 });
    }

    // Check if active
    if (!coupon.active) {
      return Response.json({ error: 'This coupon is no longer active' }, { status: 400 });
    }

    // Check expiry
    if (coupon.expiry_date && new Date(coupon.expiry_date) < new Date()) {
      return Response.json({ error: 'This coupon has expired' }, { status: 400 });
    }

    // Check max uses
    if (coupon.max_uses && coupon.times_used >= coupon.max_uses) {
      return Response.json({ error: 'This coupon has reached its usage limit' }, { status: 400 });
    }

    // Check minimum purchase
    if (coupon.min_purchase && subtotal < coupon.min_purchase) {
      return Response.json({ 
        error: `Minimum purchase of $${coupon.min_purchase.toFixed(2)} required` 
      }, { status: 400 });
    }

    // Calculate discount
    let discountAmount = 0;
    if (coupon.discount_type === 'percentage') {
      discountAmount = (subtotal * coupon.discount_value) / 100;
    } else {
      discountAmount = Math.min(coupon.discount_value, subtotal);
    }

    return Response.json({
      valid: true,
      coupon: {
        id: coupon.id,
        code: coupon.code,
        discount_type: coupon.discount_type,
        discount_value: coupon.discount_value
      },
      discount_amount: discountAmount
    });

  } catch (error) {
    console.error('Coupon validation error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});