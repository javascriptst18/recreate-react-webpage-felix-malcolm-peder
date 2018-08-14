import React from 'react';
import Header from './Header';
import Main from './Main';
import Links from './Links';
import ButtonContainer from './ButtonContainer';
import Input from './Input';

function Content() {
  return(
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="Container">
        <div className="Links">
          <Links />
        </div>
        <div className="Container">
          <Main />
          <ButtonContainer />
          <Input />
        </div>
      </div>
    </div>
  )
}

export default Content;

