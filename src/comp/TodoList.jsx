
import axios from "axios";
import React,{useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';

const TodoList = () => {
    const navigate = useNavigate();
    const [todoList, setTodoList] = useState([]);
  
    const getTodoList = async () => {
      await axios.get('api/todos')
      .then(res => setTodoList(res.data))
      .catch(error => {
        console.error('오류 발생:', error.response);
        alert('실패했습니다.');
      });
    }
  
    const moveToWrite = () => {
      navigate('/write');
    };
  
    useEffect(() => {
      getTodoList();
    }, []);
   
    
    return (
      <div>
        <ul>
          {todoList.map(todo => (
            <li key={todo.id}>{todo.title},{todo.content}
            <br></br>
            디테일 : 
            <Link to={`${todo.id}`}> {todo.title}</Link>
            </li>
          ))}
        </ul>
        <div>
          <button onClick={moveToWrite}>글쓰기</button>
        </div>
      </div>
    );
};

export default TodoList;