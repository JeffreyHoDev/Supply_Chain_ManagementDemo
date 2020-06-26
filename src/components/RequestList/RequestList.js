import React from 'react';
import Basic from './DataTable'
import { Redirect } from 'react-router-dom'


class RequestList extends React.Component  {

    constructor(props){
        super(props);
        this.state = {
            datas: {
                data: [
                    {
                        req_id: 1,
                        project: "Project A",
                        requestor: "Jeffrey",
                        collection_date: "2020-01-01",
                        type: "Maintenance",
                        status: "New"
                    },
                    {
                        req_id: 2,
                        project: "Project B",
                        requestor: "Adrian",
                        collection_date: "2020-01-02",
                        type: "Installation",
                        status: "Edited"
                    },
                    {
                        req_id: 3,
                        project: "Project C",
                        requestor: "Alex",
                        collection_date: "2020-01-03",
                        type: "Installation",
                        status: "Edited"
                    },
                    {
                        req_id: 2,
                        project: "Project D",
                        requestor: "Thompson",
                        collection_date: "2020-01-04",
                        type: "Maintenance",
                        status: "New"
                    },

                ]
            },
            isDone: false
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className="pa3">
                        <div className="f2 pv5">Request List</div>
                        <Basic data={this.state.datas}/>
                    </div>
                </div> 
            </div>
            )    
    }


}

export default RequestList;