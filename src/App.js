// import logo from './logo.svg';
import './App.css';
// import HeaderTop from ".//Components/HeaderTop"
import Bodycomponent from './/Components/Bodycomponent'
// import Homes from ".//Components/Home";
import { BrowserRouter as Router, } from 'react-router-dom';
import Route from 'react-router-dom/Route';



function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Bodycomponent} />

      </div>
    </Router>
  );
}
export default App;
