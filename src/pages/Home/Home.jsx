import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { BASE_URL } from '../../contains';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Home = () => {

  const [data, setData] = useState([])

  const getData = () =>{
    axios.get(BASE_URL)
      .then((res)=>{
        setData(res.data)
      })
  }

  useEffect(()=>{
    getData()
  }, [])
  
  return ( 
    <React.Fragment>
      <div className='cards'>
        {data?.map((item)=>{
          return(
            <div className='card' key={item.id}>
              <img src={item.image} alt="" />
              <h2>{item.title.substring(0, 20)}</h2>
              <p>{item.description.substring(0, 100)}</p>
              <span>{item.category}</span>
              <Link to={"/blogs/"+item.id}>
                <Button type='primary'>
                  Batafsil
                </Button>
              </Link>
            </div>
          )
        })}
      </div>
    </React.Fragment>
   );
}
 
export default Home;