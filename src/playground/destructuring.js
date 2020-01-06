// const person = {
//     name: 'Mike',
//     age: 25,
//     location: {
//         country: 'Poland',
//         temp: 100
//     }
// }

// let { name, age } = person
// let { country } = person.location

// console.log(name, age, country);

// const book = {
//     title: 'Manoo',
//     author: 'JKR',
//     publisher: {
//         name: 'EHO'
//     }
// }

// const { name: publisherName = 'no One' } = book.publisher
// console.log(publisherName);

const item = ['coffee', '2$', '5$', '7$']

const [name, , mediumPrice] = item;

console.log(`Medium ${name} costs ${mediumPrice}`);