function ListView({elements, funcFilterItems}){
    return(
        <div>
            <input type="text" onChange={ev => funcFilterItems(ev.target.value)}/>
            {
                elements.map((nombre, index) => nombre && <li key={index}>{nombre}</li>)
            }
        </div>
    );
}

/* function ListView(props){
    props.elements
} */

export default ListView;