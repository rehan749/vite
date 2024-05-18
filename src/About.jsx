import { useEffect ,useState} from "react"
import axios from 'axios';

// import React from 'react'


const About = () => {

  const [data, setData] = useState([]);
  useEffect(()=>{

    fetch('https://randomuser.me/api/')
    .then(res=> res.json())
    .then(data=> console.log(data))
    .catch(err=> console.log(err))
  },[])

  useEffect(() => {
    axios.get('https://api.example.com/data')
      .then(response => setData(response.data))
      .catch(error => console.error('Error:', error));
  }, []);
  return (
    <div>About</div>
  )
}

export default About