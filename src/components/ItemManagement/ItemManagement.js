import React from 'react';
import { withRouter, Redirect } from 'react-router-dom'

class ItemManagement extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: 0,
            data: {},
            new_quantity: 0,
            notice: '',
            category: 'Big'
        }
    }

    render(){
        return(
            <div className="pa3 w-100">
                <div className="f2 pv5">Editing</div>
                <table className="f6 w-100 tl" cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white">Items</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white ">Previous Quantities</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white ">Available Quantities</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white mw6">Notifications</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white mw6">Category</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy">
                        <tr>
                            <td className="pv2 pr1 bb b--black-20">Item A</td>
                            <td className="pv2 pr1 bb b--black-20">200</td>
                            <td className="pv2 pr1 bb b--black-20"><input type="number" /></td>
                            <td className="pv2 pr1 bb b--black-20 mw6"><textarea className="pa2"></textarea></td>
                            <td className="pv2 pr1 bb b--black-20">         
                                <select name="type" className="hover-bg-black hover-white">
                                    <option>Big</option>
                                    <option>Small</option>
                                </select></td>
                        </tr>
                    </tbody>
                </table>
                <button className="grow pointer mt3 pa2">Edit</button>
            </div>
        )
    }
    
}

export default withRouter(ItemManagement);