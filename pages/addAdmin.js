import Link from 'next/link';
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import {Button, Form, Loader} from 'semantic-ui-react';
import {useRouter} from 'next/router';

const AddAdmin = () => {
    const [form, setForm] = useState({admin_id: '', admin_name: '', date_start: '', assign_school: ''});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const router = useRouter();

    useEffect(() => {
        if(isSubmitting){
            if(Object.keys(errors).length === 0){
                //alert('success');
                createAdmin();
            } else {
                setIsSubmitting(false);
            }
        }
    }, [errors]);

    const createAdmin = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/school_data/administrator', {
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

        if(!form.admin_id){
            err.admin_id = 'Administrator ID required';
        }

        if(!form.admin_name){
            err.admin_name = 'Administrator Name required';
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
            <h1>ADD ADMINISTRATOR</h1>
            <div>
                {
                    isSubmitting ? <Loader active inline='centered'/>
                    : <Form onSubmit={handleSave}>
                        <Form.Input
                            fluid
                            error={ errors.admin_id ? 
                            {content: `Please enter Administrator's ID`, pointing: 'below'}: null}
                            label='Administrator ID'
                            placeholder='Administrator ID'
                            name='admin_id'
                            onChange={handleChange}
                         />
                         <Form.Input
                            fluid
                            error={ errors.admin_name ? 
                            {content: `Please enter Administrator's name`, pointing: 'below'}: null}
                            label='Administrator Name'
                            placeholder='Administrator Name'
                            name='admin_name'
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

export default AddAdmin;