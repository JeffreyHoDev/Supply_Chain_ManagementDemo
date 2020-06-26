import React from 'react';
import { withRouter } from 'react-router-dom'

class PostponedRequest extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <div>
                    <div className="pa3">
                        <div className="f2 pv5">Edit Request Items</div>
                        <div className="overflow-auto">
                            <table className="f6 w-100 mw8 tl" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Items</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Previous Request Quantities</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">New Request Quantities</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                    <tr>
                                        <td className="pv3 pr3 bb b--black-20">Item A</td>
                                        <td className="pv3 pr3 bb b--black-20">30</td>
                                        <td className="pv3 pr3 bb b--black-20"><input type="number" min="0"></input></td>                              
                                    </tr>
                                    <tr>
                                        <td className="pv3 pr3 bb b--black-20">Item B</td>
                                        <td className="pv3 pr3 bb b--black-20">40</td>
                                        <td className="pv3 pr3 bb b--black-20"><input type="number" min="0"></input></td>                              
                                    </tr>
                                    <tr>
                                        <td className="pv3 pr3 bb b--black-20">Item C</td>
                                        <td className="pv3 pr3 bb b--black-20">50</td>
                                        <td className="pv3 pr3 bb b--black-20"><input type="number" min="0"></input></td>                              
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
                                <label className="db fw6 lh-copy f6" htmlFor="project">Project</label>
                                <p className="pa2 bg-transparent w-100" name="project">Project A</p>
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="type">Type</label>
                                <p className="pa2 bg-transparent w-100" name="type">Maintenance</p>
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="collection_date">Collection Date</label>
                                <p className=""  name="collection_date" >01-01-2020</p>
                            </div>
                            </fieldset>
                            <div className="">
                                <input className="b ph3 pv3 input-reset ba b--black bg-transparent grow pointer f6 dib" type="button" value="Postpone" />
                            </div>
                        </form>
                    </main>                
                </div>
            </div>
        )
    }
}

export default withRouter(PostponedRequest);