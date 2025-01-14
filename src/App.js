import './App.css';
import { Greet,Welcome,Props,Statempx,JSXfunction } from './Components';

function App() {
  const data = {fname : 'Harish' , lname: 'Chandra' , age:'25',city :'Bengalore'};
  return (
    <>
      <Greet/>
      <Welcome/>
      <Statempx />

      <Props dataattr = {data} />
      <JSXfunction />

    </>
  );
}

export default App;