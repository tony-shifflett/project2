

const DisplayOfficials = (props)=>{
    if(props.level==="federal"){
    return(
        <>
            <h1>Display Officials</h1>
            <h2>{props.level}</h2>
        </>
    )
    }else if (props.level==="state"){
        return(
                <>
                <h1>Display Officials</h1>
                <h2>{props.level}</h2>
            </>
        )
    }
    else{
        return(
            <h1>Some error occured. Return to home page and try again.</h1>
        )
    }

}

export default DisplayOfficials