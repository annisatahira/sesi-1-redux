const { createSlice } = require("@reduxjs/toolkit");

const initialStudentState = {
  currentId: 0,
  students: [
    {
      id: 1,
      nama: "Ayu",
      jurusan: "IT",
    },
    {
      id: 2,
      nama: "Budi",
      jurusan: "Akutansi",
    },
    {
      id: 3,
      nama: "Lulu",
      jurusan: "Akutansi",
    },
  ],
};

// id
// nama
// jurusan

const studentSlice = createSlice({
  name: "students",
  initialState: initialStudentState,
  reducers: {
    addStudent: (state, action) => {
      state.students.push({
        id: state.currentId + 1,
        nama: action.payload.nama,
        jurusan: action.payload.jurusan,
      });
    },
    deleteStudent: () => {},
  },
});

// untuk mengubah state
export const { addStudent } = studentSlice.actions;

export default studentSlice.reducer;
