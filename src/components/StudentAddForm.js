import { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../redux/slices/StudentSlice";

const StudentAddForm = () => {
  const [nama, setNama] = useState("");
  const [jurusan, setJurusan] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      nama: nama,
      jurusan: jurusan,
    };

    dispatch(addStudent(newStudent));

    setNama("");
    setJurusan("");
  };

  return (
    <div>
      <h2>Add New Student</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nama">Nama: </label>
        <input
          type="text"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />
        <label htmlFor="jurusan">Jurusan:</label>
        <input
          type="text"
          value={jurusan}
          onChange={(e) => setJurusan(e.target.value)}
        />
        <input type="submit" value="Add Student" />
      </form>
    </div>
  );
};

export default StudentAddForm;
