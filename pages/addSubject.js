import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const AddSubject = () => {
    const [form, setForm] = useState({subject_id: '', subject_name: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createSubject();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createSubject = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/subjects', {
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

        if(!form.subject_id){
            err.subject_id = 'Subject ID required';
        }

        if(!form.subject_name){
            err.subject_name = 'Subject Name required';
        }

        return err;
    }

    return (
        <div className='form-container'>
            <h1>ADD SUBJECT</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.subject_id ? 
                            {content: `Please enter Subject ID`, pointing: 'below'}: null}
                            label='Subject ID'
                            placeholder='Subject ID'
                            name='subject_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.subject_name ? 
                            {content: `Please enter Subject's name`, pointing: 'below'}: null}
                            label='Subject Name'
                            placeholder='Subject Name'
                            name='subject_name'
                            onChange={handleChange}
                         />
                         <Button type='submit'>Save</Button>
                    </Form>
                }
            </div>
        </div>
    )
}

export default AddSubject;