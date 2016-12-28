import firebase from 'firebase';

try {
  var config = {
    apiKey: "AIzaSyCX3MYu4klr5VZ75Om3nYi3uPkj8XeFNIw",
    authDomain: "smannepa-todo-app.firebaseapp.com",
    databaseURL: "https://smannepa-todo-app.firebaseio.com",
    storageBucket: "smannepa-todo-app.appspot.com",
    messagingSenderId: "1070708165165"
  };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
