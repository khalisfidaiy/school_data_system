import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const AddStudent = () => {
    const d = new Date();
    const get_year = d.getFullYear();
    const get_month = d.getMonth() + 1;
    const get_day = d.getDate();    
    
    const [form, setForm] = useState({student_id: '', student_fullname: '', date_of_birth: '', father_fullname: '', mother_fullname: '', date_registered: `${get_day}/${get_month}/${get_year}`, current_school: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createStudent();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createStudent = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/students', {
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

        if(!form.student_id){
            err.student_id = 'Student ID required';
        }

        if(!form.student_fullname){
            err.student_fullname = 'Student Name required';
        }

        if(!form.date_of_birth){
            err.date_of_birth = 'Date of Birth required';
        }

        if(!form.father_fullname){
            err.father_fullname = `Father's name required`;
        }

        if(!form.mother_fullname){
            err.mother_fullname = `Mother's name required`;
        }

        if(!form.current_school){
            err.current_school = 'Currnt School Attended required';
        }

        return err;
    }

    return (
        <div className='form-container'>
            <h1>ADD STUDENT</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.student_id ? 
                            {content: `Please enter Student's ID`, pointing: 'below'}: null}
                            label='Student ID'
                            placeholder='Student ID'
                            name='student_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.student_fullname ? 
                            {content: `Please enter Student's Fullname`, pointing: 'below'}: null}
                            label="Student's Fullame"
                            placeholder="Student's Fullname"
                            name='student_fullname'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.date_of_birth ? 
                            {content: `Please enter date of birth`, pointing: 'below'}: null}
                            label='Date of Birth'
                            placeholder='Date of Birth'
                            name='date_of_birth'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.father_fullname ? 
                            {content: `Please enter Father's Fullname`, pointing: 'below'}: null}
                            label="Father's Fullname"
                            placeholder="Father's Fullname"
                            name='father_fullname'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.mother_fullname ? 
                            {content: `Please enter Mother's Fullname`, pointing: 'below'}: null}
                            label="Mother's Fullname"
                            placeholder="Mother's Fullname"
                            name='mother_fullname'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.current_school ? 
                            {content: `Please enter Current School`, pointing: 'below'}: null}
                            label='Current School'
                            placeholder='Current School'
                            name='current_school'
                            onChange={handleChange}
                         />
                         <Button type='submit'>Save</Button>
                    </Form>
                }
            </div>
        </div>
    )
}

export default AddStudent;