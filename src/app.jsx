import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header.jsx';
import Nav from '../src/components/nav.jsx';
import Aside from '../src/components/aside.jsx';
import Article from '../src/components/article.jsx';
import * as firebase from 'firebase';

require ('../sass/style.scss')

class App extends React.Component{
  constructor(props) {
   super(props)
   this.state = {
     day: 1,
     yesterday: []
   };
 };

  sunday = (state) =>{
    let holyday = Array.from(document.querySelectorAll('.holyday'))
    if (this.state.info.content[state].tygodnia === 'niedziela'){
      holyday.forEach(el => {
        el.className += " sunday";
      })
    }
    else{
      holyday.forEach(el => {
        el.classList.remove('sunday');
      })
    }
  }

  clkLeft = () =>{
    if(this.state.day > 1){
      this.setState({
        day: this.state.day - 1,
        yesterday: this.state.day -2,
        dbYesterday: this.state.yesterday -2
      });
    }

    if(this.state.day >= 63){

    }
    if(this.state.yesterday <= 2){
      this.setState({
        dbYesterday: []
      });
    }
    if(this.state.day <= 2){
      this.setState({
        yesterday: []
      });
    }
    this.sunday(this.state.day-2);
  }

  clkRight = () =>{

      if(this.state.day < 63){
        this.setState({
          day: this.state.day + 1,
          yesterday: this.state.day,
        });
        if(this.state.yesterday > 0){
          this.setState({
            dbYesterday: this.state.yesterday
          })
        }
        this.sunday(this.state.day);
      }
      if(this.state.day >= 1){
        document.querySelector('.nav__arrowLeft').style.display='block'
      }
  }

  arrowCheck = () =>{
    let arrow = document.querySelector('.nav__arrowLeft');

    if(this.state.day <= 1){
      document.querySelector('.nav__arrowLeft').style.display='block'
    }
    else {
      arrow.style.display='block'
    }
  }

  componentDidMount() {

    const config = {
        apiKey: "AIzaSyAjkZ8QbVwTu0zwbm1Oh1ykvysadCnS4pw",
        authDomain: "uprising-dfc2c.firebaseapp.com",
        databaseURL: "https://uprising-dfc2c.firebaseio.com",
        projectId: "uprising-dfc2c",
        storageBucket: "uprising-dfc2c.appspot.com",
        messagingSenderId: "519273459219"
      };

    firebase.initializeApp(config);

    const database = firebase.database();
    let data;

    firebase.database().ref('data').once('value').then( (snapshot) => {
    data = (snapshot.val());
       this.setState({
         info: data[0]
       });
    });
  }

  render(){
    let dbYesterday = this.state.dbYesterday,
        yesterday = this.state.yesterday,
        day = this.state.day,
        info = this.state.info,
        clkLeft = this.clkLeft,
        clkRight = this.clkRight;


    return  (
        <div className="max-width">
          <Header />

          <main className="flex">
            <Aside day={day} info={info} />
            <div>
              <Nav day={day} dbYesterday={dbYesterday} yesterday={yesterday} clkLeft={clkLeft} clkRight={clkRight} />
              <Article day={day} info={info} />
            </div>
          </main>
        </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
            <App />,
    document.getElementById('app')
  );
});
