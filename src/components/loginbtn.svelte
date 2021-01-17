<script>
    import SingIn from "./isSingIn.svelte";
</script>
<SingIn preventDefault={true} let:isSignIn let:btn>
    <button on:click={btn}>{#if isSignIn}exit{:else}login{/if}</button>
</SingIn>