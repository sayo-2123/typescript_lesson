import React from 'react';
import logo from './logo.svg';
import './App.css';

const name = "hello";
let nameChange = "hello2";
nameChange = "hello3";

let username: string = "Hello";

let array = [0, 1, "hello"];

interface NAME {
  first: string;
  last: string | null;
}

let nameObj: NAME = {first: "Yamada", last: "Taro" };

const func1 = (x: number, y: number) => {
  return x + y;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
