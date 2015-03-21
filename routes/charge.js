var express = require('express');
var router = express.Router();

var stripe = require("stripe")("sk_test_Fq2f8mu4RttYcdHyOnFtmOhY");

/* POST charge payment */
router.post('/charge', function(req, res, next) {
	console.log('test');
	var stripeToken = req.body.stripeToken;
	console.log(stripeToken);
	console.log(req.body.TotAmtCents);
	var charge = stripe.charges.create({
		amount: req.body.TotAmtCents, // amount in cents, again
		currency: "cad",
		card: stripeToken,
		description: "testuser@gmail.com"
	}, function(err, charge) {
		if (err) {
			res.render('payment-error', { title: 'Payment Unsuccessful', response: err } );
		} else {
			//Render a thank you page called "Charge"
			console.log('Card processed successfully');
			console.log(charge);
			res.render('success', { title: 'Payment Successful', response: JSON.stringify(charge) } );
		}
	});
});

module.exports = router;
