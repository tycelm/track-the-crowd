const timeStamps = [
  {
    label: "Beginnings",
    pic: `${process.env.PUBLIC_URL}/backgrounds/group.png`,
    desc: `
    February 12, 2025

The TrackTheCrowd project has officially begun!

Pictured here from left to right is Lina, Max, Joshua, and Noelle!
    `,
  },
  {
    label: "Cardboard",
    pic: `${process.env.PUBLIC_URL}/backgrounds/cardboard.jpg`,
    desc: `
    March 11, 2025

We purchased cardboard and planning our model of a TTC car window.

Our plan for the demo: 
We will use cardboard to recreate a TTC car wall. 
We will carry and move a webcam to simulate train movement.
We will implement a logic to determine when a train window is passing by.
An image recognition model will translate the webcam video feed into a crowd density percentage.
    `,
  },
  {
    label: "TTC Presentation",
    pic: `${process.env.PUBLIC_URL}/backgrounds/ttcpresentation.jpg`,
    desc: `
    March 13, 2025

This morning, we met with the TTC's Manager of New Technology & Innovation, Naina Dewan. She was very enthusiastic about our project and was delighted to be on board with supporting our group as our sponsor.
    `,
  },
  {
    label: "Webcam",
    pic: `${process.env.PUBLIC_URL}/backgrounds/camera.jpg`,
    desc: `
    March 17, 2025
      
Paul provided us with a camera for the project, thanks Paul! This will be used to capture the video feed for our image recognition model that will identify the number of passengers visible in a single frame/cart.
    `,
  },
  {
    label: "Divide & Conquer",
    pic: `${process.env.PUBLIC_URL}/backgrounds/bars.jpeg`,
    desc: `
    March 19, 2025
      
We've split off into two teams: the backend team, responsible for creating the image recognition model, and the frontend team, responsible for creating this website and the methods of communicating crowd data to customers.
      
We've also been hard at work creating the cardboard model of the TTC carts for our future demo.

Joshua's holding two metal poles, what could they be for? Stay tuned to find out!
    `,
  },
  {
    label: "Model Test 1",
    pic: `${process.env.PUBLIC_URL}/backgrounds/test1.png`,
    desc: `
      March 27, 2025
      
We began testing whether our first iteration of the program is able to detect when we're looking at a wall to help differentiate carts.While this model was successful on the image of the cardboard as shown here, it had trouble identifying the obstruction in real life.

There also seems to be an issue with the compatibility of our webcam, which should be dealt with relatively easily next week.

We will be revamping the model and debugging the camera issue before our next lab time.
    `,
  },
  {
    label: "Animation",
    pic: `${process.env.PUBLIC_URL}/backgrounds/example.gif`,
    desc: `
      March 31, 2025
      
The frontend animation component has been completed! The animation displays different colours and populations depending on the projected crowd density in each cart.

Above is a sample animation in which the left cart has a high crowd density and the right cart has moderate crowd density.
    `,
  },
  {
    label: "Model Test 2",
    pic: `${process.env.PUBLIC_URL}/backgrounds/window1.jpg`,
    desc: `
      April 1, 2025
      
We have completed the cardboard frame of a test TTC train car window! 

To better test our model with multiple train cars, we plan to make and connect a second train car frame. To better reflect a real-life environment, we will paint the frames.

We also conducted a second test of our image recognition model. This was a resounding success, with the model being able to correctly identify when a train car window is in frame and accurately count the number of passengers in our model train car.

Our next model test will incorporate the frontend communication channels as well as a second train car. This test will be recorded and compiled into our demo video. Stay tuned!
    `,
  },
];

export default timeStamps;
