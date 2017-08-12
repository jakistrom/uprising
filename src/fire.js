import firebase from 'firebase'
const config = {
   apiKey: "AIzaSyAjkZ8QbVwTu0zwbm1Oh1ykvysadCnS4pw",
   authDomain: "uprising-dfc2c.firebaseapp.com",
   databaseURL: "https://uprising-dfc2c.firebaseio.com",
   projectId: "uprising-dfc2c",
   storageBucket: "uprising-dfc2c.appspot.com",
   messagingSenderId: "519273459219"
 };
const fire = firebase.initializeApp(config);
export default fire;
