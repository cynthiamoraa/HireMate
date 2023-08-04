const IntaSend = require('intasend-node');

const intasend = new IntaSend(/*...Authenticate*/);

let wallets = intasend.wallets();
wallets
  .list()
  .then(resp => {
    console.log(`Response: ${JSON.stringify(resp)}`);
  })
  .catch(err => {
    console.error(`Error: ${err}`);
  });
