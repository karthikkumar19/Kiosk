import React ,{useState}from 'react';
import Header from './compoenents/Header';
import Auth from './compoenents/Auth';
import Todo from './compoenents/Todo';
import AuthContext from './auth-context';

function App() {

  const [page, setPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  const switchPage = (pageName) => {
    setPage(pageName);
  }

  const login = () => {
    setAuthStatus(true);
  };

  return (
    <div >
      <AuthContext.Provider value={{status: authStatus, login: login}}>
      <Header onLoadTodos={switchPage.bind(this,'todos')}
       onLoadAuth={switchPage.bind(this, 'auth')}/>
      <hr/>
      {
        page === 'auth' ? <Auth/> : <Todo/> 
      }
      </AuthContext.Provider>
      
    
    </div>
  );
}

export default App;
