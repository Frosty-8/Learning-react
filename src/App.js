import './App.css';
import { Greet,Welcome,Props,Statempx,JSXfunction,StudentHome , StudentContextComponent , UseStateDemo,SideEffect,Formname,SignupForm} from './Components';

function App() {
  const data = {fname : 'Harish' , lname: 'Chandra' , age:'25',city :'Bengalore'};
  return (
    <div className='App'>
      <Greet/>
      <Welcome/>
      <Statempx />

      <Props dataattr = {data} />
      <JSXfunction />
      
      <h2>--------Use Context example--------------</h2>
      <StudentContextComponent>
        <StudentHome></StudentHome>
      </StudentContextComponent> 


      <h2>------------Use state hook example-----------------</h2>
      <UseStateDemo />

      <h2>-------------Use effect hook example----------</h2>
      <SideEffect/>


      <h2>----------Form name--Uncontrolled---- </h2>
      <Formname />

      <h2>-----------Form name----Controlled-----</h2>
      <SignupForm/>
    </div>
  );
}

export default App;