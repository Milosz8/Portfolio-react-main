import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import SmoothScrollbar from './components/SmoothScrollbar';
// import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        {/* <ScrollToTop /> */}
        <SmoothScrollbar>
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </SmoothScrollbar>
      </Router>
    </>
  );
}
