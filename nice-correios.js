NiceCorreios = {};
NiceCorreios.getDeliveryCost = function(options){
  check(options, {
    from: String,
    to: String,
    weight: Match.OneOf(String, Number),
  });

  const soap = Npm.require('soap');
  const Future = Npm.require('fibers/future');
  const future = new Future();
  const apiUrl = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.asmx?wsdl';

  const {from, to, weight} = options;
  const args = {
    nCdEmpresa: '',
    sDsSenha: '',
    sCdMaoPropria: 'N',
    nVlValorDeclarado : 0,
    sCdAvisoRecebimento: 'N',
    nCdServico: '40010, 41106',

    // User info,
    sCepOrigem: from,
    sCepDestino: to,
    nVlPeso: weight,

    // Standard package format
    nCdFormato: 1,

    // Standard package size
    nVlComprimento: 27,
    nVlAltura: 22,
    nVlLargura: 13,
    nVlDiametro: 0,
  };


  soap.createClient(apiUrl, (error, client) => {
    client.CalcPreco(args, (error, result) => {
      if (error) {
        future.throw(error);
        return;
      }

      const services = result.CalcPrecoResult.Servicos.cServico;
      const sedex = (_.find(services, {Codigo: 40010}) || {}).Valor || 0;
      const pac = (_.find(services, {Codigo: 41106}) || {}).Valor || 0;

      future.return({
        sedex,
        pac,
      });
    });
  });

  return future.wait();
};