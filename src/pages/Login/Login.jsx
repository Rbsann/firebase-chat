import React, { useState, useEffect } from 'react'
import { Form, Button, Spinner } from 'react-bootstrap'
import styles from '../../utils/CommonStyles/FadeStyles'
import { StyleRoot } from 'radium'
import './Login.scss'
import AppLeftSection from '../../components/AppLeftSection/AppLeftSection'
import { useDispatch, useSelector } from 'react-redux'
import { preLogin } from '../../redux/actions'
import { useHistory } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGoogle} from '@fortawesome/free-brands-svg-icons'

const Login = () => {
  const iconGoogle = <FontAwesomeIcon icon={faGoogle} className='icon-user' />
  const history = useHistory()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const userData = useSelector(state => state.userData)
  const [isRequesting, setIsRequesting] = useState(false)
  const [error, setError] = useState(null)

  const handleUserLogin = () => {
    dispatch(preLogin(email))
    
  }

  useEffect(() => {
    console.log(userData, 'login')
    if(userData) {
      const {id} = userData
      history.push(`/chat/${id}`)
      // history.push('/calendar')
    }
  }, [userData, history])

  const handleChangeEmail = (email) => {
    setEmail(email)
  }

  return (
    <section id='login' className='login-page'>
      <AppLeftSection />
      <div className='login-page__right'>
          <StyleRoot>
            <h2 className='login-page__form-title' style={styles.fadeInUp}>
              Bem vindo(a)! Faça seu login com seu email.
            </h2>
          </StyleRoot>
          <div className='login-form'>
            <input
              className='login-input'
              value={email} 
              type='text' 
              onChange={(event) => handleChangeEmail(event.target.value)} 
              placeholder='Insira seu email' 
            />
            <button className='login-button' onClick={() => handleUserLogin()}>{iconGoogle} Login</button>
          </div>
      </div>
    </section>
  )
}

export default Login
