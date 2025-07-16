function PunOrderList(prpos){
    return(
        <div>
            <ul>
                {prpos.products.map((pname,index)=>
                <li key={index}>
                    {pname}
                </li>)}
            </ul>
        </div>
    )
}
export default PunOrderList;