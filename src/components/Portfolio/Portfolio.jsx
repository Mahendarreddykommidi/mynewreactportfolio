import image1 from '../../assets/portfolio-1.png'
import image2 from '../../assets/portfolio-2.png'
import image3 from '../../assets/portfolio-3.png'
import image4 from '../../assets/portfolio-4.png'
import image5 from '../../assets/portfolio-5.png'
import image6 from '../../assets/portfolio-6.png'


import './Portfolio.css'
const Portfolio = () => {
  return (
    <>     
    <div className="portfolio" id='portfolio'>
        <div className="portfolio-title">
            <h1>My portfolio</h1>
        </div>
    <div>   
        </div>

    <div className="portfolio-section">
            <div className="portfolio-images">
                <div className="portfolioimg">
                <img src={image1} alt="" />
              

                </div>
                <div className="portfolioimg">
                <img src={image2} alt="" />

                </div>
                <div className="portfolioimg">
                <img src={image3} alt="" />

                </div>
                <div className="portfolioimg">
                <img src={image4} alt="" />

                </div>
                <div className="portfolioimg">
                <img src={image5} alt="" />

                </div>
          
                <div className="portfolioimg">
                <img src={image6} alt="" />

                </div>
          
          
               
              
            </div>
            </div>

</div>




    </>
  )
}

export default Portfolio