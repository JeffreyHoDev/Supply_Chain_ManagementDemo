import React from 'react';
import { Link } from 'react-router-dom'

class History extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className="pa3">
                        <div className="f2 pv5">History</div>
                        <div className="overflow-auto">
                            <table className="f6 w-100 tl" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">ID</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Project</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Requestor</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Type</th>
                                        <th className="fw6 bb b--black-20 tl pb3 pr3 bg-white">Collection Date</th>
                                        <th className="fw6 bb b--black-20 tl pb3 bg-white">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="lh-copy">
                                <tr>
                                    <td className="pv3 pr3 bb b--black-20">1</td>
                                    <td className="pv3 pr3 bb b--black-20">Project A</td>
                                    <td className="pv3 pr3 bb b--black-20">Jeffrey</td>
                                    <td className="pv3 pr3 bb b--black-20">Maintenance</td>
                                    <td className="pv3 pr3 bb b--black-20">01-01-2020</td>
                                    <td className="pv3 bb b--black-20"><Link to={`history/1`}><button className="ma1 f5">Detail</button></Link></td>
                                </tr>
                                <tr>
                                    <td className="pv3 pr3 bb b--black-20">2</td>
                                    <td className="pv3 pr3 bb b--black-20">Project B</td>
                                    <td className="pv3 pr3 bb b--black-20">Adrian</td>
                                    <td className="pv3 pr3 bb b--black-20">Installation</td>
                                    <td className="pv3 pr3 bb b--black-20">02-01-2020</td>
                                    <td className="pv3 bb b--black-20"><Link to={`history/1`}><button className="ma1 f5">Detail</button></Link></td>
                                </tr>
                                <tr>
                                    <td className="pv3 pr3 bb b--black-20">3</td>
                                    <td className="pv3 pr3 bb b--black-20">Project C</td>
                                    <td className="pv3 pr3 bb b--black-20">Alex</td>
                                    <td className="pv3 pr3 bb b--black-20">Maintenance</td>
                                    <td className="pv3 pr3 bb b--black-20">04-01-2020</td>
                                    <td className="pv3 bb b--black-20"><Link to={`history/1`}><button className="ma1 f5">Detail</button></Link></td>
                                </tr>
                                <tr>
                                    <td className="pv3 pr3 bb b--black-20">4</td>
                                    <td className="pv3 pr3 bb b--black-20">Project D</td>
                                    <td className="pv3 pr3 bb b--black-20">Thompson</td>
                                    <td className="pv3 pr3 bb b--black-20">Installation</td>
                                    <td className="pv3 pr3 bb b--black-20">05-01-2020</td>
                                    <td className="pv3 bb b--black-20"><Link to={`history/1`}><button className="ma1 f5">Detail</button></Link></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>     
        )

    }
}

export default History;