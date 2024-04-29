import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import './App.css';

interface FormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  birddate: string;
  country: string;
  picture: string;
  terms: string;
}

function App() {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <h1>Tutorial React Hook Form</h1>

      <form className='card' onSubmit={onSubmit}>

        <label htmlFor='name'>Name</label>
        <input
          type='text'
          {...register('name', {
            required: 'Nane is required',
            minLength: {
              value: 3,
              message: 'Name must be at least 3 characters'
            },
            maxLength: {
              value: 20,
              message: 'Name must not b more than 20 characters'
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <span>{message}</span>}
        />


        <label htmlFor='emain'>Email</label>
        <input type='email' {...register('email')} />

        <label htmlFor='password'>Password</label>
        <input type='password' {...register('password')} />

        <label htmlFor='confirmPassword'>Confirm password</label>
        <input type='password' {...register('confirmPassword')} />

        <label htmlFor='birddate'>Birddate</label>
        <input type='date' {...register('birddate')} />

        <label htmlFor='country'>Country</label>
        <select {...register('country')}>
          <option value='mx'>México</option>
          <option value='co'>Colombia</option>
          <option value='ar'>Argentina</option>
        </select>

        <label htmlFor='picture'>Profile picture</label>
        <input type='file' {...register('picture')} />

        <label htmlFor='terms'>I accept terms and conditions</label>
        <input type='checkbox' {...register('terms')} />

        <button>Send</button>

      </form>
    </div>
  )
}

export default App
