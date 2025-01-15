import './App.css';
import { Greet,Welcome,Props,Statempx,JSXfunction,StudentHome , StudentContextComponent , UseStateDemo,SideEffect} from './Components';

function App() {
  const data = {fname : 'Harish' , lname: 'Chandra' , age:'25',city :'Bengalore'};
  return (
    <>
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
    </>
  );
}

export default App;