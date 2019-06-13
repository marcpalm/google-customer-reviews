import React from 'react';
import './App.css';


import GoogleCustomerReview from './GoogleCustomerReview'

const onClick  = (_) => GoogleCustomerReview.initialize().then(render => render({
  email: 'palmmarc85@gmail.com',
  orderId: '2',
  deliveryCountry: 'DE'
 }), e => console.error(e))

const App = () => (
  <div className="App">
        <input type="button" id="submit" onClick={onClick} />
  </div>
)

export default App;
