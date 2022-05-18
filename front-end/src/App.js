import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Table from './components/Table';

function App() {
  const REACT_APP_BACKEND_URL = 'http://localhost:4000';
  const [locationData, setLocationData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  const column = [
    {heading: 'Inventory', value: 'name'},
    {heading: 'Quantity', value: 'quantity'},
    {heading: 'Warehouse', value: 'warehouse'}
  ];

  useEffect(() => {
    async function getWarehouses() {
      try {
        const res = await axios.get(`${REACT_APP_BACKEND_URL}/warehouse/getWarehouse`)
        const data = res.data.warehouses;
        setLocationData(data)
      } catch (err) {
        console.log("error trying to get warehouses");
        console.log(err);
      }
    };
    getWarehouses();
  }, []);

  useEffect(() => {
    async function getInventories() {
      try {
        const res = await axios.get(`${REACT_APP_BACKEND_URL}/inventory/getInventory`)
        const data = res.data.inventories;
        setInventoryData(data)
        setDataTable(inventoryData);
      } catch (err) {
        console.log("error trying to get inventories");
        console.log(err);
      }
    };
    getInventories();
  }, []);

  useEffect(() => {
    setDataTable(inventoryData);
  }, [inventoryData])

    async function handleCreateWarehouse() {
      let warehouseName = prompt("Please enter a location of a warehouse.");

      if (warehouseName) {
        const res = await axios.post(`${REACT_APP_BACKEND_URL}/warehouse/create`, {name: warehouseName})
        if(res.data.success) {
          console.log("the axios post was successful")
        }
      }
    }

    async function handleCreateInventory() {
      let inventoryName = prompt("Please enter a new inventory item") 
      let quantity = prompt(`Please enter a quantity of ${inventoryName}`)

      if (inventoryName) {
        if (quantity > 0) {
          console.log(`Attemting to add ${inventoryName} with quantity ${quantity}`)
          const res = await axios.post(`${REACT_APP_BACKEND_URL}/inventory/create`, {name: inventoryName, amount: quantity})
          if(res.data.success) {
            console.log("the axios post was successful")
          }
        }
        else {
          console.log("Please input a valid quantity")
        }
      }
    }

    async function handleAddInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to add.")
      let quantity = prompt(`Please enter a quantity of ${inventoryName} you wish to add.`)

      if (quantity > 0) {
        const res = axios.post(`${REACT_APP_BACKEND_URL}/inventory/update`, {name: inventoryName, amount: quantity});
        if(res.data.success) {
          console.log("the axios get was successful")
        }
      }
    }

    async function handleDropInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to drop.")
      let quantity = prompt(`Please enter a quantity of ${inventoryName} you wish to drop.`)

      if (quantity > 0) {
        quantity *= -1
        const res = axios.post(`${REACT_APP_BACKEND_URL}/inventory/update`, {name: inventoryName, amount: quantity});
        if(res.data.success) {
          console.log("the axios get was successful")
        }
      }
    }

    async function handleDeleteInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to delete.")

      const res = axios.post(`${REACT_APP_BACKEND_URL}/inventory/delete`, {name: inventoryName});
      if(res.data.success) {
          console.log("the axios post was successful")
        }
    }

    async function handleAssignInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to assign.")
      let assignInventory = prompt(`Please enter a warehouse location to assign ${inventoryName} to.` )
      let exists = false;

      for (var i = 0; i < locationData.length; i++) {
        if (locationData[i].location == assignInventory) {
          console.log(`${assignInventory} exists in database`)
          exists = true;
          break
        }
      }
      if (!exists) {
        console.log(`${assignInventory} does not exist in database`)
      } else {
        const res = axios.post(`${REACT_APP_BACKEND_URL}/inventory/assign`, {name: inventoryName, warehouse: assignInventory})
        if (res.data.success) {
          console.log('the axios post was successful');
        }
      }
    }
    
    return (
      <div className= "App">
        <div className = 'Header'>
          <h1>
            Shopify Logistics Tracker
          </h1>
        </div>
        <div className='CreateFunctions'>
          <button className='aButton' type='button' onClick={handleCreateWarehouse}>Create Warehouse</button>
          <button className='aButton' type='button' onClick={handleCreateInventory}>Create Inventory</button>
          <button className='aButton' type='button' onClick={handleAddInventory}>Add Inventory</button>
          <button className='aButton' type='button' onClick={handleDropInventory}>Drop Inventory</button>
          <button className='aButton' type='button' onClick={handleAssignInventory}>Assign Inventory</button>
          <button className='aButton' type='button' onClick={handleDeleteInventory}>Delete Inventory</button>
          <p></p>
          <p></p>
          
        </div>

        <div className="inventoryDisplay">
          <Table data={dataTable} column= {column}/>
        </div>
      </div>
    );
}

export default App;
