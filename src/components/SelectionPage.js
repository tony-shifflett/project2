import React, {useState, useEffect} from 'react'
import LocationDisplay from './LocationDisplay'
// import PickLevel from './PickLevel'

const SelectionPage = (props)=>{
    const zipCode = props.zipCode
    const url = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zipCode}&key=AIzaSyAjF7-RqPI7T8xVRsYQHQwztV8Z85DvTSQ`

    const [civicData, setCivicData] = useState(null)
    const getCivicData=async()=>{
        const response = await fetch(url)
        const data= await response.json()
        setCivicData(data)
        console.log(data)
      }

      const stateButtonHandler = ()=>{
          console.log("it works")
          props.history.push('/')
      }

      const federalButtonHandler = ()=>{
        console.log("it works")
        props.history.push('/')
    }


  useEffect(()=>{getCivicData()} ,[])
  const loaded = ()=>{  
     return(
      <>
        <LocationDisplay civicData={civicData}/>
        <input type="button" value="State" onClick={stateButtonHandler}/>
        <input type="button" value="Federal" onClick={federalButtonHandler}/>
      </>
    )}

  const loading =()=>{
    return(
      <h1>Loading...</h1>
    )
  }


  return civicData? loaded():loading()
}

export default SelectionPage