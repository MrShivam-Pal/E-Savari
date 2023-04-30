import './assets/Contact.css'

export default function Contact(){
    return(
          <>
            <section className="contact" id="contact">

            <h2 class="heading">Contact<span> Me!</span></h2>
            <form action="#">
                <div class="input-box">
                    <input type="text" placeholder="Full Name" />
                    <input type="text" placeholder="Email Address" />
                </div>

                <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
                <input type="submit" value="Send Message" id="btn" />
            </form>
    
            </section>

          </>
    );
}