

$(document).ready(function () {
    $(function () {
        $("#tabs").tabs();
    });

    $('#formet').click(function () {

        var id = Math.floor((Math.random() * 1000 + 1));

        ga('ecommerce:addTransaction', {
            'id': id,                     // Transaction ID. Required.
            'affiliation': 'Acme Clothing',   // Affiliation or store name.
            'revenue': '11.99',               // Grand Total.
            'shipping': '5',                  // Shipping.
            'tax': '1.29'                     // Tax.
        });

        ga('ecommerce:addItem', {
            'id': id,                     // Transaction ID. Required.
            'name': 'Fluffy Pink Bunnies',    // Product name. Required.
            'sku': 'DD23444',                 // SKU/code.
            'category': 'Party Toys',         // Category or variation.
            'price': '11.99',                 // Unit price.
            'quantity': '1'                   // Quantity.
        });
        
        ga('ecommerce:send');

        console.log("ga");
        ga('send', 'event', 'formulär', 'skickat', 'kontaktformulär', { 'hitCallback': function () { document.location = '/'; } });
        return false;
    });


    


});
