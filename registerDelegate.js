const { Connection } = require('@gny/client');
const readlineSync = require('readline-sync');

const connection = new Connection('45.76.215.117');


const registerDelegate = (passphrase, secondPassphrase) => {

  if (secondPassphrase) {
    return connection.contract.Basic.registerDelegate(passphrase, secondPassphrase);
  }

  return connection.contract.Basic.registerDelegate(passphrase);
};

module.exports = registerDelegate;

const main = async () => {
  const passphrase = readlineSync.question('\nPassphrase?\n> ');
  const secondPassphrase = readlineSync.question(
    '\nSecond passphrase (leavy empty if not present)?\n> '
  );

  const res = await registerDelegate(passphrase, secondPassphrase);

  console.log(res);
};

if (typeof module !== 'undefined' && !module.parent) main();
