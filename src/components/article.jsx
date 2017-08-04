import React from 'react';
import ArticleHeader from '../components/article-header.jsx';
import App from '../app.jsx';
import {getInfo} from './axios.jsx';
import {info} from './axios.jsx';



class Article extends React.Component{
  constructor(props) {
   super(props)
   this.state = {

   };
 }


  render(){
    let info = this.state.info;
    let day = this.props.day;

    return (
    <div className="article">
      <ArticleHeader info={info} day={day}/>
        { info ? <h1>{info.content[day-1].dzien}</h1> : null}
        { info ? <h2>{info.content[day-1].miesiac}</h2> : null}
        { info ? <p>{info.content[day-1].tresc}</p> : null}

    </div>
    )
  }

  componentDidMount() {
    getInfo().then(data => {
      this.setState({
        info: data,
      });
      console.log(this.state.info);
    });
  }
}

export default Article;
