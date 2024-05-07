
import './App.css';
import TaskInput from './components/TaskInput';

function App() {
  return (
    <>
    <div className='container'>
          <h1>Task Master</h1>
          <TaskInput />

          <div className="toDoList">
            <span>
              To Do
            </span>
            <ul className="list-items">
              
            </ul>
          </div>
    </div>
    </>
  );
}

export default App;
