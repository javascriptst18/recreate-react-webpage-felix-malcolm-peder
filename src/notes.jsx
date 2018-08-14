/**
 * ? REACT Basics
 * 
 * JSX allows use to use an XML style syntax to build our
 * React.createElement calls.
 * 
 * For this to work, we need to use a toll that understands JSX and
 * can turn our JSX tags into React.createElement calls.
 * 
 * The solution is to use Babel.
 * Babel does a lot of things, but we’ll be using a feature of Babel 
 * which allows it to read and compile JSX code from our browser live.
 * 
 * 
 * Not from this course, but a good tutorial:
 * http://ccoenraets.github.io/es6-tutorial/setup-babel/
 */

// Treehouse - "our-first-application"
// * STATELESS FUNCTIONAL COMPONENTS - STATIC
// ? STATELESS FUNCTIONAL COMPONENTS - STATIC
// ! STATELESS FUNCTIONAL COMPONENTS - STATIC

const PLAYERS = [
  {
    name: "Jonah Hill",
    score: 15,
    id: 1, // these should be unique and auto-generated or something,
           // like the _id in MongoDB
  },
  {
    name: "Samantha Smith",
    score: 18,
    id: 2, // these should be unique and auto-generated or something,
           // like the _id in MongoDB
  },
  {
    name: "Adam Grey",
    score: 21,
    id: 3, // these should be unique and auto-generated or something,
           // like the _id in MongoDB
  }
];

function Header(props) {
  return (
     <div className="header">
        <h1>{props.title}</h1>
      </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
};

function Counter(props) {
  return (
    <div className="counter">
      <button className="counter-action decrement"> - </button> 
      <div className="counter-score"> {props.score} </div>
      <button className="counter-action increment"> + </button> 
    </div>
  );
}

Counter.propTypes = {
  score: React.PropTypes.number.isRequired,
};

function Player(props) {
  return (
    <div className="player">
    <div className="player-name">
        {props.name}
    </div>
    <div className="player-score">
      < Counter score={props.score} />
    </div>
    </div>
  );
}


Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
};

function Application(props) {
  return (
    <div className="scoreboard">
      < Header title={props.title} />
    
      <div className="players">
        {props.players.map(function(player) {
          return < Player name={player.name} score={player.score} key={player.id} />
        })}
      </div>
    </div>
  );
}


Application.propTypes = {
  title: React.PropTypes.string,
  players: React.PropTypes.arrayOf(React.PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    score: React.PropTypes.number.isRequired,
    id: React.PropTypes.number.isRequired,
  })).isRequired,
};


Application.defaultProps = {
  title: "Scoreboard"
};

ReactDOM.render(<Application players={PLAYERS} />, document.getElementById('container'));

// * COMPONENT CLASS - DYNAMIC
// ? COMPONENT CLASS - DYNAMIC
// ! COMPONENT CLASS - DYNAMIC
// Rewriting our Counter to a Component Class

// in 'old' React it used to be:
// const Counter = React.createClass({});
// ? is this right ????????
class Counter extends React.Component {
  constructor(props) {
    super({
      propTypes: {
        score: React.PropTypes.number.isRequired,
      },
    });
  }
  
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button> 
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button> 
      </div>
    );
  }
};


// ! Notes on new React Class
// ? Notes on new React Class
// * Notes on new React Class
// Before (15.4 and below)
// https://reactjs.org/blog/2017/04/07/react-v15.5.0.html#migrating-from-reactcreateclass

import React from 'react';

class Component extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

Component.propTypes = {
  text: React.PropTypes.string.isRequired,
}

// After (15.5)
import React from 'react';
import PropTypes from 'prop-types';

class Component extends React.Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}

Component.propTypes = {
  text: PropTypes.string.isRequired,
};


// ? So in our app, something like this:
// ! NOTE: No... Doesn't seem to f*cking work...
import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  propTypes = {
    score: PropTypes.number.isRequired,
  },
  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement"> - </button> 
        <div className="counter-score"> {this.props.score} </div>
        <button className="counter-action increment"> + </button> 
      </div>
    );
  }
};
