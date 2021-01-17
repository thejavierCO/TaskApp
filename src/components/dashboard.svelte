<script>
    import {auth,Tasks} from "../js/data";
    let add = ({target})=>{
        let title = target.querySelector("[title]").value;
        let descripcion = target.querySelector("[descripcion]").value;
        Tasks.add({title,descripcion})
    }
    let del = (idTask)=>Tasks.del(idTask);
    let edit = ({target})=>{
        let title = target.querySelector("[title]").value;
        let descripcion = target.querySelector("[descripcion]").value;
        let id = target.querySelector("[id]").value;
        Tasks.edit(id,{title,descripcion})
    }
</script>

<h1>Dashboard {$auth.username}</h1>

<form on:submit|preventDefault={add}>
    <input type="text" title>
    <input type="text" descripcion>
    <input type="submit" value="Enviar">
</form>

<form on:submit|preventDefault={edit} id="editTask">
    <input type="text" title>
    <input type="text" descripcion>
    <input type="text" id>
    <input type="submit" value="Enviar">
</form>

{#each $Tasks as [{title,descripcion},id]}
    <div id={id}>
        <div>{title}</div>
        <div>{descripcion}</div>
        <button on:click={()=>del(id)}>Delete</button>
        <button on:click={()=>{document.querySelector("#editTask").querySelector("[id]").value = id}}>Edit</button>
    </div>
{/each}
