import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';

const Basic = (props) => {
  const { data } = props;
  let displayData = []
  displayData = data.map((single) => {
    return single
  })

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Item ID',
        field: 'item_id',
        sort: 'asc',
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
        width: 100,
      },
      {
        label: 'Notice',
        field: 'notice',
        width: 200,
      },
      {
        label: 'Category',
        field: 'category',
        width: 200,
      },
    ],
    rows: displayData,
  });

  return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />;
}

export default Basic;