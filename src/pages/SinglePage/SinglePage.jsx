import React, {useEffect, useState} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { BASE_URL } from "../../contains";
import { DeleteOutlined } from '@ant-design/icons';

const SinglePage = () => {
  let navigate = useNavigate()
  let params = useParams().id
  const [data, setData] = useState(null)

  const getData = () =>{
    axios.get(BASE_URL+`/${params}`)
      .then((res)=>{
        setData(res.data)
      })
  }
  const Delete = () =>{
    let quest = confirm("Ochirilsini")
    if (quest) {
      axios.delete(BASE_URL+`/${params}`)
      .then((res)=>{
        if(res.status === 200){
          setTimeout(() => {
            navigate("/")
          }, 1000);
        }
      })
    } else{
      alert("Hop")
    }
  }

  useEffect(()=>{
    getData()
  }, [])
  return ( 
    <React.Fragment>
      <div className="page">
        <h1>{data?.title}</h1>
        <img src={data?.image} alt="" />
        <span>{data?.category}</span>
        <p>{data?.description}</p>
        <button onClick={Delete}><DeleteOutlined/></button>
      </div>
    </React.Fragment>
   );
}
 
export default SinglePage;