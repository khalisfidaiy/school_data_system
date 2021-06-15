import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

export default function Home() {
  const [form, setForm] = useState({username: '', password: ''});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const approveUser = (username, password)=>{
    if(username === 'teacher' && password === '123456'){
      router.push('/teacher-page');
    } else if(username === 'admin' && password === '654321'){
      router.push('/administrator-page');
    } else {
      alert('invalid user');
    }
  }

  useEffect(() => {
    if(isSubmitting){
        if(Object.keys(errors).length === 0){
            approveUser(form.username, form.password);
            console.log(form);
        } else {
            setIsSubmitting(false);
        }
    }
  }, [errors]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e)=> {
    e.preventDefault();
    let errs = validate();
    setErrors(errs);
    setIsSubmitting(true);
  }

  const validate = () => {
    let err = {};

    if(!form.username){
        err.username = 'Username required';
    }

    if(!form.password){
        err.password = 'Password required';
    }

    return err;
  }

  

  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <h1>SCHOOL DATA SYSTEM</h1>
        </div>
        <div className='row justify-content-center'>
          <div className='form-container border rounded border-dark mt-5 p-3'>
          {
            isSubmitting ? <Loader active inline='centered'/>
            : <Form onSubmit={handleSubmit}>
            <Form.Input required
              error={ errors.username ? 
              {content: `Please enter Username`, pointing: 'below'}: null}
              label='Username'
              name='username'
              placeholder='Username'
              onChange={handleChange}/>

            <Form.Input required
              error={ errors.password ? 
              {content: `Please enter Password`, pointing: 'below'}: null}
              type='password'
              label='Password'
              name='password'
              placeholder='Password'
              onChange={handleChange}/>
            <Button type='submit'>Login</Button>
          </Form>
          }
          
          </div>
        </div>
      </div>
    </>
  )
}
