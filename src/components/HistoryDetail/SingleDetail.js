import React from 'react'

const SingleDetail = (props) => {
    const { item_name, req_quantity } = props
    return (
        <tr>
            <td className="pv2 pr1 bb b--black-20">{item_name}</td>
            <td className="pv2 pr1 bb b--black-20">{req_quantity}</td>
        </tr>
    )
}

export default SingleDetail