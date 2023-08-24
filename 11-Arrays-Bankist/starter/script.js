'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Creating a function to display the movement of transactions
const displayMovements = function(movement){
  containerMovements.innerHTML = '';

  movement.forEach((mov, i) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
        <div class="movements__value">${mov}</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
}
displayMovements(account1.movements)


// Creating a calc & Display balance function
const calcDisplayBalance = function(movements){
  labelBalance.textContent = `${movements.reduce((acc, cur) => acc + cur, 0)} EUR`;
}
calcDisplayBalance(account1.movements)


// Creating a function the generate a login initial(username) from the owner's name
const createUsernames =(accs) => {
  accs.forEach(function (acc) {
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map((name) => name.charAt(0))
    .join('');
  })
}
createUsernames(accounts);



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


// Simple Array Methods
/*

let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE
console.log(arr.slice(2)); // slices and print items from index 2 to the last element in the array
console.log(arr.slice(2, 4)); // slices and print items from index 2 to index 4 but not including item at index 4
console.log(arr.slice(-2)); // slices and print the last two items in the array
console.log(arr.slice(-1)); // slices and print the last item in the array
console.log(arr.slice(1, -2)); // slices out the end point and print the remaining items from d starting index
console.log(arr.slice()); // prints out the whole items in the array
console.log([...arr]); // using the spread operator to print out the items in the array

// SPLICE
// Splice method on array is mutable
// console.log(arr.splice(2)); // slices out the items from index 2 and prints the rest
arr.splice(-1); // slices out the last item in the array and prints the rest
console.log(arr);
arr.splice(1, 2); 
console.log(arr); // slices out the items from index 1 to index 2 including index 2

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse()); // reverses items in the array making the last index the first and the first the last
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2); // concatenate the two arrays together
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN
console.log(letters.join(' - ')); // print a string-like text with an hypen between every items in the array

*/


// The new at Method
/*

const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));

console.log('jonas'.at(0));
console.log('jonas'.at(-1));

*/


// forEach Loop over Arrays
/*

// forOf vs forEachLoop
// For the forOf Loop,  while using .entries(), first element is the index while second is the value
// Continue and break statement works with forEach loop
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
for(const [i, movement] of movements.entries()){
  if(movement > 0){
    console.log(`Movement ${i + 1} You deposited ${movement}`)
  } else{
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`)
  }
}

console.log(`----- forEach Loop ------`)
// For the forEach Loop, arguments are passed in order of element, index and array
// Continue and break statement do not work with forEach loop
movements.forEach(function(movement, i, arr){
  if (movement > 0) {
    console.log(`Movement ${i + 1} You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1} You withdrew ${Math.abs(movement)}`);
  }
})

*/


// ForEach Loop with Maps and Sets
/*

// With Map
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function(value, key, map){
  console.log(`${key}: ${value}`);
})

// With Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function(value, _, map){
  console.log(`${value}: ${value}`) // we get USD: USD reason becuase sets dont have keys and indexes either
  // So we need to change the name of the key variable which in this case is an underscore which means a throwaway or unnecessary variable
})

*/

// Coding Challenge #1
/*

const checkDogs = function(dogsJulia, dogsKate){
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  const dogs =  [...dogsJuliaCorrected, ...dogsKate]
  dogs.forEach(function(dog, i){
    const dogAge = dog >= 3 ? 'an adult' : 'a puppy 🐶';
    console.log(`Dog number ${i+1} is ${dogAge} and is ${dogs[i]} years old`)
  })

}
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3])
console.log('.');
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

*/


// The Map Method
/*

// map method returns a new array containing the results of applying an operation on all original array elements
// Converting euro to usd assuming 1eur = 1.1usd
const eurToUsd = 1.1;
const movementsUSD = movements.map(function(mov) {
  return mov * eurToUsd;
});

const movementsUSDArrow = movements.map((mov2) => mov2 * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsDescriptions = movements.map((move, i) => 
  `Movement ${i + 1}: You ${move > 0 ? 'deposited' : 'withdrew'} ${Math.abs(move)}`
);
console.log(movementsDescriptions);

*/


// The filter Method
/*

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);

*/


// The Reduce Method
/*

console.log(movements)

// Summing up all the movements in an array
// Using normal function expression
// const balance = movements.reduce(function(acc, cur, i, arr){
//   console.log(`Iteration ${i}: ${acc}`)
//   return acc + cur;
// }, 0); 

// Using arrow function
const balance = movements.reduce((acc, cur,) => acc + cur, 0);
console.log(balance);

// Using for Of Loop
let bal = 0;
for(const mov of movements) bal += mov;
console.log(bal)

// Another Example
// Getting Maximum value
// Always use the first item in the array as the starting point whenever youre trying to find a max or min value
const maxValue = movements.reduce((acc, cur) => 
  cur > acc ? acc = cur : acc = acc, movements[0]
)
console.log(maxValue);

*/


// Coding Challenge #2
const calcAverageHumanAge = function(dogAges){
  const humanAge = dogAges.map((age) => age > 2 ? 16 + age * 4 : age * 2);
  const adult = humanAge.filter((age) => age > 18);
  const average = adult.reduce((acc, cur) => acc + cur) / adult.length;
  
  console.log(humanAge);
  console.log(adult);
  console.log(average)
}
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);