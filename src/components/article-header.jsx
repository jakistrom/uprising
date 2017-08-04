import React from 'react';
import Article from '../components/article.jsx';

class ArticleHeader extends React.Component{
  render(){
    let info = this.props.info;
    let day = this.props.day;

    return (
    <div className="articleHeader">
    
      { info ? <p>{info.content[day-1].tygodnia}</p> : null}
      { info ? <p>{info.content[day-1].imieniny}</p> : null}

      { info ? <p>{info.content[day-1].wschod}</p> : null}
      { info ? <p>{info.content[day-1].zachod}</p> : null}
      { info ? <p>{info.content[day-1].temp}</p> : null}
      { info ? <p>{info.content[day-1].aura}</p> : null}
      { info ? <p>{info.content[day-1].wisla}</p> : null}
    </div>
    )
  }

}

export default ArticleHeader;
