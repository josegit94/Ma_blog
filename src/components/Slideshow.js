import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import Product1 from "../img/1673963535811ContactSheet-002.jpg"
import Product2 from "../img/1673967729929DSC_3065.JPG"
import Product3 from "../img/1673968157715DSC_2872.JPG"



const Slideshow = () => {
  const images = [
   Product1,
   Product2,
   Product3,
  ];

  return <Slide>
    <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    
                </div>
            </div>
  </Slide>;
};

export default Slideshow;
