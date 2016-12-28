import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCX3MYu4klr5VZ75Om3nYi3uPkj8XeFNIw",
  authDomain: "smannepa-todo-app.firebaseapp.com",
  databaseURL: "https://smannepa-todo-app.firebaseio.com",
  storageBucket: "smannepa-todo-app.appspot.com",
  messagingSenderId: "1070708165165"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todooy',
    version: '1.0.0'
  },
  isRunning: true,
  user: {
    name: 'Susheel',
    age: 43
  }
});

var notesRef = firebaseRef.child('notes');
var newNoteRef = notesRef.push();
newNoteRef.set({
  text: 'Walk the dog'
});
