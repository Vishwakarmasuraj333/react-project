function Blogs() {

  const blogs = [
    {
      img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
      title: "How to Build a Website",
      desc: "Learn step by step how to create a modern responsive website."
    },
    {
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "React for Beginners",
      desc: "Start your journey with React and build amazing apps."
    },
    {
      img: "https://images.unsplash.com/photo-1508780709619-79562169bc64",
      title: "UI/UX Design Tips",
      desc: "Improve your design skills with these powerful tips."
    },
    {
      img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      title: "JavaScript Tricks",
      desc: "Cool JavaScript tricks every developer should know."
    }
  ];

  return (
    <section className="blogs">
      <h1>Latest Blogs</h1>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <img src={blog.img} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.desc}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;