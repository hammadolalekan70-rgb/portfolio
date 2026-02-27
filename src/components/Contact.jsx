import { FaPhoneAlt, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>

      <div className="contact-card">
        
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon phone" />
          <div>
            <h4>Phone</h4>
            <p>09079946343</p>
          </div>
        </div>

        <div className="contact-item">
          <FaWhatsapp className="contact-icon whatsapp" />
          <div>
            <h4>WhatsApp</h4>
            <a
              href="https://wa.me/2348179598253"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="contact-item">
          <FaEnvelope className="contact-icon email" />
          <div>
            <h4>Email</h4>
            <p>hammadolalekan70@gmail.com</p>
          </div>
        </div>

      </div>
    </section>
  );
}


export default Contact