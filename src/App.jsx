import './App.css';
import { Navigation } from './components/Navigation';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { Form } from './components/Form/Form';

export const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="main">
        <Header />
        <div className="container">
          <Users />
          <Form />
        </div>
      </div>
    </div>
  );
}
