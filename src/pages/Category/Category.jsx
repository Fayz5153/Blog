import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams } from "react-router-dom";
import { BASE_URL } from "../../contains";
import { Button } from 'antd';

const Category = () => {
  let params = useParams().name
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
          if (item.category === params) {
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
          }
        })}
      </div>
    </React.Fragment>
   );
}
 
export default Category;