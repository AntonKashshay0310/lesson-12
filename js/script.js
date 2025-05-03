// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com'
//   }

//   const {name, age, email} = user;


// //   Напишіть функцію, яка отримує об'єкт з ім'ям, прізвищем та віком та використовує деструктуризацію для повернення рядка, що містить інформацію про цю людину в такому форматі: "Мене звати Ім'я Прізвище і мені Вік років".
// const person = {
//     name: 'Nelli',
//     surname: 'Laroy',
//     age: 25
//   };

//   function personInfo({name, surname, age}) {
//     return `Мене звати: ${name}, моє призвіще: ${surname}, мені ${age} років`
//   }
 
//   console.log(personInfo(person));

// //
//   const car = {
//     make: 'Toyota',
//     model: 'Camry',
//     year: 2020,
//     features: ['power windows', 'rear camera', 'navigation'],
//     safety: {
//       airbags: true,
//       antilock_brakes: true,
//       stability_control: true
//     }
//   }

//   const {make, model, year, features: [feat1, feat2, feat3],   safety: { airbags,  antilock_brakes, stability_control }} = car;
//   console.log(feat1, airbags);

//   const student = {
//     name: 'Bruce',
//     surname: 'Lee',
//     grades: [4, 5, 3]
//   };
 
// function calculateAverageGrade({name, surname, grades}) {
// //  console.log(grades);
//  let total = 0;
//  for(const grade of grades){
//     total += grade;

//  }
//  return Math.round(total / grades.length)
// }

// // calculateAverageGrade(student)

//   console.log(calculateAverageGrade(student));


//   const movie = {
//     title: 'The Shawshank Redemption',
//     director: {
//       name: 'Frank Darabont',
//       nationality: 'American'
//     },
//     actors: ['Tim Robbins', 'Morgan Freeman'],
//     release_year: 1994,
//     ratings: {
//       imdb: 9.3,
//       rotten_tomatoes: 90
//     }
//   }

//   const {title, director: {name, nationality}, actors: [actor1, actor2], release_year, ratings: {imdb,rotten_tomatoes}} = movie;


  // const items = [
  //   { name: 'Футболка', price: 250, quantity: 2 },
  //   { name: 'Джинси', price: 800, quantity: 1 },
  //   { name: 'Кросівки', price: 1200, quantity: 1 }
  // ];

  // function calculateTotalCost (itemsArray) {
  //   let total = 0;
  //   for (const {price, quantity} of itemsArray) {
  //       total += price * quantity;
  //   }
  //   return total;
  // }
  
  // console.log(calculateTotalCost(items)); // 250 * 2 + 800 * 1 + 1200 * 1 = 2500




  // const players = [
  //   { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  //   { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  //   { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  //   { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  //   { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  // ];

  // const playersAbove200 = players.every((player) => player.timePlayed > 200)
  // console.log(playersAbove200);

  // const playersAbove250 = players.filter((player) => player.timePlayed > 250)
  // console.log(playersAbove250);

  // function getNames(arr) {
  //   return arr.map((player) => player.name)
  // }

  // console.log(getNames)

  const users = [

    {
  
      id: '701b29c3-b35d-4cf1-a5f6-8b12b29a5081',
  
      name: 'Moore Hensley',
  
      email: 'moorehensley@indexia.com',
  
      eyeColor: 'blue',
  
      friends: ['Sharron Pace'],
  
      isActive: false,
  
      balance: 2811,
  
      skills: ['ipsum', 'lorem'],
  
      gender: 'male',
  
      age: 37,
  
    },
  
    {
  
      id: '7a3cbd18-57a1-4534-8e12-1caad921bda1',
  
      name: 'Sharlene Bush',
  
      email: 'sharlenebush@tubesys.com',
  
      eyeColor: 'blue',
  
      friends: ['Briana Decker', 'Sharron Pace'],
  
      isActive: true,
  
      balance: 3821,
  
      skills: ['tempor', 'mollit', 'commodo', 'veniam', 'laborum'],
  
      gender: 'female',
  
      age: 34,
  
    },
  
    {
  
      id: '88beb2f3-e4c2-49f3-a0a0-ecf957a95af3',
  
      name: 'Ross Vazquez',
  
      email: 'rossvazquez@xinware.com',
  
      eyeColor: 'green',
  
      friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
  
      isActive: false,
  
      balance: 3793,
  
      skills: ['nulla', 'anim', 'proident', 'ipsum', 'elit'],
  
      gender: 'male',
  
      age: 24,
  
    },
  
    {
  
      id: '249b6175-5c30-44c6-b154-f120923736f5',
  
      name: 'Elma Head',
  
      email: 'elmahead@omatom.com',
  
      eyeColor: 'green',
  
      friends: ['Goldie Gentry', 'Aisha Tran'],
  
      isActive: true,
  
      balance: 2278,
  
      skills: ['adipisicing', 'irure', 'velit'],
  
      gender: 'female',
  
      age: 21,
  
    },
  
    {
  
      id: '334f8cb3-eb04-45e6-abf4-4935dd439b70',
  
      name: 'Carey Barr',
  
      email: 'careybarr@nurali.com',
  
      eyeColor: 'blue',
  
      friends: ['Jordan Sampson', 'Eddie Strong'],
  
      isActive: true,
  
      balance: 3951,
  
      skills: ['ex', 'culpa', 'nostrud'],
  
      gender: 'male',
  
      age: 27,
  
    },
  
    {
  
      id: '150b00fb-dd82-427d-9faf-2879ea87c695',
  
      name: 'Blackburn Dotson',
  
      email: 'blackburndotson@furnigeer.com',
  
      eyeColor: 'brown',
  
      friends: ['Jacklyn Lucas', 'Linda Chapman'],
  
      isActive: false,
  
      balance: 1498,
  
      skills: ['non', 'amet', 'ipsum'],
  
      gender: 'male',
  
      age: 38,
  
    },
  
    {
  
      id: 'e1bf46ab-7168-491e-925e-f01e21394812',
  
      name: 'Sheree Anthony',
  
      email: 'shereeanthony@kog.com',
  
      eyeColor: 'brown',
  
      friends: ['Goldie Gentry', 'Briana Decker'],
  
      isActive: true,
  
      balance: 2764,
  
      skills: ['lorem', 'veniam', 'culpa'],
  
      gender: 'female',
  
      age: 39,
  
    },
  
  ];

  const getUsersWithGender = (users, gender) => {
    return users.filter((user) => user.gender === gender).map((user) => user.name)
  };
  
  // console.log(getUsersWithGender(users, 'male'));


  // Об'єднати два масиви в один без повторень.
const array1 = [1, 2, 3, 44, 4, 5, 6, 6, 7];
const array2 = [5,12, 3, 14, 4, 5, 6, 6, 7];

// const newArr = [...array1, ...array2].filter((num, index, arr) => {
//   return arr.indexOf(num) === index
// })

const newArr = [...new Set([...array1, ...array2])]

console.log(newArr);


 