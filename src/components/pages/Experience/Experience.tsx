
const Experience = () => {
  return (
    <div className="page">
      <div className='box'>
        <h2>CAT</h2>
        <p>
          CAT (Current Analysis Tool) was the primary focus of my work term.
          CAT is a system designed to analyze the electrical current in Robot Arms' axes to detect anomalies so that preventive maintance could be performed in off-hours. 
        </p>
        <p>
          I originally developed a simple prototype to detect anomalies by taking the electrical current's average period (the current was roughly a periodic function), but we later realized that a more dynamic approach was required to account for some exceptions in periodicy (e.g. sudden halting for lunch breaks).
          I settled on the <b>LSTM Autoencoder</b> architecture, as it was well-suited to both time-series data and anomaly detection.
        </p>

        <h3>How it works</h3>
        <p>
          Our Autoencoder was trained to accept time-series sequences as input (usually 30 timesteps spaced by 2ms), compress this sequence down into a vector representation, and then attempt a reconstruction of the original sequence using this vector.
          Why would we want to reconstruct sequences?
          The answer is that if we trained our model to only reconstruct normal, expected sequences, then we could classify any failed reconstructions as having anomalous, investigation-worthy input data.
          Essentially: input the data → reconstruct the data → flag substantially failed reconstructions as "anomalies" to be investigated.
        </p>
        <p>
          I want to minimize the amount of time I spend working on this website because it's the christmas break, so I'll just input some diagrams I made that should help explain my work.
        </p>
        {/* <hr></hr> */}
        </div>
        <br></br>

        <div className='box'>
        <h2>HECTOR</h2>
        <p>
          HECTOR (Heavy Equipment Control Tracking Operation and Reporting) is the traffic control system used to orchestrate the AGVs (Automated Guided Vehicles) on the factory floor.
          The goal of my TBP (Toyota Business Practice, a problem solving methodology) was to tackle an issue related to some unresponsive AGVs.  
          I became familiar with the HECTOR codebase and read through the AGV manuals, but due to some contractual complications with our AGV vendor, I pivoted to preventitive/damage-mitigative solutions. 
          My final contributions were an AGV disconnect notification system and a retry-start-command system. 
        </p>
        {/* <hr></hr> */}
        </div>

        <br></br>

        <div className='box'>
          <h2>Innovation Showcase</h2>
          <p>
            TMMC holds a yearly event to share the company's innovations, such as new devices, improvements to systems, and software.
            I contributed to the showcase by creating a Lego robotic arm, and an anomaly-detection program akin to the one used on the actual robot arms. 
            I also assisted in the planning of the showcase by coordinating with participants, organizing graphics, sending out invites, and handing out rewards. 
          </p>
        </div>

        <br></br>
    </div>
  )
}

export default Experience