import './App.css';
import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <section className="App">
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default App;
