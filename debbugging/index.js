var a = 'Hello';

function hello() {
  let b = 'Hello world';
  const c = 'Hello world!!';
  if (true) {
    let d = '¡¡Hello world!!';
    debugger;
  }
}

hello();

// about:blank (in chrome)
const moneyBox = () => {
  debugger;
  var saveCoins = 0;
  const countCoins = (coins) => {
    debugger;
    saveCoins += coins;
    console.log(`MoneyBox: ${saveCoins}€`);
  };
  return countCoins;
};

let myMoneyBox = moneyBox();
myMoneyBox(4); // 4
myMoneyBox(6); // 4 + 6 = 10
myMoneyBox(10); // 10 + 10 = 20
