import React from 'react';
import './App.css';


import GoogleCustomerReview from './GoogleCustomerReview'

class App extends React.Component {
  state = {
    email: 'palmmarc85@gmail.com',
    orderId: 1,
    deliveryCountry: 'DE'
  }

  render = () => (
    <div className="App">
        <form>
            <input type="button" id="submit" onClick={
              (_) => GoogleCustomerReview.initialize().then(_ => _.render({ ...this.state }), console.error )
            } />
        </form>
    </div>
  );
}

export default App;
