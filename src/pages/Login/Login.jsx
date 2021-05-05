import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import styles from '../../utils/CommonStyles/FadeStyles'
import { StyleRoot } from 'radium'
import './Login.scss'
import AppLeftSection from '../../components/AppLeftSection/AppLeftSection'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/actions'

const Login = (props) => {
  const dispatch = useDispatch()
  const [inputType, setInputType] = useState('password')
  const [isRequesting, setIsRequesting] = useState(false)
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const submitEnabled = !userName && !password



  const handleUserLogin = event => {
    event.preventDefault()

    dispatch(login(userName, password))
    
  }

  const handleToShowPassword = () => {
    inputType === 'password'
      ? setInputType('text')
      : setInputType('password')
  }


  return (
    <section id='login' className='login-page'>
      <AppLeftSection />
      <div className='login-page__right'>
        <Form onSubmit={(event) => handleUserLogin(event)} className='login-page__form'>
          <StyleRoot>
            <h2 className='login-page__form-title' style={styles.fadeInUp}>
              Bem vindo(a)!
            </h2>
          </StyleRoot>
          <Form.Group
            controlId='username'
            className='form-group--with-left-icon'
          >
            <div className='form-group__inner'>
              <span className='form-group__left-icon'>
                <i className='icon-sami-email' />
              </span>
              <Form.Control
                value={userName}
                name='userName'
                type='email'
                placeholder='Digite seu email'
                onChange={(event) => setUserName(event.target.value)}
                className='form-control form-control-lg'
                required
              />
            </div>
          </Form.Group>
          <Form.Group
            controlId='password'
            className='form-group--with-left-right-icon'
          >
            <div className='form-group__inner'>
              <span className='form-group__left-icon'>
                <i className='icon-sami-lock' />
              </span>
              <Form.Control
                value={password}
                name='password'
                onChange={(event) => setPassword(event.target.value)}
                className='form-control form-control-lg form-control--password'
                type={inputType}
                placeholder='Digite sua senha'
                required
              />
              <span
                className='form-group__right-icon c-pointer'
                onClick={() => handleToShowPassword()}
              >
                <i className='icon-sami-eye' />
              </span>
            </div>
          </Form.Group>
          {error && (
            <div style={{ textAlign: 'center' }}>
              <span style={{ color: 'red', fontSize: '14px' }}>{error}</span>
            </div>
          )}
          <div>
            <button
              className='btn-forgot-password'
              type='button'
            >
              Esqueceu sua senha?
            </button>
          </div>

          <div className='action-box'>
            <Button
              variant='primary'
              className='btn-lg'
              type='submit'
              disabled={submitEnabled || isRequesting}
              style={{ background: '#000050' }}
            >
              {isRequesting ? (
                <Spinner animation='border' variant='light' />
              ) : (
                'Entrar'
              )}
            </Button>
          </div>
        </Form>
      </div>
    </section>
  )
}

export default Login
