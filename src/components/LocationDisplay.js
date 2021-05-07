

const LocationDisplay = (props)=>{
    console.log(props.civicData.normalizedInput.city)
  

    return (
        <>
            <h1 >{props.civicData.normalizedInput.city}, {props.civicData.normalizedInput.state}</h1>
        </>
    )
}

export default LocationDisplay