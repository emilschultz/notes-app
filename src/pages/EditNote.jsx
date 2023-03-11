import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { RiDeleteBin6Line } from 'react-icons/ri';

const EditNote = () => {
  return (
    <section>
      <header className='create-note-header'>
        <Link to='/' className='button'>
          <IoIosArrowBack />
        </Link>
        <button className='button lg primary'>Save</button>
        <button className='button'>
          <RiDeleteBin6Line />
        </button>
      </header>
      <form action='create-note-form'>
        <input type='text' placeholder='title' autofocus />
        <textarea rows='28' placeholder='details...'></textarea>
      </form>
    </section>
  );
};

export default EditNote;
