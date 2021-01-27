import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Distributors from './components/pages/Distributor';
import Home from './components/pages/Home';
import Location from './components/pages/Maps';
import Milk from './components/pages/Milk';
import WheretoBuy from './components/pages/WheretoBuy';


function App() {
  return (
    <Router>
      <Navbar />
    <Switch>
        <Route path='/' exact component={Home} />  
        <Route path='/about' exact component={About} />  
        <Route path='/products/milk' exact component={Milk} />  
        <Route path='/where-to-buy' exact component={WheretoBuy} />  
        <Route path='/Where-to-buy/NorthCentral' exact component={Location} />  
        <Route path='/contact' exact component={Contact} />  
        <Route path='/Distributor' exact component={Distributors} />  
      
        
       
       </Switch>
     </Router>
  );
}

export default App;
