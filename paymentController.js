
import Stripe from "stripe";

export const createPaymentIntent = async(req,res)=>{
  const stripe = new Stripe(process.env.STRIPE_SECRET);
  const payment = await stripe.paymentIntents.create({
    amount:req.body.amount,
    currency:"inr"
  });
  res.json(payment);
};
