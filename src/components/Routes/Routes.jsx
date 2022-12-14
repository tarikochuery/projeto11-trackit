import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { UserContext } from '../../utils/Providers/UserProvider';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Habits } from '../pages/Habits';
import { Home } from '../pages/Home';
import { Subscribe } from '../pages/Subscribe';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Router>
      {currentUser?.email && <Header />}
      <Switch>
        <Route path='/' element={<Home />} />
        <Route path='/cadastro' element={<Subscribe />} />
        <Route element={<ProtectedRoute user={currentUser?.email} />} >
          <Route path='/habitos' element={<Habits />} />
        </Route>
      </Switch>
      {currentUser?.email && <Footer />}
    </Router>
  );
};