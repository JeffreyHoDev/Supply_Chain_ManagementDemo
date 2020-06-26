import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const Basic = (props) => {
  const { data } = props;
  let displayData = []
  displayData = data.map((single, i) => {
    single.input_quantity = <input name={`quantity${single.item_id}`} onChange={props.handleInputChange} type="number" width="100%" min="0"></input>
    single.pass = <button onClick={props.findInList} value={single.item_id}>Pass</button>
    return single
  })

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Item ID',
        field: 'item_id',
        width: 270,
      },
      {
        label: 'Item Name',
        field: 'item_name',
        width: 200,
      },
      {
        label: 'Available Quantity',
        field: 'available_quantity',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Input Quantity',
        field: 'input_quantity',
        width: 150,
      },
      {
        label: 'Action',
        field: 'pass',
        width: 150,
      },
    ],
    rows: displayData,
  });

  return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} />;
}

export default Basic;