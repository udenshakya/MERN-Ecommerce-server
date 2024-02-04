import express from "express";
import {
  allCoupons,
  applyDiscount,
  createPaymentIntent,
  deleteCoupons,
  newCoupon,
} from "../controllers/payment.js";
import { adminOnly } from "../middlewares/auth.js";

const app = express.Router();

// route -api/v1/payment/create    //create payment
app.post("/create",createPaymentIntent)

// route - api/v1/payment/coupon/new
app.post("/coupon/new", adminOnly, newCoupon);

app.get("/discount", applyDiscount);

app.get("/coupon/all", adminOnly, allCoupons);

app.delete("/coupon/:id", adminOnly, deleteCoupons);

export default app;
