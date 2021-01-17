<script>
	import {isLogin,btnLogin,storageLogin} from "./js/data";
</script>

{#if $isLogin}
	<button on:click={$btnLogin}>exit</button>
{:else}
	<button on:click={$btnLogin}>login</button>
{/if}
