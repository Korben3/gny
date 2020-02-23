const { Connection } = require('@gny/client');
const readlineSync = require('readline-sync');

const connection = new Connection('45.76.215.117');


const lockCoins = (secondsLocked, amount, passphrase) => {

	let currentHeight=209834; // get from http://45.76.215.117:4096/api/blocks/getHeight
	let lockTime=currentHeight+secondsLocked;

	console.log(`Locking time from ${currentHeight} until ${lockTime}`);

	return connection.contract.Basic.lockAccount(lockTime, amount, passphrase);
};


const main = async () => {
  const secondsLocked = readlineSync.question('Seconds locked? (min. 172800) \n> ');
  const amount = readlineSync.question('\nAmount to lock?\n> ');
  const passphrase = readlineSync.question('\nPassphrase?\n> ');

  const res = await lockCoins(parseInt(secondsLocked), amount, passphrase);

  console.log(res);
};

main();

