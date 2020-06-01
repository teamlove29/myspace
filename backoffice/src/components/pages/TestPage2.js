import React from 'react'
export default function TestPage2(props) {
    // const search = new URLSearchParams(props.locations.search)
    // console.log(props.match.params.id)
    // console.log(search)
    const params = props.match.params.id
    return (
        <div className="container">
            <h1>This id member : {params}</h1>
            <button onClick={() => {props.history.goBack()}}>Back</button>
        </div>
    )
}
