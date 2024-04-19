import me from '../../assets/me.jpg'
import './Hero.css'

export default function Hero() {
  return (
    <div className='hero-section' id='hero'>
      <img src={me} alt="" width={350} className='me'/>
      
         <h1>Im <span>Mahendar reddy</span> frontend developer based in Usa</h1>
        <p>Iam frontend developer in california,Usa wth 10 years experience worked in multiple
          companies like amazon facebook etc
        </p>
        <div className="hero-action">
        <div className="hero-connect">
        
          connect with me </div>
        <div className="hero-resume">my resume</div>
        </div>
    </div>



  )
}
