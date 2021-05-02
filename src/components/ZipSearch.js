import React, {useRef} from 'react'

const ZipSearch = ()=>{

    const zipCodeRef = useRef()
    const submitHandler =(event)=>{
        event.preventDefault()
        console.log(zipCodeRef.current.value)
    }
    return (
        <form onSubmit={submitHandler}>
            <input ref={zipCodeRef} type='text' id='zipsearch' placeholder="ZIP" />
            <input type='submit' value='submit'/>
        </form>
    )
}

export default ZipSearch