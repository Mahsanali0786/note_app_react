import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import noteRepo from '../../api/noteRepo';
import { handleNoteObject } from '../../store/notes';
import './NotesTable.css';

function NotesTable() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editingNote, setEditingNote] = useState(null);
  const [newNote, setNewNote] = useState({ title: '', content: '' });

  const notes = useSelector((state) => state.note.object);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const data = await noteRepo.getNotes();
      dispatch(handleNoteObject(data));
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    }
  };

  const handleAddNote = async () => {
    try {
      const newNoteData = {
        title: newNote.title,
        content: newNote.content,
      };
      await noteRepo.addNote(newNoteData);
      setNewNote({ title: '', content: '' });
      getData(); // Refresh notes
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  const handleEditNote = async () => {
    try {
      const updatedNoteData = {
        title: editingNote.title,
        content: editingNote.content,
      };
      await noteRepo.updateNote(editingNote.id, updatedNoteData);
      setEditingNote(null);
      getData(); // Refresh notes
    } catch (error) {
      console.error('Failed to update note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await noteRepo.deleteNote(id);
      getData(); // Refresh notes
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  return (
    <>
      <button onClick={() => navigate('/')} className='back-button'>
        Back
      </button>

      <div className='noteDiv'>
        <div className='noteForm'>
          <h2>{editingNote ? 'Edit Note' : 'Add New Note'}</h2>
          <input
            type="text"
            placeholder="Title"
            value={editingNote ? editingNote.title : newNote.title}
            onChange={(e) => (editingNote ? setEditingNote({ ...editingNote, title: e.target.value }) : setNewNote({ ...newNote, title: e.target.value }))}
          />
          <textarea
            placeholder="Content"
            value={editingNote ? editingNote.content : newNote.content}
            onChange={(e) => (editingNote ? setEditingNote({ ...editingNote, content: e.target.value }) : setNewNote({ ...newNote, content: e.target.value }))}
          />
          <button onClick={editingNote ? handleEditNote : handleAddNote}>
            {editingNote ? 'Update Note' : 'Add Note'}
          </button>
        </div>

        <div className='tableContainer'>
          <h1>NotesTable</h1>
          <table className='table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Description</th>
                <th>Created At</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {notes.length > 0 && notes.map((e, index) => (
                <tr key={e.id || index}>
                  <td>{e.id}</td>
                  <td>{e.title}</td>
                  <td>{e.content}</td>
                  <td>{new Date(e.createdAt).toLocaleString()}</td>
                  <td>
                    <button onClick={() => setEditingNote(e)}>Edit</button>
                    <button onClick={() => handleDeleteNote(e.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default NotesTable;
