import Multi from '../../Multi/Multi'
import { Link } from 'react-router-dom';
import Entrance from './assets/Entrance.jpg'
import Devil from './assets/Devil.png'

const Home = () => {

  const goals = [
    { title: "Loss + Error Familiarity", 
      content: 
      `The most fundamental and rudimentary aspect of anomaly detection is the error between the model's reconstruction and the input data. 
      Through extensive genchi genbutsu, I was able to derive effective threshold systems to determine which levels of error were worth investigating. 
      I began with simple static error thresholds, then added rolling averages, and finally discovered a brilliant mechanism of determining the theshold for the rolling average: taking the single maximum sequence loss in the training data.
      After all this testing and development, I can confidently say I am familiar with the loss and error in the model.
      `
    },

    { title: "LSTMAE Model Familiarity", 
      content:
      `While I knew that my model was capable of achieving its task, I wanted to gain true insight on how exactly it achieved its task.
      I began reading blogs and wikis, watching youtube videos, and trying to trace what happened to the data at each step of the process.
      I eventually gained a solid understanding of the model from input to output, enabling me to make effective changes.
      In conclusion, this goal was accomplished.`
    },

    { title: "LSTMAE Model Integration",
      content:
      `I created a functional realtime ML program that integrated the production Redis stream.
      This basically means that anomalies in the robot arm's electrical current would be detected immediatly after they occured.
      However, I only had around a week to complete the program, so it was not fit to run on production servers by the time my term was over.
      As much, I consider this goal only partially completed.
      `
    }
  ]

  return (
    <div className="page">

        <div className='box'>
          <h3>Introduction</h3>
          <p>
            I had the pleasure of working as an ML + Systems Engineer at Toyota for the Fall of 2024. 
            On this website I will recount my experience, reflect on my goals, and review the position in what will culminate as my Work Term Report.
          </p>
          <p>
            On this page I will fulfill the basic elements of a Work Term Report as listed in the guide, such as my goals, description of the job, and conclusions.
            On the <Link to="/WTR-F24/experience">experience</Link> page I will recount the specific tasks I undertook and the problems I overcame, and on the <Link to="/WTR-F24/side-quests">side quests</Link> page I will talk about the other interesting things I learned during my time at this position.
          </p>
        </div>
        <br></br>

        <div className='box'>
        <h3>Information about the Employer</h3>
        <div className='text-and-image'>
          <div className='texthalf'>
            <p>
              I was employed by Toyota Motor Manufacturing Canada (TMMC) working under the Information Systems (IS) team, specifically, the CAT (Current Analysis Tool) team. 
              A lot of acronyms, I know.
              The CAT team is responsible for projects related to the monitoring, processing, and alerts for the Robot Arms in the factory.
            </p>
            <p>
              My main task was developing and integrating an ML system to detect anomalies in the electrical current of robot arms, but I also did some work relating to AGVs (Automated Guided Vehicles) and a company event called the Innovation Showcase.
              I will leave the specifics to <Link to="/WTR-F24/experience">experience</Link>. 
            </p>
          </div>
          <img className='imagehalf' src={Entrance}></img>
        </div>

        
        </div>

        <br></br>

        <div className='box'>
        <h3>Goals</h3>
        <p>
          By the end of my first week, my overall tasks were clearly outlined. However, I was unsure how much I would be able to complete in only 4 months.
          The following goals were ranked in order of likeliness of completion.
        </p>
        <Multi items={goals}/>
        </div>

        <br></br>

        <div className='box'>
          <h3>Job Description/Conclusions</h3>

          <div className='text-and-image'>
            <div className='texthalf'>
              <p>
                Overall, this job was amazing. 
                My manager and employer were great and always gave me the assistance I needed, and my coworkers were competent and helpful.
              </p>

              <p>
                This job definitely offered me a lot of freedom. 
                I was essentially given free rein to solve a real world problem with machine learning, which was double-edged in that the freedom came at the cost of responsibility. 
                If something went wrong with the ML model, the blame would lie squarely on my shoulders, which was a bit scary, but overall gave me a sense of independence and ownership that I valued more than immunity from blame.
              </p>

              <p>
                The teams at TMMC often intermingle, which can sometimes cause projects to slow down.
                Something would remain undecided because the IS Manager wanted a meeting with the Business Strategist who wanted a second word from an Engineer who was OOO. 
                A coworker jokingly stated that TMMC stood for "Too Many Meetings Company". 
                These practices are of course standard at bigger companies to keep everyone on the same page, so if you expect the sort of hyper-productivity found at startups, don't.
              </p>
            </div>
            <img className='imagehalf-devil' src={Devil}></img>
          </div>

        </div>

        <br></br>

        <div className='box'>
          <h3>Acknowledgements</h3>
          <p>Big thank you to Graham, Nick, Katie, Ben, Meredith, Sachin, Sparsh, and Charlie.</p>
        </div>
        <br></br>
 
    </div>
  )
}

export default Home
