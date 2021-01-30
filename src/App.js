import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar';
import {BrowserRouter,Route,Switch,Redirect} from 'react-router-dom'
import links from './data/links';
import './App.css'



function App() {
  const routeMaps=links.map((item,index) => (
    <Route key={index} exact={item.isExact} path={item.link} component={item.component} />
    ))
    
  return (
    <BrowserRouter>
     <NavBar links={links}/>
     <div className="container-fluid" id="conCol">
       <div className="row">
         
           <Switch>
          {routeMaps}
            <Route path="*">
              <Redirect to="/404" />
            </Route>
           </Switch>
          
         
       </div>
     </div>
    </BrowserRouter>
  );
}

export default App;
