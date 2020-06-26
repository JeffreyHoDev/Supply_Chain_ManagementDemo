import React from 'react';
import SingleRequest from './SingleRequest'

class RequestSummary extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="center bl ph2 grid2">
                <p className="tc b underline">Request Summary</p>
                <form>
                <table className="dt dt--fixed">
                    <thead>
                        <tr>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Item Name</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Request Quantities</th>
                            <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Action</th>                        
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.req_array.map((singleData, i)=> {
    return <SingleRequest key={i} cancelRequest={this.props.cancelRequest} item_id={this.props.req_array[i]["item_id"]} item_name={this.props.req_array[i]["item_name"]} req_quantity= {this.props.req_array[i]["req_quantity"]} />})}
                    </tbody>
                </table>
            </form>
            </div>
        )
    }
}

export default RequestSummary;