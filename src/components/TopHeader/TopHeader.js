import './TopHeader.css';

function TopHeader() {
  return (
    <div className="top-header">
      <div className="top-header-content">
        <div className="contact-info">
          <span>
            <i className="fas fa-phone"></i> Admission Enquiry: +91 79809 79002
          </span>
          <span>
            <i className="fas fa-envelope"></i> info@bostonglobalschool.com
          </span>
          <span>
            <i className="fas fa-location-dot"></i> 82/2, T. N. Mukherjee Road, Makhla, Uttarpara, Hooghly - 712245
          </span>
        </div>
        <div className="social-links">
          <a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" title="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" title="Instagram"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
