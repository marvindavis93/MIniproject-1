/Javascript is case sensitive

/*Javascript statement end in a semicolon
Javascript comments can span single or multiple lines*/

console.log('Lab 04 startup code'); //log in developer tools
console.log('--------------------------------------------------');
console.log(
  'Salesperson' + '      ' + 'Commission' + '     ' + 'Average Commission'
);
console.log('--------------------------------------------------');

function CalculateCommission() {
  var topCommission = 0;
  var topSalesPerson = '';

  var salesPersons = [
    'Brad',
    'Nila',
    'Joseph',
    'Kesh',
    'Lydia',
    'Devon',
    'Miller',
  ];

  var decemberSales = [1500, 15000, 30000, 12000, 45000, 25000, 8000];
  var januarySales = [10000, 25000, 20000, 14000, 30000, 16000, 30000];
  var februarySales = [8000, 7500, 45000, 10000, 38000, 22000, 15000];

  for (var index = 0; index < salesPersons.length; index++) {
    var commission = 0;
    var salesPerson = salesPersons[index];
    var totalSales =
      decemberSales[index] + januarySales[index] + februarySales[index];
    if (totalSales > 30000) {
      commission = totalSales * 0.08;
    } else if (totalSales > 15000) {
      commission = totalSales * 0.05;
    } else if (totalSales > 10000) {
      commission = totalSales * 0.03;
    } else if (totalSales > 5000) {
      commission = totalSales * 0.02;
    } else {
      commission = totalSales * 0.01;
    }

    var averageCommission = (commission / 3).toFixed();
    if (commission > topCommission) {
      topCommission = commission;
      topSalesPerson = salesPerson;
    }

    console.log(
      salesPerson +
        '           ' +
        '$' +
        commission +
        '           ' +
        '$' +
        averageCommission
    );
  }
  console.log('--------------------------------------------------');
  console.log(
    'Top Salesperson and their commission: ' +
      topSalesPerson +
      ' ' +
      '$' +
      topCommission
  );
  console.log('--------------------------------------------------');

  alert(
    'Top Salesperson is ' +
      topSalesPerson +
      ' and top commission amount is $' +
      topCommission
  );
}
