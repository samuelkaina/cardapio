import './App.css'
import { Card } from './components/card';
import { FoodData } from './interface/FoodData';

function App() {
  const data: FoodData[] = [];

   return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card grid">
        {data.map(FoodData => 
        <Card
         price={FoodData.price} 
         title={FoodData.title}
         image={FoodData.image}
         />)}
      
      </div>


    </div>
   
  )
}

export default App
