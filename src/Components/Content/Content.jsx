import classes from './Content.module.css';
import ProductsContainer from './ContentType/Products/ProductsContainer';
import ProductsWithTagsContainer from './ContentType/Products/ProductsWithTagsContainer';
import TagsContainer from './ContentType/Tags/TagsContainer';
import { Routes, Route, Outlet } from 'react-router-dom';
import Settings from './ContentType/Settings';
import Admin from './ContentType/Admin';
import LoginContainer from './ContentType/Login/LoginContainer';

let Content = () => {
  return <div className={`${classes.Content}`} >
  <Routes>

    <Route path='/products' element={<Outlet />}>
      <Route index element={<ProductsContainer />} />
      <Route path='tag/:tagId' element={<ProductsWithTagsContainer />} />
    </Route>
    <Route path='/tags' element={<TagsContainer />} />
    <Route path='/settings' element={<Settings />} />
    <Route path='/admin' element={<Admin />} />
  <Route path='/login' element={<LoginContainer />} />
</Routes>
  </div>
};

export default Content;  