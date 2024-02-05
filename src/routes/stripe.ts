import { stripe } from "../app.js";
import express from "express";

const app = express.Router();

app.post("/create-checkout-session", async (req, res) => {
  const { cartItems, amount, userId,shippingCharges,subtotal,tax,discount } = req.body;

  const line_items = req.body.cartItems.map((item: any) => {
    return {
    
      price_data: {
        currency: "inr",

        product_data: {
          name: item.name,
          metadata: {
            id: item.productId,
          },
        },
        unit_amount: (item.price*item.cartQuantity * 100)+shippingCharges+tax-discount  ,
      },
      quantity: item.cartQuantity,
    };
  });

  console.log(cartItems, amount, userId);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.CLIENT_URL}/checkout-success?status=success&sessionId={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/cart`,
    billing_address_collection:"required"
  });

  res.send({
    url: session.url,
  });
});

export default app;
