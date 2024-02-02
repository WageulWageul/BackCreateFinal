import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Todo from './Todo';

const TodoDetail = () => {
  const { id } = useParams(); // /todo/:id와 동일한 변수명으로 데이터를 꺼낼 수 있습니다.
  const [loading, setLoading] = useState(true);
  const [todo, setTodo] = useState({});

  const getTodo = async () => {
    await axios.get(`api/todos/${id}`)
      .then(res => setTodo(res.data),setLoading(false))
      .catch(error => {
        console.error('오류 발생:', error.response);
        alert('실패했습니다.');
      });
  };

  useEffect(() => {
    getTodo();
  },);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <Todo
          id={todo.id}
          title={todo.title}
          content={todo.content}
        />
      )}
    </div>
  );
};

export default TodoDetail;