import React, { Component } from 'react';
import axios from 'axios';
import {
    Table, Button,
    Card,
    ListGroup,
    ListGroupItem,
    Nav,
    CardGroup,
    CardDeck,
    CardColumns
} from 'react-bootstrap';
import MemberList from './MemberList';


class MemberPage extends Component {


    constructor(props) {
        super(props);
        this.state = {
            data: [],
            err : null
        };
      }


componentDidMount(){
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        this.setState({data:response.data})
    })
    .catch(err => {
      this.setState({err:err})
    })
}
    render() { 
        const data = this.state
        return (
            <div>
                <MemberList members={data} />
            </div>
        );
    }
}

export default MemberPage;

