import './App.css';

import { Statistics } from './Statistics/Statistics';
import Data from "./data.json"

import { Friends } from './FriendList/FriendList';
import friends from './friends.json'

function App() {
  return (
    <div className="App">
      <Statistics title="upload stats" status={Data} />
      <Friends friends={friends} />
    </div>
  );
}

export default App;