<script>
    import {router} from "../js/data";
    export let path;
</script>

{#if typeof path === "string"&&path===$router}
    <slot path={$router}></slot>
{:else}
    <slot path={$router}></slot>
{/if}