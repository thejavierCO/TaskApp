<script>
    import {auth,Tasks,statusSend} from "../js/data";
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

{#if !$statusSend}

<form on:submit|preventDefault={add}>
    <input type="text"  class=" border border-black p-2" placeholder="title" title>
    <input type="text"  class=" border border-black p-2" placeholder="description" descripcion>
    <input type="submit"class=" border border-black p-2" value="Enviar">
</form>
<form on:submit|preventDefault={edit} id="editTask">
    <input type="text"  class=" border border-black p-2" placeholder="title" title>
    <input type="text"  class=" border border-black p-2" placeholder="description" descripcion>
    <input type="text"  class=" border border-black p-2" placeholder="id" id>
    <input type="submit"class=" border border-black p-2" value="Enviar">
</form>

{:else}
<h1 class="animate-pulse text-5xl text-center p-23">please await...</h1>
{/if}
<div class="whitespace-pre-line flex flex-cols flex-wrap">
    {#each $Tasks as [{title,descripcion},id]}
        <div id={id} class="border border-black rounded-sm p-2 m-1 flex-grow  overflow-auto">
            <div>title: {title||"untitle"}</div>
            <div>description: {descripcion||"undescription"}</div>
            {#if !$statusSend}
                <button class="border border-black p-2" on:click={()=>del(id)}>Delete</button>
                <button class="border border-black p-2" on:click={()=>{document.querySelector("#editTask").querySelector("[id]").value = id}}>Edit</button>
            {/if}
        </div>
    {/each}
</div>
