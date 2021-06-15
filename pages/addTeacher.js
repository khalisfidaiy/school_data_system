import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const AddTeacher = () => {
    const [form, setForm] = useState({teacher_id: '', teacher_name: '', date_start: '', assign_school: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createTeacher();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createTeacher = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/teachers', {
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

        if(!form.teacher_id){
            err.teacher_id = 'Teacher ID required';
        }

        if(!form.teacher_name){
            err.teacher_name = 'Teacher Name required';
        }

        if(!form.date_start){
            err.date_start = 'Date Started required';
        }

        if(!form.assign_school){
            err.assign_school = 'Assisgn School required';
        }

        return err;
    }

    return (
        <div className='form-container'>
            <h1>ADD TEACHER</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.teacher_id ? 
                            {content: `Please enter Teacher's ID`, pointing: 'below'}: null}
                            label='Teacher ID'
                            placeholder='Teacher ID'
                            name='teacher_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.teacher_name ? 
                            {content: `Please enter Teacher's name`, pointing: 'below'}: null}
                            label='Teacher Name'
                            placeholder='Teacher Name'
                            name='teacher_name'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.date_start ? 
                            {content: `Please enter start date`, pointing: 'below'}: null}
                            label='Date Start'
                            placeholder='Date Start'
                            name='date_start'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.assign_school ? 
                            {content: `Please enter assign school`, pointing: 'below'}: null}
                            label='Assign School'
                            placeholder='Assign School'
                            name='assign_school'
                            onChange={handleChange}
                         />
                         <Button type='submit'>Save</Button>
                    </Form>
                }
            </div>
        </div>
    )
}

export default AddTeacher;