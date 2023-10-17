import Table from './components/Table';
import './App.css';

import { Button } from "@material-tailwind/react";

function App() {
  return (
    <div className="App p-20">
        <Table />
        <button className="bg-red-400">hiii</button>
        <Button className='bg-yellow-300'>yooo</Button>
    </div>
  );
}

export default App;
