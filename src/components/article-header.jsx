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

      { info ? <p>Wsch. sł. {info.content[day-1].wschod}</p> : null}
      { info ? <p>Zach. sł. {info.content[day-1].zachod}</p> : null}
      { info ? <p>Śr. temp. powietrza {info.content[day-1].temp}&#x2103;</p> : null}
      { info ? <p>{info.content[day-1].aura}</p> : null}
      { info ? <p>Poziom Wisły {info.content[day-1].wisla}cm</p> : null}
    </div>
    )
  }

}

export default ArticleHeader;
