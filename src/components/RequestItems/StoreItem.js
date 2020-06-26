import React from 'react';


const StoreItem = (props) => {
    const { item_id, item_name, quantity, notice } = props
    return(
        <tr>
            <td className="pv3 pr3 bb b--black-20">{item_name}</td>
            <td className="pv3 pr3 bb b--black-20">{quantity}</td>
            <td className="pv3 pr3 bb b--black-20"><p>{notice}</p></td>
            <td className="pv3 pr3 bb b--black-20"><input name={`quantity${item_id}`} onChange={props.handleInputChange} type="number" width="100%" min="0"></input></td>
            <td className="pv3 bb b--black-20"><button onClick={props.findInList} value={item_id}>Pass</button></td>
        </tr>
    )
}

export default StoreItem;