import React from "react";
import './App.css';
import Header from './components/page-structure/hededer/header';
import Footer from "./components/page-structure/footer/footer";
import Content from "./components/page-structure/content/content";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
