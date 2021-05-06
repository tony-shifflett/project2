import React, {useState, useEffect} from 'react'
import LocationDisplay from './LocationDisplay'
import PickLevel from './PickLevel'

const SelectionPage = (props)=>{
    const zipCode = 70068
    const url = `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${zipCode}&key=AIzaSyAjF7-RqPI7T8xVRsYQHQwztV8Z85DvTSQ`

    const [civicData, setCivicData] = useState(null)
    const getCivicData=async()=>{
        const response = await fetch(url)
        const data= await response.json()
        setCivicData(data)
        console.log(data)
      }


  useEffect(()=>{getCivicData()} ,[])
  const loaded = ()=>{  
     return(
      <>
        <LocationDisplay civicData={civicData}/>
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