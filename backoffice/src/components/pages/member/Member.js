import React from 'react'
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_helpers";
export default function Member(props) {
    const member = props.data
    return (
        < >
            <td className="text-center">{member.id}</td>
            <td className="text-center"><img style={{width:'50px'}} src="https://cdn2.iconfinder.com/data/icons/flatfaces-everyday-people-square/128/beard_male_man_face_avatar-512.png" /></td>
            <td>{member.name}</td>
            <td>{member.email}</td>
            <td>Member</td>
            <td> online </td>
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
        </>
    )
}
