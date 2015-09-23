NiceCorreios = {};
NiceCorreios.getDeliveryCost = function(options){
  check(options, {
    from: String,
    to: String,
    weight: Match.OneOf(String, Number)
  });

  var call = 'http://developers.agenciaideias.com.br/correios/frete/json/';
  call += options.from + '/' + options.to + '/' + options.weight.toString();

  return EJSON.parse(HTTP.get(call).content);
};