import React from 'react';
import { render } from 'react-dom';

function App() {
	return <h1>Hello World!</h1>;
}

const root = document.getElementById( 'root' );

const element = <App />;

render( element, root );
