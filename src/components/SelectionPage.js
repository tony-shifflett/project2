import React, {useState, useEffect} from 'react'
import LocationDisplay from './LocationDisplay'


const SelectionPage = (props)=>{
    const zipCode = props.zipCode
    const url = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zipCode}&key=AIzaSyAjF7-RqPI7T8xVRsYQHQwztV8Z85DvTSQ`

    // const [civicData, setCivicData] = useState(null)
    const getCivicData=async()=>{
        const response = await fetch(url)
        const data= await response.json()
        props.setCivicData(data)
        console.log(data)
      }

      const stateButtonHandler = ()=>{
          console.log("it works")
          props.history.push('/State')
      }

      const federalButtonHandler = ()=>{
        console.log("it works")
        props.history.push('/Federal')
    }


  useEffect(()=>{getCivicData()} ,[])
  const loaded = ()=>{  
     return(
      <>
        <LocationDisplay civicData={props.civicData}/>
        <input type="button" value="State" onClick={stateButtonHandler}/>
        <input type="button" value="Federal" onClick={federalButtonHandler}/>
      </>
    )}

  const loading =()=>{
    return(
      <h1>Loading...</h1>
    )
  }


  return props.civicData? loaded():loading()
}

export default SelectionPage