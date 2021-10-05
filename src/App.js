
import './App.css';
import Profile from './Profile/profile.js';

function App() {
  const handleName=name=>alert('Hello! My name is  '+ name +'\nand I make horrible web sites');
  
  return (
    <div className="App">
      <Profile fullName="John Doe" bio="Master" profession="Full stack Web developper" 
      handleName={handleName}>
      <img src="/john-Doe.jpg" alt="It's me :)" />
      </Profile>
      
    
    </div>
    
  );
}

export default App;
