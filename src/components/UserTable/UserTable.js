import noteRepo from '../../api/noteRepo';
import { handleNoteObject } from '../../store/notes';
import './UserTable.css';

function UserTable() {

  const getData = async () => {
    const data = await noteRepo();
    console.log(data);
    setError('');
    dispatch(handleNoteObject(data));
  }

  return (
    <>
      <table className='table'>
        <tr>
          <td>User Name</td>
          <td>{data.username}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{data.email}</td>
        </tr>
        <tr>
          <td>Image</td>
          <td>
            <img src={data.image} />
          </td>
        </tr>
      </table>
    </>
  );
}

export default UserTable;
