import React from 'react';
import { render } from 'react-dom';

const ce = React.createElement;

const MyTitle = function(props) {
  return (
  	<div>
  		<h1 style={ { color: props.color } }>{props.title}</h1>
  	</div>
  );
};

const MyFirstComponent = function() {
  return (
  	<div id="my-first-component">
  		<MyTitle title="Game of Thrones" color="YellowGreen"/>
  		<MyTitle title="Stranger Things" color="GreenYellow"/>
  		<MyTitle title="Rick and Morty" color="LimeGreen"/>
  		<MyTitle title="House of Cards" color="peru"/>
  	</div>
  );
};

render(ce(MyFirstComponent), document.getElementById('app'));
