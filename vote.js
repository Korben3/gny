const { Connection } = require('@gny/client');
const readlineSync = require('readline-sync');

const connection = new Connection('45.76.215.117');


const vote = (keyList, passphrase, secondPassphrase) => {

  if (secondPassphrase) {
    return connection.contract.Basic.vote(keyList, passphrase, secondPassphrase);
  }

  return connection.contract.Basic.vote(keyList, passphrase);
  
};


const main = async () => {
  const keyList = readlineSync.question('Who would you like to vote for?, example ["korben3","lemii"] \n> ');
  const passphrase = readlineSync.question('\nPassphrase?\n> ');
  const secondPassphrase = readlineSync.question(
    '\nSecond passphrase (leavy empty if not present)?\n> '
  );

  const res = await vote(keyList, passphrase, secondPassphrase);

  console.log(res);
};

main();
