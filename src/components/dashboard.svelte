<script>
    export let storage;
    export let auth;
    const file = ({target})=>{
        const File = new FileReader();
        let test = target.querySelector("[file]").files[0];

        File.onload = (a)=>{
            storage.putFile(test.name,File.result,{encrypt:false,contentType:test.type})
            .then(e=>console.log(e))
            .catch(e=>console.log(e))
        }

        File.onprogress = (a)=>{
            console.log(a,auth)
        }

        File.readAsArrayBuffer(test);
    }
</script>

<form on:submit|preventDefault={file}>
    <input type="file" file/>
    <input type="submit" value="Enviar">
</form>

