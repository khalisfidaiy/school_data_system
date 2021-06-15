import { Button, Form } from 'semantic-ui-react'


export default function MasterLogin() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row justify-content-center'>
          <h1>SCHOOL DATA SYSTEM</h1>
        </div>
        <div className='row justify-content-center'>
          <div className='border w-25 rounded border-dark mt-5 p-3'>
          <h4 className='text-center'>Master Account</h4>
          <Form>
            <Form.Field required>
              <label>Username</label>
              <input id='username' placeholder='Username' />
            </Form.Field>
            <Form.Field required>
              <label>Password</label>
              <input type='password' id='password' placeholder='password' />
            </Form.Field>
            <Button type='submit'>Log in</Button>
          </Form>
          </div>
        </div>
      </div>
    </>
  )
}
