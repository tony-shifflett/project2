
import React, { useRef} from "react";





const HomePage = (props) => {

    const zipCodeRef = useRef()

    const submitHandler =(event)=>{
        event.preventDefault()
        props.setZipCode (zipCodeRef.current.value)
        console.log(props.zipCode) 
        props.history.push("/SelectionPage")  
    }
    

    return (
      <div id="homepage">
        <div className="home">
            <h1>Civic Data</h1>
        </div>
        <form onSubmit={submitHandler}>
            <input ref={zipCodeRef} type='text' id='zipsearch' placeholder="ZIP" />
                <input type='submit' value='submit'/>
        </form>
      </div>

    )
  };

export default HomePage;






