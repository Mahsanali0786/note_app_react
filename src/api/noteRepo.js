const BASE_URL = `${process.env.REACT_APP_BASE_URL}/notes`;

const getNotes = () => {
    return fetch(`${BASE_URL}`)
        .then(res => {
            if (!res.ok) throw new Error('Network response was not ok');
            return res.json();
        });
};

const addNote = (note) => {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    })
        .then(res => {
            if (!res.ok) throw new Error('Failed to add note');
            return res.json();
        });
};

const updateNote = (id, note) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(note),
    })
        .then(res => {
            if (!res.ok) throw new Error('Failed to update note');
            return res.json();
        });
};

const deleteNote = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE',
    })
        .then(res => {
            if (!res.ok) throw new Error('Failed to delete note');
            return res.text();
        });
};

export default {
    getNotes,
    addNote,
    updateNote,
    deleteNote,
};
