import { useState } from "react"
const Tab=()=>{
    const tabs=[{id:1,name:"Tab 1",title:"Content 1",description:"The adventure of life is to learn. The purpose of life is to grow. The nature of life is to change. The challenge of life is to overcome. The essence of life is to care. The opportunity of like is to serve. The secret of life is to dare. The spice of life is to "},{id:2,name:"Tab 2",title:"Content 2",description:"Nothing in the world can take the place of Persistence. Talent will not; nothing is more common than unsuccessful men with talent. Genius will not; unrewarded genius is almost a proverb. Education will not; the world is full of educated derelicts. The slogan ‘Press On’ has solved and always will solve the problems of the human "},{id:3,name:"Tab 3",title:"Content 3",description:"I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life, and that is why I succeed."},{id:4,name:"Tab 4",title:"Content 4",description:"When you leave work on Friday, leave work. Don’t let technology follow you throughout your weekend (answering text messages and emails). Take a break. You will be more refreshed to begin the workweek if you have had a break."}]
    const [selected,setSelected]=useState(null)
    const [text, setText]=useState("Every successful person in the world is a hustler one way or another. We all hustle to get where we need to be. Only a fool would sit around and wait on another man to feed him.")
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




