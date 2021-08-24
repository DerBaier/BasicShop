import logo from './logo.svg';
import './App.css';

/* Importing Sites */
import HomePage from './Sites/HomePage';
import DiscoverPage from './Sites/DiscoverPage';
import ProfilePage from './Sites/ProfilePage';
import ProductPage from './Sites/ProductPage';

/* Importing Styles */
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/ComponentsStyles.css';


/*Importing Fonts */


/* Importing Components */
import NavigationBar from './Components/NavigationBar';
/* Importing Router Stuff */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <header>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap" rel="stylesheet" />
  
      </header>
      <div>
        <NavigationBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/discover">
            <DiscoverPage />
          </Route>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/product">
            <ProductPage />
          </Route>
        </Switch>
      </div>
      <footer>
        <div 
        className=" footerDiv">
          <ul className="footerLinks">
            <li><a href="/contact">Kontakt</a></li>
            <li><a href="/aboutus">Über uns</a></li>
            <li><a href="/help">Hilfe und FAQ</a></li>
            <li><a href="/job">Jobs / Karriere</a></li>
            <p>&copy; by Juri Baier</p>
          </ul>
          
        </div>
        
      </footer>
    </Router>
  );
}

export default App;
