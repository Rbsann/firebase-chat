import React from 'react'
import styles from '../../utils/CommonStyles/FadeStyles'
import { StyleRoot } from 'radium'
import logo from './assets/logo.svg'

const AppLeftSection = () =>
  (
    <div className='login-tag login-page__left'>
      <div className='login-page__logo-text logo-text'>
        <div className='login-page__logo'>
          <img src={logo} alt='...' />
        </div>
        <h6 className='login-page__logo-lbl'>Careteam</h6>
      </div>
      <StyleRoot>
        <div className='login-page__desc' style={styles.fadeInLeft}>
          <h4 className='login-page__desc-title'>
            A saúde de
            <br /> seus pacientes
            <br /> em <span className='text-left-section'>tempo real</span>
          </h4>
          <p>
            {' '}
            Tudo a um clique de distância,
            <br /> quando e onde precisar.
          </p>
        </div>
      </StyleRoot>
    </div>
  )

export default AppLeftSection
