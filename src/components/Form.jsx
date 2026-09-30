import { useContext, useState } from 'react'
import axios from 'axios'
import { DataContext } from '../context/DataProvider'

const initialForm = { name: '', email: '', subject: '', content: '' }

export const Form = () => {
  const { contact, form_success } = useContext(DataContext)
  const [form, setForm] = useState(initialForm)
  const [submitting, setSubmitting] = useState(false)
  const [status, setStatus] = useState(null)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (submitting) return
    setSubmitting(true)
    setStatus(null)
    try {
      await axios.post('https://formspree.io/f/mnqkpqrp', form)
      setForm(initialForm)
      setStatus('success')
    } catch {
      setStatus('error')
    } finally {
      setSubmitting(false)
    }
  }

  const updateField = ({ target }) => setForm(previous => ({ ...previous, [target.name]: target.value }))

  return (
    <form className="message-form" onSubmit={handleSubmit} aria-busy={submitting}>
      <fieldset disabled={submitting}>
        {['name', 'email', 'subject'].map(field => (
          <div className="message-field" key={field}>
            <label htmlFor={field}>{contact[field]}</label>
            <input
              id={field}
              name={field}
              type={field === 'email' ? 'email' : 'text'}
              autoComplete={field === 'subject' ? 'off' : field}
              value={form[field]}
              onChange={updateField}
              required
            />
          </div>
        ))}
        <div className="message-field">
          <label htmlFor="content-message">{contact.content}</label>
          <textarea id="content-message" name="content" value={form.content} onChange={updateField} rows="5" required />
        </div>
        <button className="primary-link" type="submit" disabled={submitting}>
          {submitting ? contact.sending : contact.submit}
        </button>
      </fieldset>
      <p className="form-status" role="status">
        {status === 'success' && form_success}
        {status === 'error' && contact.error}
      </p>
    </form>
  )
}
