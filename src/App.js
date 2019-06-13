import React from 'react';
import './App.css';

import GoogleCustomerReview from './GoogleCustomerReview'

const onClick  = (_) => GoogleCustomerReview.initialize().then(render => render({
  email: 'palmmarc85@gmail.com',
  orderId: '2',
  deliveryCountry: 'DE'
 }), e => console.error(e))

class App extends React.Component {

  render = () => (
    <div className="App">
          <input type="button" id="submit" onClick={onClick} />
    </div>
  )

  componentDidMount = () => {
    onClick()
  }
}

export default App;
