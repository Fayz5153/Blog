import React from 'react';
import {Routes, Route, NavLink} from "react-router-dom"
import { Button, Space } from 'antd';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import SinglePage from './pages/SinglePage/SinglePage';
import Add from './pages/Add/Add';

const App = () => {
  return ( 
    <React.Fragment>
      <Space wrap>
        <NavLink to={"/"}>
          <Button type="link">Home</Button>
        </NavLink>
        <NavLink to={"/category/sport"}>
          <Button type="link">Sport</Button>
        </NavLink>
        <NavLink to={"/category/kino"}>
          <Button type="link">Kino</Button>
        </NavLink>
        <NavLink to={"/add"}>
          <Button type="link">Add blog</Button>
        </NavLink>
      </Space>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='category/:name' element={<Category/>}/>
        <Route path='blogs/:id' element={<SinglePage/>}/>
        <Route path='add' element={<Add/>}/>
      </Routes>
    </React.Fragment>
   );
}
 
export default App;