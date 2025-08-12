import './NewsEvents.css';

function NewsEvents() {
  const newsItems = [
    {
      title: "Annual Science Exhibition 2023",
      date: "Dec 15, 2023",
      description: "Students showcase their innovative science projects",
      image: "https://images.unsplash.com/photo-1564982648652-35cb67b76b4e?auto=format&fit=crop&q=80"
    },
    {
      title: "Sports Championship Winners",
      date: "Dec 10, 2023",
      description: "Our school teams win regional championships",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
    },
    {
      title: "Cultural Festival 2023",
      date: "Dec 5, 2023",
      description: "Annual cultural celebration showcasing talent",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="news-events">
      <h2>Latest News & Events</h2>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="#" className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewsEvents;
