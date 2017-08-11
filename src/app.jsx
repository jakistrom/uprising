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
        if (this.state.info.content[this.state.day-1].tygodnia === 'niedziela'){
          Array.from(document.querySelectorAll('.holyday')).forEach(el => {
            el.className += " sunday";
          })
        }
        else{
          Array.from(document.querySelectorAll('.holyday')).forEach(el => {
            el.classList.remove('sunday');
          })



        }
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
    let dbYesterday = this.state.dbYesterday;
    let yesterday = this.state.yesterday;
    let day = this.state.day;
    let info = this.state.info;
    let clkLeft = this.clkLeft;
    let clkRight = this.clkRight;


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
