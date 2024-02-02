import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoWrite = () => {
  const navigate = useNavigate();

  const [todo, setTodo] = useState({
    title : '',
    content : '',
  });

  const {title,content} = todo; //비구조화 할당

  const onChange = (event) => {
    const { name, value } = event.target; //event.target에서 name과 value만 가져오기
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const saveTodo = async () => {
    await axios.post('api/todos', todo)
      .then((res) => {
        alert('등록되었습니다.');
        navigate('/todos');
      })
      .catch(error => {
        console.error('오류 발생:', error.response);
        alert('등록에 실패했습니다.');
      });
  };

  const backToList = () => {
    navigate('/todos');
  };

  return (
    <div>
      <div>
        <br/>
        <span>제목</span>
        <input 
        type="text" 
        name="title" 
        value={title} 
        onChange={onChange} 
        />
      </div>
      <br />
      <div>
        <span>내용</span>
        <textarea
          name="content"
          cols="30"
          rows="10"
          value={content}
          onChange={onChange}
        ></textarea>
      </div>
      <br />
      <div>
        <button onClick={saveTodo}>저장</button>
        <button onClick={backToList}>취소</button>
      </div>
    </div>
  );
};

export default TodoWrite;