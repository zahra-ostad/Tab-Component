import { useState } from "react"
const Tab=()=>{
    const tabs=[{id:1,name:"Tab 1",title:"Content 1",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos quidem praesentium voluptates quo, quos laboriosam iure ullam vel error corrupti quis? Sunt, consectetur magnam!"},{id:2,name:"Tab 2",title:"Content 2",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos quidem praesentium voluptates quo, quos laboriosam iure ullam vel error corrupti quis? Sunt, consectetur magnam!"},{id:3,name:"Tab 3",title:"Content 3",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos quidem praesentium voluptates quo, quos laboriosam iure ullam vel error corrupti quis? Sunt, consectetur magnam!"},{id:4,name:"Tab 4",title:"Content 4",description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, eos quidem praesentium voluptates quo, quos laboriosam iure ullam vel error corrupti quis? Sunt, consectetur magnam!"}]
    const [selected,setSelected]=useState(null)
    const [text, setText]=useState("")
    const [title,setTitle]=useState("")
    const handleClick=(index,itemText,title)=>{
        setSelected(index)
        setText(itemText)
        setTitle(title)
    }

 
return(
    <div>
        <ul>{tabs.map((tab,index)=><li key={tab.id}  onClick={()=>handleClick(index,tab.description,tab.title)}  style={{cursor:"pointer",background:selected === index?"#fff":"rgb(178, 178, 228)",color:selected === index?"rgb(178, 178, 228)":"#fff",border:selected ===index?"1px solid rgb(70, 70, 228)":null}} >{tab.name}</li>)}</ul>
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
)
}

export default Tab




