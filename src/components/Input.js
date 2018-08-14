import React, { Component } from 'react';

class Input extends Component {

   state = {
       lastText: "",
       allTexts: []
   }

   handleSubmit = (event) => {
       if (event.keyCode === 13) {
           this.setState({ lastText: event.target.value });
           let updatedListOfText = [...this.state.allTexts];
           updatedListOfText.push(event.target.value);
           this.setState({ allTexts: updatedListOfText });
           // empty fields!
           event.target.value = "";
       }
   }

   render() {
       return (<div>
           <label htmlFor="inputField">input</label>
           <input className="format"
               name="inputField"
               id="inputField"
               placeholder="Skriv något -> Enter"
               onKeyUp={this.handleSubmit}
           />
           {this.state.allTexts.map(function (item, i) {
               return (
                   <p key={i}>{item}</p>
               );
           })}
       </div >);
   };
};

export default Input;