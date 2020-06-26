import React from 'react';
import Basic from './DataTable'
import { Redirect } from 'react-router-dom'

class ItemsManagement extends React.Component  {
    constructor(props){
        super(props);
        this.state = {
            datas: {
                data: [
                    {
                      item_id: 1,
                      item_name: "Item A",
                      available_quantity: 300,
                      notice: "This is for demo purpose",
                      category: "Big"
                    },
                    {
                      item_id: 2,
                      item_name: "Item B",
                      available_quantity: 400,
                      notice: "Full programmed is in private",
                      category: "Big"
                    },
                    {
                      item_id: 3,
                      item_name: "Item C",
                      available_quantity: 500,
                      notice: "If your small business need this, feel free to contact me for more info",
                      category: "Big"
                    },
                    {
                      item_id: 4,
                      item_name: "Item D",
                      available_quantity: 600,
                      notice: "Phone: +65 84276055",
                      category: "Big"
                    },
                    {
                      item_id: 5,
                      item_name: "Item E",
                      available_quantity: 700,
                      notice: "Jeffrey Ho - Whatsapp is fine too. Email: jeffreyhodev@gmail.com",
                      category: "Big"
                    },
                  ]
            },
            toAdd: false
        }
    }

    render(){
        return (
            <div>
                <div>
                    <div className="pa3 w-100">
                        <div className="f2 pv5">Items Management</div>
                        <div><a href="/addItem"><button>Add Item</button></a></div>
                        <Basic data={this.state.datas.data}/>
                    </div>
                </div>
            </div>
        )
    }
    }

export default ItemsManagement;