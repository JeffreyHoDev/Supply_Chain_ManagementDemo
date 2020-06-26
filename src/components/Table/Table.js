import React from 'react';
import DataTable from './Datatable';

class Table extends React.Component {
    constructor(props){
        super(props);
    }
    
    render(){
        return (
                <div>
                    <div>
                        <div className="pa3">
                            <div className="f2 pv2">Items List</div>
                            <DataTable key={0} 
                            data={this.props.data}
                            />
                        </div>
                    </div>
                </div>
        )
    }
}
export default Table;