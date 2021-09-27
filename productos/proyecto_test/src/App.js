import React, { Component } from 'react';
import './App.css'
import {container} from "./components/container";
import {navbar} from "./components/navbar";
import {micomponente} from "./components/micomponente";

class App extends Component {
  render() {
    return (
        <section className="componentes">
        <micomponente />
        </section>
    );
  }
}

export default App;