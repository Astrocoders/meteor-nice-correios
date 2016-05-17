NiceCorreios
============

## Installation

Install using Meteor's package management system:

```bash
> meteor add astrocoders:nice-correios
```

## Usage
Locus: server
```js
  var shippingCosts = NiceCorreios.getDeliveryCost({
    from: '64460000', // only numbers
    to: '37550000',
    weight: 0.3 // kg
  });

  shipping =>
    {
      sedex: 68.5
      pac: 24.5
    }
```

## Considerations

Using this package you assume that the delivery will be made using a
box-delivery-3 from [this list](https://www.correios.com.br/para-voce/envio/embalagens-para-envios)

Ideas? Feel free to contact us!