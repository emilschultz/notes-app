import { CiSearch } from 'react-icons/ci';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import NoteItem from '../components/NoteItem';

const Notes = ({ notes }) => {
  return (
    <section>
      <header className='notes-header'>
        <h2>My Notes</h2>
        {/* <input type='text' autoFocus placeholder='Keyword...' /> */}
        <button>
          <CiSearch />
        </button>
      </header>
      <div className='notes-container'>
        {notes.map((note) => (
          <NoteItem key={note.id} note={note} />
        ))}
      </div>
      <Link className='button add-button'>
        <BsPlusLg />
      </Link>
    </section>
  );
};

export default Notes;
