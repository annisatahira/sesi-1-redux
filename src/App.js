import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import StudentList from "./components/StudentList";
import StudentAddForm from "./components/StudentAddForm";

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <StudentAddForm />
        <hr />
        <StudentList />
      </div>
    </Provider>
  );
}

export default App;
