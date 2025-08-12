import './NewsTicker.css';

function NewsTicker() {
  const announcements = [
    "Admissions Open for 2024-25",
    "National Science Olympiad Registration Started",
    "Sports Day Event on December 15th",
    "Parent-Teacher Meeting this Weekend"
  ];

  return (
    <div className="news-ticker">
      <span className="ticker-label">ANNOUNCEMENTS:</span>
      <div className="ticker-content">
        {announcements.map((item, index) => (
          <span key={index} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

export default NewsTicker;
