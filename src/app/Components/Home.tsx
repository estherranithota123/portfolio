const ProfileSection = () => {
    return (
        <div className="profile-container" id="about">
        <div className="profile-content">
            {/* <div className="profile-image-container1">
                <img 
                    src="../../rani.jpg" 
                    alt="Profile" 
                    className="profile-image1" 
                />
            </div> */}
            <div className="profile-text">
                <h1>Hey I&apos;m <span className="highlight">EstherRani Thota</span></h1>
                <h2>I&apos;m a <span className="highlight">Developer</span></h2>
                <p>
                    Passionate and skilled fresher with a strong foundation in modern technologies and a quick learning ability. 
                    Eager to contribute to a dynamic team and grow professionally.
                </p>
                <div className="social-icons">
                    <i>
                        <a href="mailto:estherranithota123@gmail.com ">
                        <img 
                            src="https://cdn2.iconfinder.com/data/icons/New-Social-Media-Icon-Set-V11/512/email.png" 
                            alt="Email Icon" 
                        />
                        </a>
                    </i>
                    <i>
                        <a href="https://www.linkedin.com/in/estherrani-thota-1a60a2349">
                        <img 
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl74JHLTYuF66t7yukctKxI_jBwEgzWilnHQ&s" 
                            alt="LinkedIn Icon" 
                        />
                        </a>
                    </i>
                    <i>
                        <a href="https://github.com/estherranithota6">
                        <img 
                            src="https://icones.pro/wp-content/uploads/2021/06/symbole-github-orange.png" 
                            alt="GitHub Icon" 
                        />
                        </a>
                    </i>
                </div>
                <button className="download-cv">Download CV</button>
            </div>
        </div>
    </div>
    
    );
};

export default ProfileSection;