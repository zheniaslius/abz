import React, { Component, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import GlogalStyle from './global';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Requirements from './components/Requirements';
import Users from './components/Users';
import Registration from './components/Registration';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <GlogalStyle />
        <ThemeProvider theme={theme}>
          <Fragment>
            <Header />
            <Hero />
            <About />
            <Requirements />
            <Users />
            <Registration />
            <Footer />
          </Fragment>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
