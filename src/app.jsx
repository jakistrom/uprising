import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header.jsx';
import Nav from '../src/components/nav.jsx';
import Aside from '../src/components/aside.jsx';
import Article from '../src/components/article.jsx';
import axios from 'axios';
import {getInfo} from './components/axios.jsx';

require ('../sass/style.scss')

class App extends React.Component{
  constructor(props) {
   super(props)
   this.state = {
     day: 1,
     yesterday: []
   };
  }

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

    this.timerID = setTimeout(()=>{
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
        this.sunday(this.state.day-1);
      }


    },500)


  }

  componentDidMount() {

    getInfo().then(data => {
      this.setState({
        info: data,
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
        <Nav day={day} dbYesterday={dbYesterday} yesterday={yesterday} clkLeft={clkLeft} clkRight={clkRight} />
        <main className="flex">
          <Aside day={day} info={info} />
          <Article day={day} info={info} />
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
