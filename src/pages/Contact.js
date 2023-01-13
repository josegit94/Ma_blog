import { FaInstagramSquare, FaLinkedin, FaFacebookSquare, FaTwitterSquare} from 'react-icons/fa';
import classes from "./contact.module.css"

const Contact = () => {

  return (
    <div id='contact' className={classes.contact}>
      <h1>Contact Us</h1>
      <div className={classes.container}>
        <form className={classes.form}>
          <input type="text" placeholder='Enter Your Name' name='user_name' required />
          
          <input type="text" placeholder='Enter Your email' name='user_email' required />
          
          <textarea name="message" required placeholder='Enter Your Message' id="message" cols="30" rows="10"></textarea>
          
          <input type="submit" id='send' className={classes.btn} />
          
        </form>
      </div>

      <div className={classes.social}>
        <FaTwitterSquare color='#6c63ff' size='40px' style={{padding: '1%'}} 
        onClick={() => window.open('https://www.google.rw', '_blank')}/>

        <FaLinkedin color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>

        <FaFacebookSquare color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>

        <FaInstagramSquare color='#6c63ff' size='40px' style={{padding: '1%'}} onClick={() => window.open('https://www.google.rw', '_blank')}/>
        </div>
    </div>
  )
}

export default Contact