// create your App component here
import React, {useState, useEffect} from 'react'

function App() {
    const [dog, setDog] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch('https://dog.ceo/api/breeds/image/random');
            const data = await response.json();
            setDog(data.message);
          } catch (error) {
            console.error('Error fetching dog data:', error);
          }
        };
    
        fetchData();
      }, []);
    
    
  return (
    <div>
        {dog ?<img src={dog} alt="A Random Dog" /> : <p>Loading...</p> }
    </div>
  )
}

export default App