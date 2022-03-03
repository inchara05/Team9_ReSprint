import './App.css';

function startClick() {
  alert("Tap to start works");
}

function App() {
  return (
    <>
     <ol><p>
       A game Designed for toddlers.
       Here is the instruction to play the Game

       Play the magic balloon games for toddlers and little kids as well as adults! Popping balloons and enjoy the joyful explosions. 
       Babies can pop the balloons on the screen, collect points and enjoy vivid colors and exciting animations!
       For children with visual impairments such you can change the colour of the balloons in order to make them easier to pop. 
       All game modes are suitable for young kids as an educational game. </p>

      
      <h2> FEATURES:</h2>

       <p>Easy to play - just touch the balloon on the screen and it will blow up.</p>
        <li>Educational and entertaining</li>
        <li> Suitable for babies, adults, and toddlers</li>
        <li> Balloons of different colors.</li>
      
        <li> Learning the Numbers turning into fun! Mini Educational games for boys and girls with balloon popping games for your children!</li>
        <li>Little Children will enjoy this colorful balloon popping with different colors and Easy to play - just touch the balloon on the screen and it will blow up.</li>
        <li> Educational and entertaining</li>
        
       <p>Children will learn how to stay focused and learn different colors, numbers and shapes with the help of magic balloons. All family members will be happy with this app! Once the kids start popping balloons, they’ll fall in love with how easy and fun this pastime activity is!
       Most of children is amused by seeing balloons floating into the sky. 
       Children have a fun even though they are surprising when the balloon popping sound is heard.
       Balloon Pop is a good game to play for kids as a game of popping various colors of balloons floating.
       The cheerful sound of various colors of balloons popping stimulate the curiosity of children. 
       The time goes so quickly during balloon popping with mom and dad.</p>
      

      </ol>
    <div className="App">
      Welcome to the Balloon Burst Game!
    </div>
    <div>
        <button onClick={startClick}>
          Tap to start
        </button>
      </div></>
      
  );
}


export default App;
