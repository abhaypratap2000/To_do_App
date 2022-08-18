import Todo from './component/Todo';
import './css/main.css'
import { Route, Routes } from 'react-router';
import LoginScreen from './component/LoginScreen';
import SignupScreen from './component/SignupScreen';
import { Container, Nav, Navbar, NavDropdown  } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './redux/Actions/action';
function App() {
  const userInfo = useSelector(state=>state.Users.activeuser)
  const dispatch = useDispatch();
  const signouthandler=()=>{
    dispatch(signout());
    localStorage.removeItem('userInfo')
  }
  return (

    <>
            <Navbar bg="light" variant="light">
          <Container>
            <LinkContainer to='/'>
            <Navbar.Brand>TO-DO-APP</Navbar.Brand>
            </LinkContainer>
            <Nav className="me-auto">
              
              {userInfo?(<NavDropdown title={userInfo?.name} id="basic-nav-dropdown">
              
                <LinkContainer to='/orderhistory'>
                  <NavDropdown.Item>Order History</NavDropdown.Item> 
                </LinkContainer>
                <NavDropdown.Divider/>
                <Link className="dropdown-item"
                to='#signout'
                onClick={signouthandler}
                >Sign Out</Link>
              </NavDropdown>):(<Link className='nav-link' to='/'>
              SignIN</Link>)}
            </Nav>
          </Container>
        </Navbar>

        <div className="App">
    <h1> To do App </h1>
    <Container className="mt-3">
    <ToastContainer position="bottom-center" limit={1} />
        <Routes>
          <Route path='/signUp' element={<SignupScreen/>}/>
         
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/todo' element={<Todo/>}/>
         
        </Routes>
        </Container>
      
    </div>
    </>

    
  
  );
}

export default App;
