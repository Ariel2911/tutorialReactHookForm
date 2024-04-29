import { useForm } from 'react-hook-form';

import './App.css';

function App() {

  const { register } = useForm()

  return (
    <div>
      <h1>Tutorial React Hook Form</h1>

      <form className='card'>

        <label htmlFor='name'>Name</label>
        <input type='text' {...register('name')} />

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
