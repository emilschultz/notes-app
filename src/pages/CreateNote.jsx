import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const CreateNote = () => {
  return (
    <section>
      <header className='create-note-header'>
        <Link to='/' className='button'>
          <IoIosArrowBack />
        </Link>
        <button className='button lg primary'>save</button>
        <form action='create-note-form'>
          <input type='text' placeholder='title' autofocus />
          <textarea rows='28' placeholder='details...'></textarea>
        </form>
      </header>
    </section>
  );
};

export default CreateNote;
