import React from 'react'
import { withRouter, Redirect } from 'react-router-dom'

class AddItem extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            data: {},
            item_name: '',
            notice: '',
            quantity: 0,
            category: 'Big',
            redirected: false
        }
    }
    
    onChangeName = (event) => {
        this.setState({item_name: event.target.value})
    }

    onChangeNotice = (event) => {
        this.setState({notice: event.target.value})
    }

    onChangeQuantity = (event) => {
        this.setState({quantity: event.target.value})
    }

    onChangeCategory = (event) => {
        this.setState({category: event.target.value})
    }

    render(){
        if(this.state.redirected){
            return <Redirect to="/items_management"/>
        }
        return(
            <div className="pa3 w-100">
                <div className="f2 pv5">Add Item</div>
                <table className="f6 w-100 tl" cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white">Item Name</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white ">Available Quantities</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white mw6">Notifications</th>
                            <th className="fw6 bb b--black-20 tl pb2 pr1 bg-white mw6">Category</th>
                        </tr>
                    </thead>
                    <tbody className="lh-copy">
                        <tr>
                            <td className="pv2 pr1 bb b--black-20"><input type="text" onChange={this.onChangeName}></input></td>
                            <td className="pv2 pr1 bb b--black-20"><input type="number" onChange={this.onChangeQuantity}></input></td>
                            <td className="pv2 pr1 bb b--black-20"><textarea onChange={this.onChangeNotice}></textarea></td>
                            <td className="pv2 pr1 bb b--black-20">         
                                <select name="type" className="hover-bg-black hover-white" onChange={this.onChangeCategory}>
                                    <option value="Big">Big</option>
                                    <option value="Small">Small</option>
                                </select></td>
                        </tr>
                    </tbody>
                </table>
                <button className="grow pointer mt3 pa2" >Add</button>
            </div>
        )

    }
}

export default withRouter(AddItem)