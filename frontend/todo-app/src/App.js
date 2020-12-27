import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css';
import FirstComponent from './components/learning-examples/FirstComponent'
import Counter from './components/counter/Counter'
import TodoApp from './components/todo/TodoApp'

class App extends Component {
  render() {
    return (
      <div className="App">
         {/*<Counter/>*/}
         <TodoApp/>
      </div>
    );
  }
}







//Class Component
class SecondComponent extends Component {
  render() {
    return (
      <div className="secondComponent">
         Second Component
      </div>
    );
  }
}

function FuncComp() {
  return (
    <div className="FuncComp">
       func Component
    </div>
  );
}

export default App;
