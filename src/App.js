import './App.css';

import { Chatbot } from './components/chatbot/Chatbot';

const Header = () => {
  return (
    <header>
      <h1>Recommender</h1>
    </header>
  )
}

function App() {
  return (
    <div className="App">
      <Header/>
      <Chatbot/>
    </div>
  );
}

export default App;
