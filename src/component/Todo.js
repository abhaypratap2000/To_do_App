import React, {useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { GoPlus } from 'react-icons/go'
import { addtodos } from '../redux/Actions/action'
import DisplayTodos from './DisplayTodo'
function ToDo() {
  const dispatch = useDispatch()
  const [todo, settodo] = useState('')
  const activeUser = useSelector(state=>state.Users.activeusers);
  
  // console.log(activeUser);
  const handelSubmit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 1000)
    dispatch(addtodos({email:activeUser?.email , todo, id, completed: false}))
  }
  const handelchange = (e) => {
    settodo(e.target.value);
  }
return (
    <div className='.addTodos'>
      <Form onSubmit={handelSubmit} className='addTodos'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="" onChange={handelchange} className="todo-input" />
        </Form.Group>
        <Button type="submit" className='add-btn' >
          <GoPlus />
        </Button>
      </Form>
      <DisplayTodos />
</div>
  )
}

export default ToDo

