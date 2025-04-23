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




  const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
    { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
    { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
  ];


  const playersName = players.map((player) => player.name)

  const playersOnline = 