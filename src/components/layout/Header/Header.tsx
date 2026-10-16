import { useEffect, useState } from "react";

export default function Header() {
    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }
    })

    return(
        <>
        <nav>
            <div>Control de Acceso</div>
            <div>Bitácora de Médicos</div>
            <div>{ `${date.toLocaleDateString()} ${date.toLocaleTimeString()}` }</div>
        </nav> 
        </>
    );
}