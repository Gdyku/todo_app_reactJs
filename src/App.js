import AddTask from "./components/AddTask";
import ListOfTasks from "./components/ListOfTasks";
import PageTitle from "./components/PageTitle";
import "./Styles/GlobalStyles.css";

function App() {
  return (
    <div>
      <PageTitle />
      <div className="button-container">
        <AddTask />
      </div>
      <ListOfTasks />
    </div>
  );
}

export default App;
