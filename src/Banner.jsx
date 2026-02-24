function Banner() {
    return (
        <div className="Banner-container">
            <div className="banner-img">
                <img src="https://images.unsplash.com/photo-1623479322729-28b25c16b011?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="suraj" />
            </div>
            <div className="Banner-text">
                <p>Hello! My name is <span style={{ color: "yellow", fontSize: "25px",fontWeight:"bold" }}>Suraj Vishwakarma</span>, and I am passionate about web development. I love creating clean, responsive, and user-friendly websites that not only look good but also provide a smooth experience for users. Over time, I have gained experience in technologies like HTML, CSS, JavaScript, and React, which help me build interactive and modern web applications.</p>
                <div className="button-container">
                    <button className="btn primary">Hire Me👋</button>
                    <button className="btn secondary">Resume 😍</button>
                </div>
            </div>

        </div>

    );
}
export default Banner;