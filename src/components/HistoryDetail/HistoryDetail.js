import React from 'react';
import SingleDetail from './SingleDetail';
import { withRouter } from 'react-router-dom'

class HistoryDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            id: 0,
            data: [{
                first_category: [1,2,3],
                first_item_name: ["Item A", "Item B", "Item C"],
                first_req_quantity: [10, 20, 30]
            }],
            redirect: false
        }
    }

    render() {
        return (
            <div>
                <div>
                    <div className="pa3">
                        <div className="f2 pv5">#History ID: 1</div>
                        <div className="overflow-auto">
                            <table className="f6 w-100 mw8 tl" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="fw6 bb b--black tl pb2 pr1 bg-white">Items</th>
                                        <th className="fw6 bb b--black tl pb2 pr1 bg-white">Request Quantities</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                    { this.state.data[0].first_category.map((single, i) => {
                                        return <SingleDetail
                                                key={i}
                                                item_name = {this.state.data[0].first_item_name[i]}
                                                req_quantity = {this.state.data[0].first_req_quantity[i]} />
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div>
                    <main className="pa3 pv1 black-80">
                        <form className="measure">
                            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="project">Project</label>
                                <p className="pa2 bg-transparent w-100" name="project">Project A</p>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="type">Type</label>
                                <p className="pa2 bg-transparent w-100" name="type">Maintenance</p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="collection_date">Collection Date</label>
                                <p className="pa2 bg-transparent w-100" name="collection_date">01-01-2020</p>
                            </div>
                            </fieldset>
                            <input className="b ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Delete" />
                        </form>
                    </main>                
                </div>
            </div>
        )
    }
}

export default withRouter(HistoryDetail);