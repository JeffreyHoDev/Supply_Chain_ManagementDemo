import React from 'react'

const SingleRequest = (props) => {
    const { item_id, item_name, req_quantity, cancelRequest } = props
    return (
    <tr>
        <td className="pv1 bb b--black-20">{`${item_name}`}</td>
        <td className="pv1 bb b--black-20">{`${req_quantity}`}</td>
        <td className="pv1 bb b--black-20"><button value={`${item_id}`} onClick={cancelRequest} type="button">Cancel</button></td>
    </tr>
    )
}

export default SingleRequest;

