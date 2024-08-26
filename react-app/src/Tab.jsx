import { useState } from "react"
const Tab=()=>{
    const tabs=[{id:1,name:"Tab 1"},{id:2,name:"Tab 2"},{id:3,name:"Tab 3"},{id:4,name:"Tab 4"}]
    const [selected,setSelected]=useState(null)

    const handleClick=index=>{
        setSelected(index)
    }
 
return(
    <div>
        <ul>{tabs.map((tab,index)=><li key={tab.id}  onClick={()=>handleClick(index)} style={{cursor:"pointer",background:selected === index?"#fff":"rgb(178, 178, 228)",color:selected === index?"rgb(178, 178, 228)":"#fff",border:selected ===index?"1px solid rgb(70, 70, 228)":null}} >{tab.name}</li>)}</ul>
    </div>
)
}

export default Tab




