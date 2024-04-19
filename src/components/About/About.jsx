import me from '../../assets/me.jpg'
import './About.css'
const About = () => {
  return (
<div className="about" id='about'>
    <div className="about-heading">
        <h1>About me</h1>
    </div>
    <div className="about-section">
        <div className="about-left">
            <img src={me} alt=""  width={400}/>
        </div>
        <div className="about-right">
            <div className="about-para">
            <p> Iam frontend developer in california,Usa wth 10 years experience worked <br />in multiple
          companies like amazon facebook etc</p>

            <p>my passion for frontend development is not enly restricted in my extensive experience</p>
            </div>
            <div className="about-skills">
            <div className="about-skill"><p>Html and css <span> 50%</span> </p> <hr style={{width:'50%'}} />   </div>
            <div className="about-skill"><p>react js  <span> 70%</span>  </p> <hr style={{width:"70%"}} /></div>
            <div className="about-skill"><p>javascript  <span> 60%</span> </p> <hr style={{width:"60%"}} /> </div>
            <div className="about-skill"><p>next js  <span> 50%</span> </p> <hr style={{width:"50%"}} /> </div>
         
        </div>


        </div>
      
        

</div>
</div>
       
    

    
    
      




 







  )
}

export default About