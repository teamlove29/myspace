import React, { Component } from 'react';

class test extends Component {

signIn = (even) => {
    // even.preventDefault()
    console.log('test')
    this.props.history.push("/Dashboard")

}


    render() {
        return (
            <div>
                <button onClick={this.signIn}>Click</button>
            </div>
        );
    }
}

export default test;
