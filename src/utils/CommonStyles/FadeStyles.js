import { fadeInLeft, fadeInUp } from 'react-animations'
import Radium from 'radium'

const styles = {
  fadeInLeft: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInLeft, 'fadeInLeft')
  },
  fadeInUp: {
    animation: 'x 1.5s',
    animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
  }
}

export default styles
