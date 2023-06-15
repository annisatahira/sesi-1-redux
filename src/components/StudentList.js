import { useSelector } from "react-redux";
import StudentItem from "./StudentItem";

const StudentList = () => {
  const students = useSelector((state) => state.students.students);

  return (
    <div>
      <h1>Student List</h1>
      <h2>Total Student: {students.length}</h2>
      {students.map((item) => {
        return <StudentItem nama={item.nama} jurusan={item.jurusan} />;
      })}
    </div>
  );
};

export default StudentList;
