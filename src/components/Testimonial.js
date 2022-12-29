import quote from './../img/quotes.svg'
import avatar from './../img/avatar.svg'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <h1>Our Clients Story</h1>
        <h4>We Care About Our Customers Experience</h4>
        <div className='stories'>
            <div className='story'>
              <img className='quote' src={quote} alt=""></img>
              <p>All people should know that collections really inspired for everyone who loves fashion.</p>
              <div className='avatar'>
                  <img src={avatar} alt=""></img>
                  <h4>Daniella Rizeyla</h4>
              </div>
            </div>

            <div className='story'>
              <img className='quote' src={quote} alt=""></img>
              <p>All people should know that collections really inspired for everyone who loves fashion.</p>
              <div className='avatar'>
                  <img src={avatar} alt=""></img>
                  <h4>Daniella Rizeyla</h4>
              </div>
            </div>

            <div className='story'>
              <img className='quote' src={quote} alt=""></img>
              <p>All people should know that collections really inspired for everyone who loves fashion.</p>
              <div className='avatar'>
                  <img src={avatar} alt=""></img>
                  <h4>Mba Rizeyla</h4>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial