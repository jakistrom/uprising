import React from 'react';

class Intro extends React.Component{

  endIntro = () => {
    let intro = document.querySelector('.intro')
    intro.className += ' intro__out';
    document.querySelector('.max-width').style.display="block";
  }

  render(){
    return (
      <section className = "intro">
        <div className = "intro__cancel" onClick={this.endIntro}></div>
      </section>
    )
  }

}

export default Intro;
