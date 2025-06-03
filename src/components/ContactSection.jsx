import LogoInstagram from "./LogoInstagram.jsx";
import ImageDirection from "./ImageDirection.jsx";
import ImageEmail from "./ImageEmail.jsx";

const ContactSection = () => {
  return (
    <div className="contact">
      <div className="contact_content">
        <div className="logos">
          <a href="https://www.instagram.com/santuhorisada/" target="_blank">
            <LogoInstagram size={50} contacto={true} />
          </a>
          <a href="https://maps.app.goo.gl/AhYJxdLQMR4zB7vF9" target="_blank">
            <ImageDirection size={50} />
          </a>
          <a href="mailto:santuhorisada@hotmail.com">
            <ImageEmail size={50} />
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
