import React from 'react';
import './App.css';
import RequestItems from './components/RequestItems/RequestItems';
import RequestSummary from './components/RequestSummary/RequestSummary';
import RequestList from './components/RequestList/RequestList';
import RequestDetail from './components/RequestDetail/RequestDetail';
import ItemsManagement from './components/ItemsManagement/ItemsManagement';
import History from './components/History/History';
import HistoryDetail from './components/HistoryDetail/HistoryDetail';
import TopNavbar from './components/TopNavbar/TopNavbar';
import ItemManagement from './components/ItemManagement/ItemManagement';
import PostponedRequest from './components/PostponedRequest/PostponedRequest';
import AddItem from './components/AddItem/AddItem';
import MaintenanceLine from './components/Canvas/MaintenanceLine'
import MaintenancePie from './components/Canvas/MaintenancePie'
import 'tachyons';
import { format } from 'date-fns'
import Table from './components/Table/Table'
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import InstallationLine from './components/Canvas/InstallationLine';
import InstallationPie from './components/Canvas/InstallationPie';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      requesting_items: {},
      requesting_quantity: {},
      req_array: [],
      requesting_id: {},
      store_datas: {
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
            notice: "Full programmed code is in private",
            category: "Big"
          },
          {
            item_id: 3,
            item_name: "Item C",
            available_quantity: 500,
            notice: "If your business might need this, feel free to contact me for more info",
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
      collection_date: '',
      requesting_category: {},
      redirect: false,
      project: '',
      type: 'Maintenance',
      user_name: '',
      password: '',
      email: '',
      isSignedIn: false
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeProject = this.onChangeProject.bind(this);
    this.onChangeType = this.onChangeType.bind(this);

  }

  async handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    await this.setState({
      [name] : parseInt(value)
    })
  }

  findInList = (event) => {
    if(this.state["quantity"+event.target.value]){
      const { data } = this.state.store_datas
      const length = data.length
      const value = parseInt(event.target.value)
      let exist = true;
      for(this.i = 0; this.i < length ; this.i++){
          if(data[this.i]["item_id"] === value){
            if(parseInt(this.state["quantity"+value]) < parseInt(data[this.i].available_quantity)){
              data[this.i].req_quantity = this.state["quantity"+value]
              if(this.state.req_array.length === 0){
                this.setState({req_array: this.state.req_array.concat(data[this.i])})
              }
              else{
                for(this.j=0; this.j < this.state.req_array.length ; this.j++){
                  if(parseInt(this.state.req_array[this.j]["item_id"]) === parseInt(data[this.i]["item_id"])){
                    this.state.req_array[this.j] = data[this.i]
                    break;
                  }
                  if(this.j === this.state.req_array.length - 1){
                      this.exist = false;
                  }
                }
              
                if(this.exist === false){
                  this.setState({req_array: this.state.req_array.concat(data[this.i])})
                  this.exist = true;
                  break;
                }
              }
            }
            else{
              alert("Quantity request exceeded")
            }
          }
      }
  
      this.state.requesting_items = this.state.req_array.map((single, i) => {
        return this.state.req_array[i].item_name 
      })
    
      this.state.requesting_quantity = this.state.req_array.map((single, i) => {
        return this.state.req_array[i].req_quantity
      })
    
      this.state.requesting_id = this.state.req_array.map((single, i) => {
        return this.state.req_array[i].item_id
      })

      this.state.requesting_category = this.state.req_array.map((single, i) => {
        return this.state.req_array[i].category
      })
    
    }
    else {
      alert("Please input quantity")
    }
  }

  cancelRequest = (event) => {
    this.deleteFromArray(parseInt(event.target.value))
  }
  
  deleteFromArray = async (id) => {
    const newList = this.state.req_array.filter((singleData, i) => {
      if(parseInt(this.state.req_array[i]["item_id"]) !== id ){
        return singleData
      }
    })
    await this.setState({req_array: newList})
  }

  setRedirect = async () => {
    this.setState({
      redirect: true
    })
  }

  onChangeProject = (event) => {
      this.setState({project: event.target.value})
  }

  onChangeDate = (event) => {
      this.setState({collection_date: event.target.value})
  }

  onChangeType = (event) => {
      this.setState({type: event.target.value})
  }

  render(){
    const year = format(new Date, 'yyyy')
      return (
        <Router>
            <Switch>
              <div className="App">
                <div className="overall">
                  <div className="topbar"><TopNavbar name={this.state.user_name} isSignedIn = {this.state.isSignedIn}/></div>
                  <Route exact path="/dashboard">
                    <div className="chart-grid">
                      <div className="element ma1 shadow-3">
                        <h5 className="ma1 b">{`Maintenance Outbound Trend in Year ${year}`}</h5>
                        <MaintenanceLine isSignedIn = {this.state.isSignedIn}/>
                      </div>
                      <div className="element ma1 shadow-3">
                        <h5 className="ma1 b">{`Installation Outbound Trend in Year ${year}`}</h5>
                        <InstallationLine isSignedIn = {this.state.isSignedIn}/>
                      </div>
                      <div className="element ma1 shadow-3">
                        <h5 className="ma1 b">{`Maintenance Outbound Items Distribution in Year ${year}`}</h5>
                        <MaintenancePie isSignedIn = {this.state.isSignedIn}/>
                      </div>
                      <div className="element ma1 shadow-3">
                        <h5 className="ma1 b">{`Maintenance Outbound Items Distribution in Year ${year}`}</h5>
                        <InstallationPie isSignedIn = {this.state.isSignedIn}/>
                      </div>
                    </div>
                    <Table data={this.state.store_datas.data}/>
                  </Route>
                  <Route exact path="/request_items" >
                    <div className="grid">
                      <RequestItems 
                      findInList={this.findInList} 
                      store_datas={this.state.store_datas}
                      handleInputChange={this.handleInputChange}
                      onChangeDate= {this.onChangeDate}
                      onChangeProject= {this.onChangeProject}
                      onChangeType={this.onChangeType}
                      redirect={this.state.redirect}
                      submitRequest= {this.submitRequest}
                      isSignedIn = {this.state.isSignedIn}
                      />
                      <RequestSummary req_array={this.state.req_array} cancelRequest={this.cancelRequest}/>
                    </div> 
                  </Route>
                  <Route exact path="/request_list">
                    <RequestList/>
                  </Route>
                  <Route exact path="/history">
                    <History />
                  </Route>
                  <Route exact path="/addItem">
                    <AddItem />
                  </Route>
                  <Route exact path="/items_management">
                    <ItemsManagement />
                  </Route> 
                  <Route path="/request_list/:id">
                    <RequestDetail />
                  </Route>
                  <Route path="/items_management/:id">
                    <ItemManagement />
                  </Route>
                  <Route path="/history/:id">
                    <HistoryDetail />
                  </Route>
                  <Route path="/postpone/:id">
                    <PostponedRequest />
                  </Route>
                  </div>
              </div>
            </Switch>
      </Router>
    )
  }
}

export default App;
