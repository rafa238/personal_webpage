import React, { useContext, useState } from 'react';
import axios from 'axios';
import { DataContext } from '../context/DataProvider';

const initialStateForm = {
    name: "",
    email: "",
    subject_1: "",
    content: ""
};

export const Form = () => {
    const { contact } = useContext(DataContext);
    const [formState, setFormState] = useState(initialStateForm);
    const { name, email, subject, content } = formState;

    const [serverState, setServerState] = useState({
        submitting: false,
        status: null
    });

    const handleServerResponse = (ok, msg) => {
        setServerState({
            submitting: false,
            status: { ok, msg }
        });
        if (ok) {
            setFormState(initialStateForm);
        }
    };
    
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const handleOnSubmit = event => {
        event.preventDefault();
        setServerState({ submitting: true });
        axios({
            method: "POST",
            url: "https://formspree.io/f/mnqkpqrp",
            data: formState
        })
            .then(r => {
                handleServerResponse(true, "Thanks!");
            })
            .catch(r => {
                console.log(r)
                handleServerResponse(false, r.response.data.error);
            });
    };

    return (
        <form onSubmit={ handleOnSubmit }>
            <div className='contact__form__group'>
                <label htmlFor='name'>{ contact.name }:</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={name}
                    onChange={onInputChange}
                    placeholder='Name'
                />
            </div>
            <div className='contact__form__group'>
                <label htmlFor='email'>{ contact.email }:</label>
                <input
                    type='email'
                    id='email'
                    name='email'
                    value={email}
                    onChange={onInputChange}
                    placeholder='Email'
                />
            </div>
            <div className='contact__form__group'>
                <label htmlFor='subject'>{ contact.subject }:</label>
                <input
                    type='text'
                    id='subject_1'
                    name='subject_1'
                    value={subject}
                    onChange={onInputChange}
                    placeholder='Subject'
                />
            </div>
            <div className='contact__form__group'>
                <label htmlFor='content'>{ contact.content }:</label>
                <textarea
                    id='content'
                    name='content'
                    value={content}
                    onChange={onInputChange}
                    placeholder='Message'
                />
            </div>
            <input type='submit' value="send" className='btn-blue shadow'/>
        </form>
    );
};