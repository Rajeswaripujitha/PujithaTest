
import './App.css';

function App() {
  
  return (
    <>
    
    <form >
      <h1>Admission Form</h1>
      <h3>Enter your details carefully</h3>
       <label> Name:
        <input type="text" placeholder='type your name'  />
      </label><br/>
      <label>Email:
        <input type="text" placeholder='aaaaa@gmail.com' />
      </label><br/>
      <label>Mobile number :
        <input type="text" placeholder='+91 0000000000' />
      </label><br/>
      <label>Branch :
        <input type="text" placeholder='your branch'  />
      </label><br/>
      <input type="button" value='submit'/>
    </form>
    </>
  );
}

export default App;
