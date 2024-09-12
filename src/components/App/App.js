
// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '../Auth/Auth';
import NotesTable from '../UserTable/NotesTable';
// import AddNote from '../AddNote/AddNote';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/notes-table" element={<NotesTable />} />
        {/* <Route path="/addnotes" element={<AddNote />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
