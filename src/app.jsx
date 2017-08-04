import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../src/components/header.jsx';
import Nav from '../src/components/nav.jsx';
import Aside from '../src/components/aside.jsx';
import Article from '../src/components/article.jsx';
import axios from 'axios';

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
    }
  }


  render(){
    let dbYesterday = this.state.dbYesterday;
    let yesterday = this.state.yesterday;
    let day = this.state.day;
    let clkLeft = this.clkLeft;
    let clkRight = this.clkRight;


    return  (
      <div className="max-width">
        <Header />
        <Nav day={day} dbYesterday={dbYesterday} yesterday={yesterday} clkLeft={clkLeft} clkRight={clkRight}/>
        <main className="flex">
          <Aside />
          <Article day={day} />
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
