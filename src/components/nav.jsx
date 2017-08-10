import React from 'react';


class Nav extends React.Component{

  render(){
    return (
    <div className="nav center">
      <div className="nav__arrowLeft" onClick={this.props.clkLeft}></div>
        <div className="slider center">
          <div className="nav__slider--others center">{this.props.dbYesterday}</div>
          <div className="nav__slider--others center">{this.props.yesterday}</div>
          <div className="nav__slider--day center">{this.props.day}</div>
          <div className="nav__slider--others center">{this.props.day + 1}</div>
          <div className="nav__slider--others center">{this.props.day + 2}</div>
        </div>
      <div className="nav__arrowRight" onClick={this.props.clkRight}></div>

    </div>
    )
  }

}

export default Nav;
