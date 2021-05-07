

const DisplayOfficials = (props)=>{
    if(props.level==="federal"){
    return(
        <>
            <h1>Federal Officials</h1>
            <div className="display-board">
                <div className="official">
                    <h2>President</h2>
                    <h3>{props.civicData.officials[0].name}</h3>
                </div>
                <div className="official">
                    <h2>Vice-President</h2>
                    <h3>{props.civicData.officials[1].name}</h3>
                </div>
                <div className="official">
                    <h2>Senator</h2>
                    <h3>{props.civicData.officials[2].name}</h3>
                </div>
                <div className="official">
                    <h2>Senator</h2>
                    <h3>{props.civicData.officials[3].name}</h3>
                </div>
            </div>
        </>
    )
    }else if (props.level==="state"){
        return(
            <>
                <h1>State Officials</h1>
                <div className="display-board">
                    <div className="official">
                        <h2>Governor</h2>
                        <h3>{props.civicData.officials[4].name}</h3>
                    </div>
                    <div className="official">
                        <h2>Lt. Governor</h2>
                        <h3>{props.civicData.officials[5].name}</h3>
                    </div>
                </div>
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