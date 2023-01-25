import React from 'react'

import { Routes, Route} from "react-router-dom";
import Routs from './component/Routs';

const App = () => {
  return (
   <Routes>
    {Routs&&Routs.map((rt,index)=>(
       <Route key={index} path={rt.path} element={rt.component}/>
    
     

    ))}
   </Routes>
  )
}

export default App