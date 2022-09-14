// Задача:
// - користувач вводить курс Bitcoin до доллара
// - користувач вводить суму доларів, що хоче поміняти на Bitcoin
// - програма повертає кількість Bitcoin, що можна купити на вказану суму.

// Приклад:

// What is Bitcoin price today?
// // 21000
// // How much $ do you have?
// // 1000
// // You can buy 0.0476190 BTC



const btcPrice = Number(prompt('What is Bitcoin price today to USD?', ''));
const amountOfDollars = Number(prompt('How much $ do you have?', ''));
function usdToBitcoin() {
    let btcSuma = amountOfDollars * 1 / btcPrice;
    alert(`You can buy ${btcSuma} BTC`);
}
usdToBitcoin();


