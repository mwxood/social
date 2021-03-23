import React from "react";
import './App.css';
import Header from './components/page-structure/hededer/header';
import Footer from "./components/page-structure/footer/footer";
import Content from "./components/page-structure/content/content";
import {BrowserRouter} from "react-router-dom";

const store = [
    {
        id: 1,
        src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Shaqi_jrvej.jpg/1200px-Shaqi_jrvej.jpg'
    }
];

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
          <Header name={store} />
          <Content />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
