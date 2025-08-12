import './Header.css';

function Header() {
  return (
    <nav className="main-nav">
      <div className="logo">
        <img src="/logo.jpg" alt="Boston Global School" />
        <span>Boston Global School</span>
      </div>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#academics">Academics</a></li>
        <li><a href="#admissions">Admissions</a></li>
        <li><a href="#facilities">Facilities</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Header;
