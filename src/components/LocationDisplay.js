

const LocationDisplay = (props)=>{
    console.log(props.civicData.normalizedInput.city)
  
    console.log(props.civicData.officials[0].name)
    return (
       
        <>
            <h1 >{props.civicData.normalizedInput.city}, {props.civicData.normalizedInput.state}</h1>
        </>
    )
}

export default LocationDisplay