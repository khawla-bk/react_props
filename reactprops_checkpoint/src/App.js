import Image from "./profile/image.jpg"
import Profile from "./profile/profile";
import './App.css';

function App() {
  function HandleName(FullName) {
    alert(FullName);
  }
  return (
    <div className="App">
      <h1> Introduction </h1>
      <Profile FullName="Sherlock Holmes" bio="You know my methods, Watson. When you have eliminated the impossible, whatever remains, however improbable, must be the truth?"
      profession= "Detective" HandleName={HandleName}
      >
           <img
      style={{ width: "240px", borderRadius: "15px" }}
      src={Image}
      alt="Sherlock's pic"
    />
  </Profile>
    </div>
  );
}

export default App;
