import {useState} from 'react';
import { useNavigate } from "react-router-dom";
import '../Styles/LoginPage.css'

function LoginPage()
{

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [correctUsernameInput, setCorrectUsernameInput] = useState(true)
  const [correctPasswordInput, setCorrectPasswordInput] = useState(true)

  const usernameChangeHandler = event => {
    setUsername(event.target.value)
  }

  const passwordChangeHandler = event => {
    setPassword(event.target.value)
  }

  let navigate = useNavigate(); 
  const loginhandler = event =>{  
    event.preventDefault()
    console.log('Username: '+ username + ', Password: ' + password)
    if (username != '' && password != '') {
      navigate("/testi");
    }
    else {
      setCorrectUsernameInput(username != '')
      setCorrectPasswordInput(password != '')
    }
  }

  return (
    <div className='LoginPage'>
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="form-group mt-3">
            <label>Username:</label>
            <input
              type="text"
              className={correctUsernameInput ? "form-control mt-1" : "form-control mt-1 IncorrectInput"}
              placeholder="Enter username"
              onChange={usernameChangeHandler}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className={correctPasswordInput ? "form-control mt-1" : "form-control mt-1 IncorrectInput"}
              placeholder="Enter password"
              onChange={passwordChangeHandler}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary" onClick={loginhandler}>
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LoginPage
