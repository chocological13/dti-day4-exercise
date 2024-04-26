import "../style.css";
import profile1 from "../../../assets/testimonial-1.png";
import profile2 from "../../../assets/testimonial-2.png";

const Testimonials: React.FC = () => {
  return (
    <div className="testi-container">
      <h3 className="testitle">Testimonials</h3>
      <div className="testimonials">
        <div className="testi-item">
          <p className="testi-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos aliquid quo iste atque temporibus repellendus earum illum! Corporis minima quia reprehenderit dignissimos ea ut doloribus est, ducimus itaque distinctio!"</p>
          <div className="testi-profile">
            <img src={profile1} alt="ayush" />
            <div className="testi-name">
              <p className="profile-name">Ayush Raj</p>
              <p className="profile-role">VP of Marketing @ Webflow</p>
            </div>
          </div>
        </div>
        <div className="testi-item">
          <p className="testi-text">"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni eos aliquid quo iste atque temporibus repellendus earum illum! Corporis minima quia reprehenderit dignissimos ea ut doloribus est, ducimus itaque distinctio!"</p>
          <div className="testi-profile">
            <img src={profile2} alt="alex" />
            <div className="testi-name">
              <p className="profile-name">Alex Cattoni</p>
              <p className="profile-role">Founder @ CopyPossy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
