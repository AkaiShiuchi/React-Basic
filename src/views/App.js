import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';

/**
 *  two components: class component / function component (function, arrow)
 */

function App() {
  // const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World with React.js
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
