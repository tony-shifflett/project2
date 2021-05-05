import React, {useRef} from 'react'
import { Link} from 'react-router-dom'

const ZipSearch = ()=>{

    const zipCodeRef = useRef()
    const submitHandler =(event)=>{
        event.preventDefault()
        console.log(zipCodeRef.current.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input ref={zipCodeRef} type='text' id='zipsearch' placeholder="ZIP" />
            {/* Look into this Link style; likely not best practice */}
              <Link to="/SelectionPage">
                <input type='submit' value='submit'/>
              </Link>
        </form>
    )
}

export default ZipSearch