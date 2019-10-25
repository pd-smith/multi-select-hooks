import React from 'react';
import './App.css';
import DropDown from './components/DropDown';
import Selection from './components/Selection';
import { SelectionContextProvider } from './context/SelectionContext';
import SelectedOptions from './components/SelectedOptions';

function App() {
  return (
    <div className="selection-widget">
    <SelectionContextProvider>
      <section className="selection-widget-view">
        <DropDown name="Banking">
          <Selection name="Deposit" selectionId="banking.deposit"/>
        </DropDown>
        <DropDown name="My Apps">
          <Selection name="Yelp" selectionId="my-apps.yelp"/>
          <Selection name="Spotify" selectionId="my-apps.spotify"/>
          <Selection name="Youtube" selectionId="my-apps.youtube"/>
        </DropDown>
        <DropDown name="Hobbies">
          <Selection name="Watch Youtube" selectionId="hobbies.watch-youtube"/>
          <DropDown name="Real Hobbies">
            <Selection name="Surfing" selectionId="cool-things.real-hobbies.surfing"/>
            <Selection name="Skating" selectionId="cool-things.real-hobbies.skating"/>
          </DropDown>
        </DropDown>
      </section>
      <section className="selection-widget-view">
        <SelectedOptions/>
      </section>
    </SelectionContextProvider>
    </div>
  );
}

export default App;
