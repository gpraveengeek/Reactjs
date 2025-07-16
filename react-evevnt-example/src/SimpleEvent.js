function SimpleEvent(){
    let handleEvent=()=>{
        console.log("External Event Fired")
    }
    let KeyEventHandle=()=> {
        console.log("Key Event Fired")
    }
    return(
        <div>
            <h5>React Simple Event</h5>
        </div>
    )
}