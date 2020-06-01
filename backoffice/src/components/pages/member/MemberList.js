import React from 'react';
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers";
// import Member from './Member';
import {
    Table,
    Card,

} from 'react-bootstrap';
const MemberList = (props) => {


    const dot = {
        height: "10px",
        width: "10px",
        backgroundColor: "#00CC00",
        borderRadius: "50%",
        display: "inline-Block"
    }

    const member = (member) => {
        return (
            <tr key={member.id}>
                <td className="text-center">{member.id}</td>
                <td className="text-center"><img style={{ width: '50px' }} 
                src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" />
                </td>
                <td>{member.name}</td>
                <td>{member.email}</td>
                <td>Member</td>
                <td> <span style={dot}></span> online </td>
                <td>
                    <a
                        title="Edit customer"
                        className="btn btn-icon btn-light btn-hover-primary btn-sm mx-3"
                    // onClick={() => openEditCustomerDialog(row.id)}
                    >
                        <span className="svg-icon svg-icon-md svg-icon-primary">
                            <SVG
                                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                            />
                        </span>
                    </a>

                    <a
                        title="Delete customer"
                        className="btn btn-icon btn-light btn-hover-danger btn-sm"
                    // onClick={() => openDeleteCustomerDialog(row.id)}
                    >
                        <span className="svg-icon svg-icon-md svg-icon-danger">
                            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
                        </span>
                    </a>
                </td>
            </tr>
        )
    }



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
                            {props.members.map(member)}
                            {/* หรือ map ส่งไปอีกหน้า */}
                            {/* {members.data && members.data.map(value => {
                                return (
                                    <tr>
                                        <Member key={value.id} data={value} />
                                    </tr>
                                )
                            })} */}

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>


        </div>
    );
}

export default MemberList;
