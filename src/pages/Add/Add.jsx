import React, {useState} from "react";
import axios from "axios";
import { Input, Button, Select } from 'antd';
import { BASE_URL } from "../../contains";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

const Add = () => {
  let navigate = useNavigate()

  const [title , setTitle] = useState("")
  const [description , setDescription] = useState("")
  const [category , setCategory] = useState("")
  const [image , setImage] = useState("")

  const SendData = () =>{
    let data = {
      title:title,
      description:description,
      category:category,
      image:image
    }
    axios.post(BASE_URL, data).then((res)=>{
      if(res.status === 201){
        setTimeout(() => {
          navigate("/")
        }, 1000);
      }
    })
  }

  return ( 
    <React.Fragment>
      <div className="add">
        <h3>Yangi Malumot qo'shish</h3>
        <Input placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
        <TextArea rows={4} placeholder="Description"  onChange={(e)=>setDescription(e.target.value)}/>
        <Select
          value={category}
          placeholder="Category"
          style={{ width: "100%" }}
          onChange={(value)=>setCategory(value)}
          options={[
            { value: 'kino', label: 'Kino' },
            { value: 'sport', label: 'Sport' },
          ]}
        />
        <Input placeholder="Image"  onChange={(e)=>setImage(e.target.value)}/>
        <Button type="primary" onClick={SendData}>Add</Button>
        
      </div>
    </React.Fragment>
   );
}
 
export default Add;