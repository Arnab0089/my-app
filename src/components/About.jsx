import React,{useState} from 'react'
import './About.css'
export default function About() {

    const [myStyle, setMyStyle] = useState({
        color:'black',
        backgroundColor:'bisque'
    })
    const [buttonText, setButtonText] = useState("Enable Dark Mode")

    const toogleStyle=()=>{
        if(myStyle.color==='black'){
            setMyStyle({
                color:'white',
                backgroundColor:'black'
            })
            setButtonText("Enable Light Mode");
        }
        else{
            setMyStyle({
                color:'black',
                backgroundColor:'bisque'
            })
            
            setButtonText("Enable Dark Mode");
        }
    }

  return (
    
    
    <div className='container box1' style={myStyle}>
      <h2>This is the about section</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit harum obcaecati ipsa, vitae voluptatibus adipisci officiis distinctio expedita saepe inventore minus ad debitis enim cum at unde aperiam id architecto dolorum ex. Deleniti quibusdam nostrum odio quam blanditiis asperiores aliquam, neque, doloremque iure quis ad quaerat animi, obcaecati tempora optio totam pariatur voluptate laboriosam. Voluptatum, fugiat. Quae consequatur iste nobis vitae ipsum, quia minima reiciendis. Libero quae blanditiis omnis, facere neque maxime deserunt iure mollitia earum tempore vitae officia rem corrupti repudiandae, ratione quo odit sint consectetur placeat obcaecati explicabo expedita eum. Harum officia iusto esse, voluptas aut nobis excepturi obcaecati iure unde repudiandae quod, aliquam enim ad amet provident minima soluta architecto quisquam voluptatibus modi assumenda suscipit corrupti? Nostrum corporis eveniet aperiam, nulla nihil hic, alias necessitatibus rerum earum natus minus expedita libero. Impedit repellat recusandae distinctio tenetur, incidunt officia sint illo deleniti alias dignissimos dolore reprehenderit hic voluptates!</p>


    <div className="my-3">
        <button onClick={toogleStyle} type='button' className='btn btn-primary'>{buttonText}</button>
    </div>

    </div>
  )
}
