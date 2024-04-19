import signin from '../../assets/undraw_Sign_in_re_o58h.png'
import './Contact.css'

const Contact = () => {
  return (





    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Contact me</h1>
        </div>
        <div className="contact-section">
            <div className="contact-left-section">
                <img src={signin}alt="" width={400} height={500} style={{borderRadius:"20px"}}/>
                </div>
                <div className="contact-right-section">
                <form action="">
                <label htmlFor="">email</label>
                <input type="text" name='email'  placeholder='enter your email here'/>
                <label htmlFor="">password</label>
                <input type="passsword" name='password' placeholder='enter your password' />
                <textarea name="" id="" cols="10" placeholder='enter your msg here'></textarea>
                <button type="submit" className='btn_submit'>submit here</button>
            </form>

                </div>
            </div>
        </div>
    
       
        
    



  )
}

export default Contact