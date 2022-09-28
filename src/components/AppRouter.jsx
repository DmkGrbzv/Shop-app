import React from 'react';
import {Route,Routes} from 'react-router-dom';
import { publicRoutes, defaultPage } from '../routes/routes';

export default function AppRouter() {
  return (
    <Routes>
      {
        publicRoutes.map(({path,element})=>
          <Route key={path} path={path} element={element}/>
        )
      }
       <Route path={defaultPage.path} element={defaultPage.element}/>
    </Routes>
  )
}
