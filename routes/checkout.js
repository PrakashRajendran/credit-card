var express = require('express');
var router = express.Router();

/* POST checkout from index */
router.post('/checkout', function(req, res, next) {
	var totalAmountCents = Math.round(parseFloat(req.body.Price * req.body.Qty)* 100); // convert dollars to cents
	var totalAmountDollars = parseFloat((req.body.Price * req.body.Qty).toFixed(2));
	res.render('checkout', { 
		Qty: req.body.Qty, 
		TotalAmountCents: totalAmountCents,  
		TotalAmountDollars: totalAmountDollars, 
		Price: req.body.Price
	});
});

module.exports = router;
