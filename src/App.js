import ResponsiveAppBar from './Navbar';
import Home from './components/Home';
import { makeStyles } from '@material-ui/styles';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';




const useStyles = makeStyles((theme) => ({
  root:{
    height: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + '/images/investment.jpg'})` ,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },
}));
  



function App() {
  const classes = useStyles();
  return (
    <div>
    <CssBaseline/>
    
    <div className={classes.root}>
    <div className="container">

    <BrowserRouter> 
    <div className="App">
      <div className="container">
      <ResponsiveAppBar />    
        <Routes>          
          <Route exact path='/home' element={<Home/>} />                
        </Routes>
       
       
      </div>
    </div>
    </BrowserRouter>
    <Footer/>
    
    </div>
    </div>
    </div>
  )
};

export default App;