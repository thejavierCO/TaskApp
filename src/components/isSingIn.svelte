<script>
    import {isLogin,btnLogin,authStorage,auth,authProfile} from "../js/data";
    export let preventDefault = false;
</script>
{#if !preventDefault}
    {#if $isLogin}
        <slot btn={$btnLogin} storage={$authStorage} auth={$auth} profile={$authProfile}></slot>
    {/if}
{:else if preventDefault}
    <slot isSignIn={$isLogin} btn={$btnLogin} storage={$authStorage} auth={$auth} profile={$authProfile}></slot>
{/if}