const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);
const requireLogin = require('../middlewares/requireLogin');
module.exports = (app) => {
  app.post("/api/stripe", requireLogin,async(req, res) => {
    const charge = await stripe.charges.create({
        amount: 100,
    currency: 'inr',
    source: req.body.id,
    description: '1 for 1 credit',
    });
    req.user.credits += 1;
   const user= await req.user.save();

   res.send(user);
  });
};
