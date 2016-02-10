import React from 'react';
import Footer from './Footer';
import Header from './Header';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          {'Welcome to React Starterify'}
        </section>
        <Footer />
      </div>
    );
  }
}

export default App;
