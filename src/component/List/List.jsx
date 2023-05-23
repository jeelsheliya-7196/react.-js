import Li from "../Li/Li";
function List(){


    let ulstyle = {display: "flex", padding: 0, listStyle: "none",justifyContent: "flex-end"};
    let listyle = {padding: 10};
    let astyle = {color: "white", textDecoration: "none"};
    let namelist = ["Home","About","Service"];
    return(
        // <ul style={ulstyle} >
        //         <li style={listyle}>
        //             <a href="#" style={astyle}>
        //                 Home
        //             </a>
        //         </li>
        //         <li style={listyle}>
        //             <a href="#" style={astyle}>
        //                 Home
        //             </a>
        //         </li>
        //         <li style={listyle}>
        //             <a href="#" style={astyle}>
        //                 Home
        //             </a>
        //         </li>
        //     </ul>
        <ul style={ulstyle}>
            {
                namelist.map((val)=>{
                    return (< Li typ={listyle}ast={astyle}name={val}/>)
                })
            }
        </ul>
    )
}
export default List;