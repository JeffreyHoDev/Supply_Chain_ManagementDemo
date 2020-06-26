import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom'

const Basic = (props) => {
  const { data } = props;
  let displayData = []
  displayData = data.map((single, i) => {
    single.edit = <Link to={`/items_management/${single.item_id}`}><button>Edit</button></Link>
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
        label: 'Category',
        field: 'category',
        width: 200,
      },
      {
        label: 'Available Quantity',
        field: 'available_quantity',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Notifications',
        field: 'notice',
        width: 150,
      },
      {
        label: 'Action',
        field: 'edit',
        width: 150,
      },
    ],
    rows: displayData,
  });

  return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />;
}

export default Basic;