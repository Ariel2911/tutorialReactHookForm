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
  province: string;
  picture: string;
  terms: string;
}

function App() {

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm<FormInputs>();

  const onSubmit = handleSubmit((data) => {
    console.log(data)

    alert('Sending data')

    reset()
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
        <input
          type='email'
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
              message: 'Email is not valid'
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="email"
          render={({ message }) => <span>{message}</span>}
        />

        <label htmlFor='password'>Password</label>
        <input
          type='password'
          {...register('password', {
            required: 'Password is required'
          })}
        />
        <ErrorMessage
          errors={errors}
          name="password"
          render={({ message }) => <span>{message}</span>}
        />

        <label htmlFor='confirmPassword'>Confirm password</label>
        <input
          type='password'
          {...register('confirmPassword', {
            required: 'Password confiramtion is required',
            validate: value => value === watch('password') || 'Does not match password'
          })}
        />
        <ErrorMessage
          errors={errors}
          name="confirmPassword"
          render={({ message }) => <span>{message}</span>}
        />

        <label htmlFor='birddate'>Birddate</label>
        <input
          type='date'
          {...register('birddate', {
            required: 'Birddate is required',
            validate: (value) => {
              const birthdate = new Date(value);
              const currentDate = new Date();

              if ((currentDate.getFullYear() - birthdate.getFullYear()) > 18 && true) return true
              if ((currentDate.getFullYear() - birthdate.getFullYear()) == 18 && true)
              {
                if ((currentDate.getMonth() - birthdate.getMonth()) > 0) return true
                if ((currentDate.getMonth() - birthdate.getMonth()) == 0)
                {
                  if ((currentDate.getDate() - birthdate.getDate()) > 0) return true
                }
              }

              return 'You must be over 18 years old'
            }
          })}
        />
        <ErrorMessage
          errors={errors}
          name="birddate"
          render={({ message }) => <span>{message}</span>}
        />

        <label htmlFor='country'>Country</label>
        <select {...register('country')}>
          <option value='mx'>México</option>
          <option value='co'>Colombia</option>
          <option value='ar'>Argentina</option>
        </select>

        {
          watch('country') == 'ar' && (
            <span>
              <input
                type='text'
                placeholder='Province'
                {...register('province', {
                  required: 'Province is required'
                })}
              />
              <ErrorMessage
                errors={errors}
                name="province"
                render={({ message }) => <span>{message}</span>}
              />
            </span>
          )
        }

        <label htmlFor='picture'>Profile picture</label>
        <input type='file' {...register('picture')} />

        <label htmlFor='terms'>I accept terms and conditions</label>
        <input
          type='checkbox'
          {...register('terms', {
            required: 'you must accept the terms and conditions'
          })}
        />
        <ErrorMessage
          errors={errors}
          name="terms"
          render={({ message }) => <span>{message}</span>}
        />

        <button>Send</button>

      </form>
    </div>
  )
}

export default App
