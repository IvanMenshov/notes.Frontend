import React from 'react';
import './App.css';
import { NewNoteModal } from './components/NoteModal';
import { NotesTable } from './components/NotesTable';

const App = () => {
  return (
    <div className="App">
       <h3>My Notes</h3>
       <div style={{maxWidth: '70%', margin: 'auto'}}>
          <div style={{textAlign: 'right'}}>
            <NewNoteModal />
          </div>
         <NotesTable />
       </div>
    </div>
  );
}

export default App;
