import React from 'react';

import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/coreConcept/CoreConcepts.jsx';
import Examples from './components/examples/Examples';

function App () {
    return (
      <>
          <Header/>
          <main>
            <CoreConcepts/>
            <Examples/>

          </main>
      </>
    );
}

export default App;
