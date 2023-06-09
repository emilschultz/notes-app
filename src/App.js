import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Notes from './pages/Notes';
import CreateNote from './pages/CreateNote';
import EditNote from './pages/EditNote';
import dummyNotes from './dummy-notes';

import { useState } from 'react';

const App = () => {
  const [notes, setNotes] = useState(dummyNotes);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes notes={notes} />} />
        <Route path='/create-note' element={<CreateNote />} />
        <Route path='/edit-note/:id' element={<EditNote />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
