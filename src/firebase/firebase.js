import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// const firebaseConfig = {
//     apiKey: "AIzaSyBI4JVe1rJ6USbW0w_LHl2qFXqkskIDLcc",
//     authDomain: "expensify-68c19.firebaseapp.com",
//     databaseURL: "https://expensify-68c19.firebaseio.com",
//     projectId: "expensify-68c19",
//     storageBucket: "expensify-68c19.appspot.com",
//     messagingSenderId: "62188945507",
//     appId: "1:62188945507:web:5301a34cb022aaa637f856",
//     measurementId: "G-GSGKM8RL7C"
// };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// const expenses = database.ref('expenses');

// expenses.on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// expenses.on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })
// expenses.on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
//     .on('value', (snapshot) => {
//         let expensesTable = [];
//         snapshot.forEach((childSnapshot) => {
//             expensesTable.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             });
//         });
//         console.log(expensesTable);
//     });
// expenses.push({
//     description: 'TODO',
//     note: 'Go for a run',
//     amount: 2322,
//     createdAt: '1st June 2039'
// });
// expenses.push({
//     description: 'Gass bil',
//     note: 'Payed on 23th of April',
//     amount: 1124,
//     createdAt: '24th June 2039'
// });
// expenses.push({
//     description: 'House rent',
//     note: 'Payed',
//     amount: 123333,
//     createdAt: '31st July 1999'
// });

