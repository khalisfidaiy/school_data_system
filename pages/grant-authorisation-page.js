import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const SetAuthorisation = () => {
    const [form, setForm] = useState({user_id: '', username: '', password: '', access_page: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createAuthorisation();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createAuthorisation = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/authorisations', {
                method: 'POST',
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });

            router.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    const handleSave = (e)=> {
        e.preventDefault();
        let errs = validate();
        setErrors(errs);
        setIsSubmitting(true);
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const validate = () => {
        let err = {};

        if(!form.user_id){
            err.user_id = 'User ID required';
        }

        if(!form.username){
            err.username = 'Username required';
        }

        if(!form.password){
            err.password = 'Password required';
        }

        if(form.access_page === 'none'){
            err.access_page = 'Access Page required';
        }

        return err;
    }

    return (
        <div className='form-container'>
            <h1>SET AUTHORISATION</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.user_id ? 
                            {content: `Please enter User's ID`, pointing: 'below'}: null}
                            label='User ID'
                            placeholder='User ID'
                            name='user_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.username ? 
                            {content: `Please enter Username`, pointing: 'below'}: null}
                            label='Username'
                            placeholder='Username'
                            name='username'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            type='password'
                            error={ errors.password ? 
                            {content: `Please enter password`, pointing: 'below'}: null}
                            label='Password'
                            placeholder='Password'
                            name='password'
                            onChange={handleChange}
                         />
                         <Form.Field
                            control='select'
                            error={ errors.access_page === 'none' ? 
                            {content: `Please enter Access Page`, pointing: 'below'}: null}
                            label='Access Page'
                            name='access_page'
                            onChange={handleChange}>
                                <option value='none'>Select Access Page</option>
                                <option value='administrator-page'>Administration</option>
                                <option value='teacher-page'>Teacher</option>
                            </Form.Field>
                         <Button type='submit'>Save</Button>
                    </Form>
                }
            </div>
        </div>
    )
}

export default SetAuthorisation;