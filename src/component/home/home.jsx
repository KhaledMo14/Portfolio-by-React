import React from "react";
import Button from "react-bootstrap/Button";
import "./home.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

import {FaCubes} from 'react-icons/fa'


function Home() {


  return (
    <header>
      <div className="bg-img">
        <div className="layer"></div>
      </div>

      <div className="home-text text-center">
        <div className="head">
          <h2>Khaled Mohamed</h2>
        </div>
        <Button
          className="mt-4"
          href="../../assets/Khaled Mohamed.cv.pdf"
          download
          variant="primary"
        >
          Download C.V
        </Button>
      </div>

  
   
   <div id="about" className="About">
      <div className="container bg-white m-auto shadow p-3 mb-5">
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5 col-sm-5">
              <img className="w-100 rounded my-3" src={require('../../assets/back.jpg')} />
          </div>

          <div className="col-md-7 col-sm-7">
            <div className="profile-item fw-bold mx-5 my-4">
              <p>
              <span className="font-weight-bold">Name:</span><span>Khaled Mohamed</span>
            </p>
            <p>
              <span className="font-weight-bold">Profile:</span><span> Front-End developer</span>
            </p>
            <p>
              <span className="font-weight-bold">Email:</span><span> KhaledMohamed0140</span>
            </p>
            <p>
              <span className="font-weight-bold">Phone:</span><span> 01113092167</span>
            </p>

           
            </div>
          </div>



          <div className="col-md-12">
          <div className="progress-item">

            <h5 className="pt-4 pb-3">skills</h5>

            <div className="d-flex">
            <p>HTMl</p>
            <p className="ms-auto">100%</p>
          </div>
          <ProgressBar now={100} />


            <div className="d-flex pt-3">
            <p>CSS3</p>
            <p className="ms-auto">95%</p>
          </div>
          <ProgressBar now={95} />

          <div className="d-flex pt-3">
            <p>JavaScript</p>
            <p className="ms-auto">90%</p>
          </div>
          <ProgressBar now={90} />


          <div className="d-flex pt-3">
            <p>React</p>
            <p className="ms-auto">75%</p>
          </div>
          <ProgressBar now={75} />
            
          <div className="d-flex pt-3">
            <p>Angular</p>
            <p className="ms-auto">80%</p>
          </div>
          <ProgressBar now={80} />

          </div>

            
          </div>
          
        </div>
        </div>
      
        
        <div className="about-me col-md-6">
          <h2 className="pt-4">About me</h2> <div className="blue"></div>

          <p className="pt-3 pb-3">I am a junior Front-End Developer with about 1 year of experience in Web development. During my career, I’ve acquired not only UI development skills.</p>
         
          <p className="pt-3 pb-3"> but also implemented complex logic and functionality in JavaScript.I believe it’s crucial when you work on front-end, as it is literally the first thing the user sees,.</p>
          
          <p className="pt-3 pb-3">so it should be flawless. When speaking about my skills, I am goal-oriented team player, but I'm happy to work independently too.</p>
       
        </div>
      </div>
    </div>
    </div>

<section>
  <div className="technologies mt-5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 order-sm-last order-md-first order-lg-first">

        <img className="w-100  my-3" src={require('../../assets/19362653.jpg')} />

        </div>

        <div className="col-md-6 mt-5">
          <div className="tech-text d-flex align-items-center">
          <FaCubes className="col-md-3"/>
          <div className="col-md-9"><h2>Technologies</h2></div>
          </div>
          <h4 className=" mt-5">Here are some programming langauges, frameworks, libraries, concepts and databases that I can work with:</h4>
          <div className="tech-list d-flex flex-wrap mt-4">
            <a>HTML5</a>
            <a>CSS3</a>
            <a>SASS</a>
            <a>Bootstrap</a>
            <a>JavaScript</a>
            <a>JQuery</a>
            <a>ES6</a>
            <a>React</a>
            <a>Redux</a>
            <a>State Management</a>
            <a>React Native</a>
            <a>Angular</a>
            <a>NgRx</a>
            <a>Flutter</a>
            <a>Node.js</a>
            <a>Unit Testing</a>
            <a>Webpack</a>
            <a>Sql</a>
            <a>Database</a>
            <a>C++</a>
            <a>Git</a>
            <a>GitHub</a>
            
           
            
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

    </header>


   
  );
}

export default Home;
