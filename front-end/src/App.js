import './App.css';

function App() {
    async function handleCreateWarehouse() {
      let warehouseName = prompt("Please enter a location of a warehouse.")
      // axios post request
    }

    async function handleCreateInventory() {
      let inventoryName = prompt("Please enter a new inventory item") 
      // add a check to see if inventory already exists or not
      let quantity = prompt(`Please enter a quantity of ${inventoryName}`)
      // axios post request
    }

    async function handleAddInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to add.")
      // add a check to see if inventory already exists or not
      let quantity = prompt(`Please enter a quantity of ${inventoryName} you wish to add.`)
  
    }

    async function handleDropInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to drop.")
      // add a check to see if inventory already exists or not
      let quantity = prompt(`Please enter a quantity of ${inventoryName} you wish to drop.`)

    }

    async function handleDeleteInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to delete.")
      // add a check to see if inventory already exists or not
    }

    async function handleAssignInventory() {
      let inventoryName = prompt("Please enter an existing inventory item you wish to assign.")
      let assignInventory = prompt(`Please enter a warehouse location to assign ${inventoryName} to.` )
      // add a check to see if inventory already exists or not
    }
    
    return (
      <div className= "App">
        <div className = 'Header'>
          <h1>
            Shopify Logistics Tracker Web Application
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
          <table className='table'>
            <tr>
              <th>Inventory</th>
              <th>Quantity</th>
              <th>Location</th>
            </tr>

            <tr>
              <td>Cookies</td>
              <td>3</td>
              <td>ShopifyHQ</td>
            </tr>

            <tr>
              <td>Apples</td>
              <td>2</td>
              <td>NYC</td>
            </tr>

            <tr>
              <td>Oranges</td>
              <td>50</td>
              <td>California</td>
            </tr>

          </table>
        </div>

      </div>
    );

}

export default App;
