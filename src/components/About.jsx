import "./assets/About.css";

export default function About() {
  return (
    <div className='about' id="about"> 
        <div className="adetails">
        <h1 className="ptitle">About Us</h1>
        <p className='apara'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum praesentium veniam cupiditate quam magnam. Perspiciatis vel, odio perferendis minima illum nihil, dicta possimus magnam est porro molestias. Assumenda ducimus quod numquam iste fuga illo voluptatum nam, aut magni cumque facilis!</p>
        <p className="apara">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquam obcaecati, beatae necessitatibus nam ducimus esse nobis quae maxime ipsa nostrum sit illo maiores qui soluta itaque voluptates architecto! Ad.</p>
        </div>

        <div className="avideo">
            <video className="avideo-video" typeof='video/mp4' autoPlay loop controls poster='https://www.yulu.bike/wp-content/uploads/2019/09/new-banner.png' src="https://www.yulu.bike/wp-content/uploads/2019/09/about-video.mp4">
            </video>
        </div>

    </div>

  )
}
