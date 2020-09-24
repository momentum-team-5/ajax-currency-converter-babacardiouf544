const currencies = [
  'EUR',
  'CAD',
  'HKD',
  'ISK',
  'PHP',
  'DKK',
  'HUF',
  'CZK',
  'AUD',
  'RON',
  'SEK',
  'IDR',
  'INR',
  'BRL',
  'RUB',
  'HRK',
  'JPY',
  'THB',
  'CHF',
  'SGD',
  'PLN',
  'BGN',
  'TRY',
  'CNY',
  'NOK',
  'NZD',
  'ZAR',
  'USD',
  'MXN',
  'ILS',
  'GBP',
  'KRW',
  'MYR'
]

const userUrl = 'https://api.exchangeratesapi.io/latest?base='


//get website
fetch(userUrl)
.then(response => response.json())
.then(function (data) {
  console.log(data)
})


//let's insert the currrency option in the selector
const currency = document.getElementById('base-currency')
Object.keys(currencies).map(key => currency.add(new Option(currencies[key], key)))

const currency1 = document.getElementById('base-currency1')
Object.keys(currencies).map(key => currency1.add(new Option(currencies[key], key)))
