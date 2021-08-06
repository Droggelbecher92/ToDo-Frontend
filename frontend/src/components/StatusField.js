import {StatusBox} from "./StatusBox.js"

export function StatusField(){
    return <section>
        <StatusBox className="StatusBoxOpen"/>
        <StatusBox className="StatusBoxInProgress"/>
        <StatusBox className="StatusBoxDone"/>
    </section>
}
