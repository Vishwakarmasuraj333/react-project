function Projects() {

  const projects = [
    {
      img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Beach Website",
      desc: "Modern responsive travel website."
    },
    {
      img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
      title: "Mountain App",
      desc: "Adventure booking mobile app."
    },
    {
      img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
      title: "Forest Landing Page",
      desc: "Nature themed landing page."
    },
    {
      img: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      title: "City Portfolio",
      desc: "Personal portfolio website."
    },
    {
      img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e",
      title: "Nature Blog",
      desc: "Blog website with CMS."
    },
    {
      img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
      title: "Desert UI",
      desc: "Creative UI design project."
    },
    {
      img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Lake Dashboard",
      desc: "Admin dashboard design."
    },
    {
      img: "https://tse2.mm.bing.net/th/id/OIP.Y2n_fnDmLj64ueX3mosyUwHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
      title: "Sunset Ecommerce",
      desc: "Online shopping website."
    }
  ];

  return (
    <section className="projects">
      <h1>My Projects</h1>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.img} alt={project.title} />
            <div className="card-content">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <button>View Project</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;