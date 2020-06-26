import React from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { Link } from 'react-router-dom'

const Basic = (props) => {
  const { data }  = props;
  let displayData = []
  displayData = data.data.map((single, i) => {
    single.action = <div><Link to={`/request_list/${single.req_id}`}><button className="ma1 f5">Detail</button></Link><Link to={`/postpone/${single.req_id}`}><button className="ma1 f5">Postpone Edit</button></Link></div>
    return single
  })

  const [datatable] = React.useState({
    columns: [
      {
        label: 'Request ID',
        field: 'req_id',
        width: 270,
      },
      {
        label: 'Project',
        field: 'project',
        width: 200,
      },
      {
        label: 'Requestor',
        field: 'requestor',
        sort: 'asc',
        width: 100,
      },
      {
        label: 'Collection Date',
        field: 'collection_date',
        width: 150,
      },
      {
        label: 'Type',
        field: 'type',
        width: 150,
      },
      {
        label: 'Status',
        field: 'status',
        width: 150,
      },
      {
        label: 'Action',
        field: 'action',
        width: 150,
      },
    ],
    rows: displayData,
  });

  return <MDBDataTableV5 hover entriesOptions={[10, 20, 25]} entries={10} pagesAmount={4} data={datatable} />;
}

export default Basic;