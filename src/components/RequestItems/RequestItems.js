import React from 'react';
import './RequestItems.css';
import { withRouter , Redirect } from 'react-router-dom'
import DataTable from './DatatablePage';

class RequestItems extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
                <div>
                    <div>
                        <div className="pa3">
                            <div className="f2 pv5">Request Items</div>
                            <DataTable key={0} 
                            data={this.props.store_datas.data}
                            findInList={this.props.findInList} 
                            handleInputChange={this.props.handleInputChange} />
                            {/* <div className="overflow-auto">
                                <table className="f6 w-100 mw8 tl" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Items</th>
                                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Available Quantities</th>
                                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Notice</th>
                                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Request Quantities</th>
                                            <th className="fw6 bb b--black-20 tl pb3 bg-white">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="lh-copy">
                                    { this.StoreList =  this.props.store_datas.data.map((singleData, i)=> {
                                        return <StoreItem key={i} 
                                        item_id={this.props.store_datas.data[i].item_id} 
                                        item_name={this.props.store_datas.data[i].item_name} 
                                        quantity= {this.props.store_datas.data[i].available_quantity} 
                                        notice = {this.props.store_datas.data[i].notice} 
                                        findInList={this.props.findInList} 
                                        handleInputChange={this.props.handleInputChange}/>
                                    })}
                                    </tbody>
                                </table>
                            </div> */}
                        </div>
                    </div>
    
                    <div>
                        <main className="pa3 pv1 black-80">
                            <form className="measure">
                                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="project">Project</label>
                                    <input className="pa2 input-reset ba w-100" type="text" name="project"  id="project" onChange={this.props.onChangeProject} required/>
                                </div>
                                <div className="mv3">
                                    <label className="db fw6 lh-copy f6" htmlFor="type">Type</label>
                                    <select name="type" className="hover-bg-black hover-white" onChange={this.props.onChangeType}>
                                        <option>Maintenance</option>
                                        <option>Installation</option>
                                    </select>
                                </div>
                                <div className="mt3">
                                    <label className="db fw6 lh-copy f6" htmlFor="collection_date">Collection Date</label>
                                    <input className="pa2 input-reset ba bg-transparent hover-black w-100" type="date" name="collection_date"  id="collection_date" onChange={this.props.onChangeDate} required />
                                </div>
                                </fieldset>
                                <div className="">
                                <input className="b ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" onClick={this.props.submitRequest} value="Submit" />
                                </div>
                            </form>
                        </main>                
                    </div>
                </div>
        )
    }
}

export default withRouter(RequestItems);