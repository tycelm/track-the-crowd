const timeStamps = [
  {
    label: "Beginnings",
    // pic: TODO update with group photo
    desc: `
    February 12, 2025

    TrackTheCrowd was officially established!
    `,
  },
  {
    label: "Cardboard",
    pic: `${process.env.PUBLIC_URL}/backgrounds/cardboard.jpg`,
    desc: `
    March 11, 2025

    We purchased cardboard and began assembling our model of a TTC car window.

    Our demo will work as shown above. 
    
    We will use cardboard to recreate a TTC car wall. 
    We will carry and move a webcam to simulate train movement.
    An image recognition model will translate the webcam video feed into a crowd density percentage.
    `,
  },
  {
    label: "TTC Presentation",
    pic: `${process.env.PUBLIC_URL}/backgrounds/ttcpresentation.jpg`,
    desc: `
    March 13, 2025

    This morning, we met with the TTC Manager of New Technology & Innovation, Naina Dewan.

    She was kindly on board with supporting our group as our sponsor, providing informal feedback on our project as we work on it for the rest of the semester.
    `,
  },
  {
    label: "Webcam",
    pic: `${process.env.PUBLIC_URL}/backgrounds/camera.jpg`,
    desc: `
      March 17, 2025
      
      Paul provided us with a webcam, thanks Paul!

      We will be passing the video feed from this camera into an image recognition model that will identify the number of passengers visible in a single frame/cart.
    `,
  },
  {
    label: "Construction Teams",
    pic: `${process.env.PUBLIC_URL}/backgrounds/bars.jpeg`,
    desc: `
      March 19, 2025
      
      We've split off into two teams: the backend team, responsible for creating the image recognition model, and the frontend team, responsible for creating this website and the methods of communicating crowd data to customers.
      
      We've also been hard at work creating a cardboard model of a TTC car. We will be using this to simulate a TTC train environment for our image recognition model.

      Joshua's holding two metal poles, what could they be for? Stay tuned to find out!
    `,
  },
  {
    label: "Model Test 1",
    pic: `${process.env.PUBLIC_URL}/backgrounds/test1.png`,
    desc: `
      March 27, 2025
      
      We began testing the image recognition model on real cardboard.

      While this model was successful on the image of cardboard as shown here, it had a lot of trouble identifying cardboard in real life.

      There also seems to be an issue with the compatibility of our webcam and the library we used to capture camera frames.

      We will be tweaking the model and debugging the camera issue before our next lab time.
    `,
  },
  {
    label: "Animation",
    pic: `${process.env.PUBLIC_URL}/backgrounds/example.gif`,
    desc: `
      March 31, 2025
      
      The frontend animation component has been completed!

      The animation displays different colours and populations depending on the projected crowd density in each cart.

      Above is a sample animation in which the left cart has a high crowd density and the right cart has moderate crowd density.
    `,
  },
];

export default timeStamps;
