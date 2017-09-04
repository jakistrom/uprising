import React from 'react';
import App from '../app.jsx';


class Article extends React.Component{
  constructor(props) {
   super(props)
   this.state = {

   };
 }


 scroll = () => {
   let article = document.querySelector('.article')
   article.classList.remove('scrollOff');

 }

  render(){
    let info = this.props.info,
        day = this.props.day;

    return (<article>
    <div className="article scrollOff">
        <div className='cont'>
          { info ? <p className="article__content">{info.content[day-1].tresc}</p> : null}

        <img className="article__anchor" src="img/pw.png"></img>

        </div>

    </div>
      <a href="#toTop" className="toTop"></a>
      <p className="scroll" onClick={this.scroll}>scroll</p>
    </article>
    )
  }


}

export default Article;
