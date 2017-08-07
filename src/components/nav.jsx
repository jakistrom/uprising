import React from 'react';

class Nav extends React.Component{

  render(){
    return (
    <div className="nav flex">
      <button onClick={this.props.clkLeft}> lewo </button>
        <div className="slider flex">
          <div className="nav__slider--others">{this.props.dbYesterday}</div>
          <div className="nav__slider--others">{this.props.yesterday}</div>
          <div className="nav__slider--day">{this.props.day}</div>
          <div className="nav__slider--others">{this.props.day + 1}</div>
          <div className="nav__slider--others">{this.props.day + 2}</div>
        </div>
      <button onClick={this.props.clkRight}> prawo </button>
        <input type="text" placeholder="dzień"></input>
         <input type="submit" value="wybierz"></input>
    </div>
    )
  }

}

export default Nav;
