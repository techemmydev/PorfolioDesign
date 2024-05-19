import "./About.css";
import theme_pattern from "/imageFolder/theme_pattern.svg";
import profile_img from "/imageFolder/finalimage.jfif";
import Typewriter from "typewriter-effect";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={profile_img} alt="" style={{ borderRadius: "50%" }} />
        </div>
        <div className="about-right">
          <div className="about-para">
            <Typewriter
              options={{
                strings: [
                  " Experienced Frontend Developer Passionate about Driving Innovation and Solving Complex  Problems. With a proven track record in software development, I bring a unique blend of technical  expertise, creativity, and problem-solving skills to every project. My journey in software   development has been marked by a commitment to excellence, a drive for innovation, and a passion  for making a meaningful impact through technology.  ",
                ],

                autoStart: true,
                loop: true,
              }}
            />
            {/* <p>
              I am an experienced Frontend Developer with over a decode of
              professional expertise in the field. Throughout my career, I have
              the priviledge of collaberating with prestigious organisations,
              contirbuting to their success and growth.
            </p> */}

            <p>
              My passion for frontend development is not only reflected in my
              extensive experience but also in the enthusiam and dedication I
              bring to each project Let's connect and explore opportunities to
              collaborate on impactful projects!{" "}
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p> <hr style={{ width: "100%" }} />
            </div>
            <div className="about-skill">
              <p>JavaScript</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>React Js</p> <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Redux Toolkit</p> <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>2+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>7+</h1>
          <p>PROJECT COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>15+</h1>
          <p>HAPPY CLIENT</p>
        </div>
      </div>
    </div>
  );
};

export default About;
