import "./assets/Footer.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <div className='footer'>
<div className="footercon">
    <div className="footersec cdetail">
        <h1 className="ftitle">E-Savari</h1>
        <p className="fabout">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium odio odit dolor error natus incidunt, modi ipsum, provident quasi magnam eius illum aliquam reprehenderit aperiam consequatur porro et nesciunt quam?</p>
    </div>
    <div className="footersec fcontact">
        <h1 className="ftitle">Contact us</h1>
        <div className="fadd fcs">
            <LocationOnIcon className='fcsl'/>
       <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae, nemo.</p>
       </div>
       <div className="fmobile fcs">
        <CallIcon className='fcsl'/>
        <p>+91 9594160815</p>
       </div>
       <div className="femail fcs">
        <EmailIcon className='fcsl'/>
        <p>esavari01@gmail.com</p>
       </div>
    </div>
    <div className="footersec fconnect">
        <div className="sec1">
            <h1  className="ftitle">Download App</h1>
            <div className="appimg">
                <img src="https://www.yulu.bike/wp-content/themes/redbaton/redbaton/images/Home/Footer/g-play.svg" alt="" />
                <img src="https://www.yulu.bike/wp-content/themes/redbaton/redbaton/images/Home/Footer/app-store.svg" alt="" />
            </div>
        </div>
        <div className="sec2">
        <h1  className="ftitle">Get in touch</h1>
                <div className="flinklogo">
                    <WhatsAppIcon className='fllogo'/>
                    <InstagramIcon className='fllogo'/>
                    <FacebookIcon className='fllogo'/>
                    <LinkedInIcon className='fllogo'/>
                </div>
        </div>
   
    </div>
    <div className="footersec fnewsletter">
    <h1 className="ftitle">Newsletter</h1>
                <input type="text" placeholder='Your email id here' required/>
                <button>Subscribe</button>
    </div>
</div>
<div className="copyright">
        <p>Copyright © 2023 E-savari. All Rights Reserved</p> 

        </div>
    </div>
  )
}

export default Footer