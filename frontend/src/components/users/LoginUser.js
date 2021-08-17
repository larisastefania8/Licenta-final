import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory   } from 'react-router';
import { loginUserAction } from '../../redux/actions/users/usersActions';
import ErrorMessage from '../ErrorMessage';
import RegisterUser from './RegisterUser';


const LoginUser = ({})=> {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  let history = useHistory();

  //Grab pieces of data from our store that we care about

  const state = useSelector(state => {
    return state.userLogin;
  });

  const { loading, userInfo, error } = state;

  useEffect(() => {
    if (userInfo) {
      history.push('/');
    }
  }, [userInfo]);



  //Submit handler
  const loginUserSubmitHandler = e => {
    e.preventDefault();
    console.log(email, password);
    dispatch(loginUserAction(email, password));
   
  };


  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {loading && <h1>Loading</h1>}
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <form onSubmit={loginUserSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto' >
                Login
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;