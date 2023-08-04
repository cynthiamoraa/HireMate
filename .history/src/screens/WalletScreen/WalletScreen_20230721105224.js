import {View, Text} from 'react-native';
import React from 'react';

const WalletScreen = () => {

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

  return (
    <View>
      <Text>WalletScreen</Text>
    </View>
  );
};

export default WalletScreen;
