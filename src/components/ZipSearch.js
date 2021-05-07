import React, {useState, useRef} from 'react'
import { Link} from 'react-router-dom'

const ZipSearch = (props)=>{
    // let zipCode = props.zipCode
    // let [zipCode, setZipCode]= useState("")
    const zipCodeRef = useRef()

    const submitHandler =(event)=>{
        event.preventDefault()
        props.setZipCode (zipCodeRef.current.value)
        console.log(props.zipCode)
        props.props.history.push("/SelectionPage")
    }
    return (
        <form onSubmit={submitHandler}>
            <input ref={zipCodeRef} type='text' id='zipsearch' placeholder="ZIP" />
            {/* Look into this Link style; likely not best practice */}
              {/* <Link to={`/SelectionPage/${zipCode}` }> */}
                <input type='submit' value='submit'/>
              {/* </Link> */}
        </form>
    )
}

export default ZipSearch