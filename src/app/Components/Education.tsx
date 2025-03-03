const EducationFlipBox = () => {
    return (
       
       
        <div className="container" id="skills">
        <h1 className="main-heading">EDUCATION DETAILS</h1>
        <div className="grid-container">
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Bachelor&apos;s <br />of Technology
                    </div>
                    <div className="flip-box-back">
                        <h2>Computer Science &amp; Engineering</h2>
                        <p>Adarsh College of Engineering | Chebrolu | 2020 - 2024</p>
                        <p>Grade: 7.4/10</p>
                    </div>
                </div>
            </div>
    
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Intermediate
                    </div>
                    <div className="flip-box-back">
                        <h2>Intermediate</h2>
                        <p>Navachitanya Junior College<br /> | MPC | Pithapuram | 2018 - 2020</p>
                        <p>Grade: 8.5/10</p>
                    </div>
                </div>
            </div>
    
            <div className="flip-container">
                <div className="flip-box">
                    <div className="flip-box-front">
                        Secondary School <br /> of Education
                    </div>
                    <div className="flip-box-back">
                        <h2>Secondary School of Education</h2>
                        <p>Z.P.P High School Gollaprolu | 2017 - 2018</p>
                        <p>Grade: 8.0/10</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    );
};

export default EducationFlipBox;