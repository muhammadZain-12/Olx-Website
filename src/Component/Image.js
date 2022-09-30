import olx from '../Images/olxicon.png'


function Image(prop) {
    console.log(prop)
    return (
        <img src={olx}  className={prop.className} />
        
    )
}

export default Image;