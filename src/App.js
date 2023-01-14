import { useState } from 'react';
import './App.css';
import CSVInput from './components/screens/CSVInput';
import CSVReader from './components/screens/CSVReader';

function App() {
  const [filepath, setFilePath] = useState();
  return (
    <div className="App">
      <CSVInput handleSubmit={setFilePath} />
      <CSVReader filepath={filepath} />
    </div>
  );
}

export default App;
