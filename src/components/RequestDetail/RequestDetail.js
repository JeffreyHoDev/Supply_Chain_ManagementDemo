import React from 'react';
import { withRouter } from 'react-router-dom';

class RequestDetail extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            redirect: false,
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className="pa3">
                        <div className="f2 pv5">Request ID</div>
                        <div className="overflow-auto">
                            <table className="f6 w-100 mw8 tl" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="fw6 bb b--black tl pb2 pr1 bg-white">Items</th>
                                        <th className="fw6 bb b--black tl pb2 pr1 bg-white">Request Quantities</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                    <tr>
                                        <td className="pv2 pr1 bb b--black-20">Item A</td>
                                        <td className="pv2 pr1 bb b--black-20">20</td>
                                    </tr>
                                    <tr>
                                        <td className="pv2 pr1 bb b--black-20">Item B</td>
                                        <td className="pv2 pr1 bb b--black-20">40</td>
                                    </tr>
                                    <tr>
                                        <td className="pv2 pr1 bb b--black-20">Item C</td>
                                        <td className="pv2 pr1 bb b--black-20">30</td>
                                    </tr>
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
                                <label className="db fw6 lh-copy f6 bb w-20" htmlFor="requestor">Requestor</label>
                                <p className="pa2 bg-transparent w-40" name="requestor">Jeffrey</p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 bb w-20" htmlFor="project">Project</label>
                                <p className="pa2 bg-transparent w-40" name="project">Project A</p>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6 bb w-20" htmlFor="type">Type</label>
                                <p className="pa2 bg-transparent w-40" name="type">Maintenance</p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6 bb w-25" htmlFor="collection_date">Collection Date</label>
                                <p className="pa2 bg-transparent w-100" name="collection_date">01-01-2020</p>
                            </div>
                            </fieldset>
                            <input className="b ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Complete" />
                        </form>
                    </main>                
                </div>
            </div>
        )
    }

}

export default withRouter(RequestDetail);