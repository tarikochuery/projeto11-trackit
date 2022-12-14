import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import { UserContext, UserProvider } from '../../utils/Providers/UserProvider';
import { Header } from '../Header';
import { Habits } from '../pages/Habits';
import { Home } from '../pages/Home';
import { Subscribe } from '../pages/Subscribe';
import { ProtectedRoute } from './ProtectedRoute';

export const Routes = () => {
  const { currentUser } = useContext(UserContext);

  return (
    <UserProvider>
      {currentUser.email && <Header />}
      <Router>
        <Switch>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Subscribe />} />
          <Route element={<ProtectedRoute user={currentUser?.email} />} >
            <Route path='/habitos' element={<Habits />} />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
};