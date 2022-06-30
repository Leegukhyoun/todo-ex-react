
import './App.css';
import { useState, useRef } from 'react';
import TodoLists from './Components/TodoLists';
import CreateTodo from './Components/CreateTodo';

function App() {
  const [ list, setList ] = useState("");         //input의 값을 입력할 때 (input의 value가 변경될 때)
  const onChange = (e) =>{                        //onChange 함수 실행
    const { value } = e.target;                  
    setList(value);                               //state인 list의 값을 input의 value값으로 업데이트                         
  }


  //CreateTodo컴포넌트에서 +버튼을 클릭하면
  //todos 배열에 할일 객체가 추가됨

  const onCreate= () => {
    const listobj = {
      id : nextId.current,
      list : list,
      isDone : false,
    }
    setTodos([...todos, listobj]);
    nextId.current += 1;
    setList("");
  }

  const [ todos, setTodos ] = useState([
    {
      id : 1,
      list : "해야할일1",
      isDone : false,
    },
    {
      id : 2,
      list : "해야할일2",
      isDone : false,
    },
    {
      id : 3,
      list : "해야할일3",
      isDone : false,
    },
  ])
  const nextId = useRef(todos.length+1);

  //항목 삭제
  //삭제 버튼 클릭시 id값을 인수로 받아서 
  //todos배열에서 id값이 다른 개체만 업데이트
  const onDelete = (id) => {
    setTodos(todos.filter(todo=>id !== todo.id));
  }

  const onToggle = (id) => {
    setTodos(todos.map(todo=> id === todo.id ? {...todo, isDone: !todo.isDone} : todo));
  }
  return (
    <div className="App">
      <CreateTodo list={list} onChange={onChange} onCreate={onCreate}/>
      <TodoLists todos={todos} onDelete={onDelete} onToggle={onToggle}/>
    </div>
  );
}

export default App;
