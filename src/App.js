import './App.css';
import { Route } from "wouter";

import { Monthly } from './pages/Monthly';
import { Activities } from './pages/Activities';

import { Header } from './components/Header';

function App() {
  return (
    <div className="App">
      <section>
        <Header />
        <Route component={Monthly} path="/" />
        <Route component={Activities} path="/activities" />
      </section>
    </div>
  );
}

export default App;
