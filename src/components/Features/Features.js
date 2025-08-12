import './Features.css';

function Features() {
  const features = [
    {
      title: "Academic Excellence",
      description: "Committed to highest standards of education",
      icon: "🎓"
    },
    {
      title: "Modern Facilities",
      description: "State-of-the-art infrastructure",
      icon: "🏫"
    },
    {
      title: "Skilled Faculty",
      description: "Experienced and dedicated teachers",
      icon: "👨‍🏫"
    }
  ];

  return (
    <section className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <div className="feature-icon">{feature.icon}</div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
