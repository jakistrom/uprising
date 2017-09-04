import React from 'react';
import App from '../app.jsx';

class Aside extends React.Component{
  render(){
    let info = this.props.info;
    let day = this.props.day;

    return (
    <aside className="aside"><a name="toTop">kotwica</a>
      <p className="aside__small">1944</p> {info ? <p className="aside__medium">{info.content[day-1].miesiac}</p> : null}
    <header className="aside__header">
      {info ? <p >&#x25CC; Wsch. sł. {info.content[day-1].wschod}&nbsp;&nbsp;</p> : null} {info ? <p>&#x25C9; Zach. sł. {info.content[day-1].zachod},&nbsp;&nbsp;</p> : null} {info ? <p>śr. temp. powietrza {info.content[day-1].temp}&#x2103;,</p> : null}
      {info ? <p>{info.content[day-1].aura},&nbsp;&nbsp;</p> : null}
      {info ? <p>stan wody w Wiśle {info.content[day-1].wisla}cm.</p> : null}
    </header>

      { info ? <p className="aside__large holyday">{info.content[day-1].dzien}</p> : null}
      { info ? <p className="aside__medium holyday">{info.content[day-1].tygodnia}</p> : null}
      { info ? <p className="aside__small center">{info.content[day-1].imieniny}</p> : null}










    </aside>
    )
  }

}

export default Aside;
