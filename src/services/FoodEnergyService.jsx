
import ChartCharacteristics from '../data/ChartCharacteristics.json';

const responseApi = response =>{






    
}







export default function getFoodEnergy(props)  {
    try {
       
     
        return    fetch ("https://fable2020.herokuapp.com/foodenergy1" + JSON.stringify(props))
        .then(res=>res.json()).then(responseApi);

       
      } catch (error) {
        console.error(error)
      }
}
