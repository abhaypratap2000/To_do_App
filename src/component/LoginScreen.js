import React, {useState } from "react";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { toast } from 'react-toastify';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signin } from "../redux/Actions/action";


function SigninScreen() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email,setemail] = useState('');
  const [password,setpass] = useState('');
  const userInfo = useSelector((state)=>state.Users.users)
  // console.log(userInfo);
  const submitHandler = async (e) => {
    e.preventDefault();
   const check = userInfo.some((item) =>
       item.email ===email && item.password === password 
     );
    
     if(check){
     const UserDetail = userInfo.find((item)=>{
      if(item.email === email && item.password === password )
      return item
     })
     dispatch(signin({name:UserDetail.name , email: UserDetail.email}))
     navigate("/todo")
     }
     else{
       toast.error("Credential are not matched")
     }
  }
  return (
    <Container className="small-container">
     
      <h1 className="my-3">Sign In</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required  onChange={(e) =>setemail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="Password" placeholder="Enter password" required  onChange={(e)=>setpass(e.target.value)}/>
        </Form.Group>
        <div className="mb-3">
          <Button type="submit">Sign In</Button>
        </div>

        <div className="mb-3">
          New Customer?{" "}
          <Link to={`/signUp`}>Create your account</Link>
        </div>
      </Form>
    </Container>
  );
}

export default SigninScreen;