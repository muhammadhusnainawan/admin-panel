import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AdminPannel from './components/screens/adminPannel/AdminPannel';
import Login from './components/screens/login/Login';

function App() {
  return (
    <div className="app">
      {/* <Login/> */}
      <AdminPannel/>
    </div>
  );
}

export default App;