import {ref} from "vue";

function CreateByTsx() {
    let msg = ref("hello")
    return <>
        <div>
            <h1>{msg}</h1>
        </div>
    </>
}