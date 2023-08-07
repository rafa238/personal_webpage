import React from 'react'

export const Form = () => {
    return (
        <form action='#'>
            <div className='contact__form__group'>
                <label for="name">Full Name</label>
                <input
                    type='text'
                    id="name"
                    placeholder='Name' />
            </div>
            <div className='contact__form__group'>
                <label for="email">Email</label>
                <input
                    type='text'
                    id="email"
                    placeholder='Email' />
            </div>
            <div className='contact__form__group'>
                <label for="subject">Subject</label>
                <input
                    type='text'
                    id="subject"
                    placeholder='Subject' />
                
            </div>
            <div className='contact__form__group'>
                <label for="content">Content</label>
                <textarea
                    id='content'
                    placeholder='Message'>
                </textarea>
            </div>
            <input type='submit' className='btn-blue shadow'/>
        </form>
    )
}
