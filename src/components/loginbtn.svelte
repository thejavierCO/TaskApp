<script>
    import SingIn from "./isSingIn.svelte";
</script>
<SingIn preventDefault={true} let:isSignIn={status} let:btn>
    <button on:click={btn} 
    class:hover:bg-blue-500={status!==true}  
    class:hover:bg-red-500={status===true}
    class:hover:text-white={true}
    {...$$restProps}
    >{#if status}exit{:else}login{/if}</button>
</SingIn>