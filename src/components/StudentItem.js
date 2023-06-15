import { useDispatch } from "react-redux";
import { deleteStudent } from "../redux/slices/StudentSlice";

const StudentItem = ({ id, nama, jurusan }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteStudent({ id: id }));
  };
  return (
    <div>
      - {nama} : {jurusan}
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
};

export default StudentItem;
