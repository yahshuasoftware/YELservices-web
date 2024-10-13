const Razorpay = require('razorpay');
require('dotenv').config();

<<<<<<< HEAD
console.log( process.env.REACT_APP_KEY_ID)
console.log(process.env.REACT_APP_KEY_SECRET)
=======
// console.log( process.env.REACT_APP_KEY_ID)
// console.log(process.env.REACT_APP_KEY_SECRET)
>>>>>>> Jaideep
const razorpay = new Razorpay({
    key_id: process.env.REACT_APP_KEY_ID,
    key_secret: process.env.REACT_APP_KEY_SECRET,
});

const checkout = async (req, res) => {
    try {
        const options = {
<<<<<<< HEAD
            amount: req.body.amount * 100, // amount in smallest currency unit
=======
            // amount: req.body.amount * 100, // amount in smallest currency unit
            amount:100,
>>>>>>> Jaideep
            currency: 'INR',
        };
        const order = await razorpay.orders.create(options);
        res.json(order);
    } catch (error) {
        console.error('Error creating Razorpay order:', error);
        res.status(500).send('Error creating Razorpay order');
    }
};

<<<<<<< HEAD
module.exports = checkout;
=======
module.exports = checkout;
>>>>>>> Jaideep
