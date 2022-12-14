import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Subscribe } from '../pages/Subscribe';

export const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Subscribe />} />
      </Switch>
    </Router>
  );
};