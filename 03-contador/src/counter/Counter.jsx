import { useState } from "react";

function Counter(){
    // El estado
    const [contador, setContador] = useState(0);
    return(
        <div>
            <p>
                Haz hecho clic { contador } veces a este botón
            </p>
            <button onClick={ ()=>{setContador(contador + 1)} }>Incrementar</button>
        </div>
    );
}

export default Counter;