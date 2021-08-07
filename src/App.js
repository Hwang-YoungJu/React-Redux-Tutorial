import React from 'react';
import CounterContainers from './containers/CounterContainers';
import Todos from './components/Todos';


const App =() => {
   return (
     <div>
       <CounterContainers />
       <hr />
       <Todos />
     </div>
  );
};

export default App;
