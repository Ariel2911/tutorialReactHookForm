import './App.css'

function App() {

  return (
    <div>
      <h1>Tutorial React Hook Form</h1>

      <form className='card'>

        <label htmlFor='name'>Name</label>
        <input type='text' />

        <label htmlFor='emain'>Email</label>
        <input type='email' />

        <label htmlFor='password'>Password</label>
        <input type='password' />

        <label htmlFor='confirmPassword'>Confirm password</label>
        <input type='password' />

        <label htmlFor='birddate'>Birddate</label>
        <input type='date' />

        <label htmlFor='country'>Country</label>
        <select>
          <option value='mx'>México</option>
          <option value='co'>Colombia</option>
          <option value='ar'>Argentina</option>
        </select>

        <label htmlFor='file'>Profile picture</label>
        <input type='file' />

        <label htmlFor='terms'>I accept terms and conditions</label>
        <input type='checkbox' />

        <button>Send</button>

      </form>
    </div>
  )
}

export default App
