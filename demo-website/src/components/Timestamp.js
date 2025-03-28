const timeStamps = [
  {
    label: "Beginnings",
    pic: `${process.env.PUBLIC_URL}/backgrounds/group.jpg`,
    desc: 
    `
    February 12, 2025

    TrackTheCrowd was officially established!

    Pictured here from left to right is Noelle, Joshua and Lina. Our fourth member, not pictured here, is Max.

    Taken on our newly obtained webcam. Thanks Paul!
    `,
  },
  { label: "TTC Presentation", 
    pic: `${process.env.PUBLIC_URL}/backgrounds/ttcpresentation.jpg`,
    desc: 
    `
    March 13, 2025

    This morning, we met with the TTC Manager of New Technology & Innovation, Naina Dewan.

    She was kindly on board with supporting our group as our sponsor, providing informal feedback on our project as we work on it for the rest of the semester.

    Check out our presentation, complete with drawn mockups of our design:
    https://www.canva.com/design/DAGheX3qJbw/0CwghlaoyjnsDGj5C_BGcQ/edit?utm_content=DAGheX3qJbw&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton
    `,
  },
  { label: "Construction", 
    pic: `${process.env.PUBLIC_URL}/backgrounds/bars.jpeg`,
    desc: 
    `
      March 19, 2025
      
      We've split off into two teams: the backend team, responsible for creating the image recognition model, and the frontend team, responsible for creating this website and the methods of communicating crowd data to customers.
      
      We've also been hard at work creating a cardboard model of a TTC car. We will be using this to simulate a TTC train environment for our image recognition model.

      Joshua's holding two metal poles, what could they be for? Stay tuned to find out!
    `,
  },  
  { label: "Model Test 1", 
    pic: `${process.env.PUBLIC_URL}/backgrounds/test1.png`,
    desc: 
    `
      March 27, 2025
      
      We began testing the image recognition model on real cardboard.

      While this model was successful on the image of cardboard as shown here, it had a lot of trouble identifying cardboard in real life.

      There also seems to be an issue with the compatibility of our webcam and the library we used to capture camera frames.

      We will be tweaking the model and debugging the camera issue before our next lab time.
    `,
  },  
];

export default timeStamps;
