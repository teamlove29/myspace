import React from 'react';
import Member from './Member';
import {
    Table,
    Card,

} from 'react-bootstrap';
const MemberList = (props) => {
    const members = props.members
    return (
        <div className="container">
            <Card >
                <Card.Body>

                    <Table bordered hover >
                        <thead>
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Avatar</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody >
                            {members.data && members.data.map(value => {
                                return (
                                    <tr>
                                        <Member key={value.id} data={value} />
                                    </tr>
                                )
                            })}

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>


        </div>
    );
}

export default MemberList;
