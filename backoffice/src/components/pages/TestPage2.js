import React from 'react'
export default function TestPage2(props) {

    // ดึงค่าจาก /xxx?user:1234 
    // const search = new URLSearchParams(props.locations.search)
    // console.log(props.match.params.id)
    // console.log(search)

    // ดึงค่าไอดีจาก http /:id 
    const params = props.match.params.id
    return (
        <div className="container">
            <h1>This id member : {params}</h1>
            <button className="btn btn-sm font-weight-bold btn-primary" onClick={() => {props.history.goBack()}}>Back Page</button>
        </div>
    )
}
