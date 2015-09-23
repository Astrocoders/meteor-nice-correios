NiceCorreios
============

## Installation

Install using Meteor's package management system:

```bash
> meteor add gbit:faker
```

## Usage
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

## Thanks
Thanks for agenciaideias.com.br!