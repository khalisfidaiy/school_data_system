import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const AddClasses = ({teacherdetail}) => {
    const d = new Date();
    const get_year = d.getFullYear();
    
    const [form, setForm] = useState({class_id: '', class_name: '', class_year: get_year, assign_teacher_id: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

console.log(teacherdetail)

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createClass();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createClass = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/classes', {
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

        if(!form.class_id){
            err.class_id = 'Class ID required';
        }

        if(!form.class_name){
            err.class_name = 'Class Name required';
        }

        if(form.assign_teacher_id === 'none' || !form.assign_teacher_id){
            err.assign_teacher_id = 'Select Teacher required';
        }

        return err;
    }

    return (
        <div className='form-container'>
            <h1>ADD CLASS</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.class_id ? 
                            {content: `Please enter Class ID`, pointing: 'below'}: null}
                            label='Class ID'
                            placeholder='Class ID'
                            name='class_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.class_name ? 
                            {content: `Please enter Class's name`, pointing: 'below'}: null}
                            label='Class Name'
                            placeholder='Class Name'
                            name='class_name'
                            onChange={handleChange}
                         />
                         <Form.Field
                            control='select'
                            error={ errors.assign_teacher_id ? 
                            {content: `Please enter assign school`, pointing: 'below'}: null}
                            label='Assign Teacher Incharge'
                            name='assign_teacher_id'
                            onChange={handleChange}>
                                <option value='none'>Select Teacher</option>
                                {
                                    teacherdetail.map(opt =>{
                                        return <option key={opt.teacher_id} value={opt.teacher_id}>{`${opt.teacher_id} - ${opt.teacher_name}`}</option>
                                    })
                                }
                            </Form.Field>
                         <Button type='submit'>Save</Button>
                    </Form>
                }
            </div>
        </div>
    )
}

AddClasses.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/school_data/teachers');
    const {data}  = await res.json();

    return {teacherdetail:data}
    console.log(data);
}

export default AddClasses;