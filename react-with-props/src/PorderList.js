function PorderList(prpos){
    return(
        <div>
            <ol>
                {prpos.products.map((pname,index)=>
                <li key={index}>
                    {pname}
                </li>)}
            </ol>
        </div>
    )
}
export default PorderList;