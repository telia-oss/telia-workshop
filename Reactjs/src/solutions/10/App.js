import React, { Component, Fragment } from 'react';

import Hello from './Hello';

// Adding more functionality 

class App extends Component {
	setBackgroundColor = ( backgroundColor ) => {
		document.body.style.backgroundColor = backgroundColor;
	};

	render() {
		const inputId = 'background-color';

		return (
			<Fragment>
				<Hello name="Thorsten" />
				<p>Let's learn some React.</p>
				<button onClick={ () => alert( 'Cool!' ) }>Sure!</button>
				<hr />
				<p>
					<label htmlFor={ inputId }>
						Background color:
						<input onChange={ ( e ) => this.setBackgroundColor( e.target.value ) } />
					</label>
				</p>
				<button onClick={ () => this.setBackgroundColor( '#c0ffee' ) }>#c0ffee</button>
			</Fragment>
		);
	}
}

export default App;
