<script> 
	import { Router, Link, Route } from "svelte-routing";
	import {isLogin,btnLogin,storageLogin,homeShow,authLogin} from "./js/data";
	import P404 from "./components/p404.svelte";
	import Home from "./components/Home.svelte";
	import Dashboard from "./components/dashboard.svelte";
</script>
<Router>
	<nav>
		{#if $homeShow}
			<Link to="/">Home</Link>
		{/if}
		{#if $isLogin}
			<Link to="/dashboard">Dashboard</Link>
			<button on:click={$btnLogin}>exit</button>
		{:else}
			<button on:click={$btnLogin}>login</button>
		{/if}
	</nav>
	<div>
		<Route path="/"><Home auth={$authLogin}/></Route>
		{#if $isLogin}
		<Route path="/dashboard"><Dashboard storage={$storageLogin} auth={$authLogin} /></Route>
		{/if}
		<Route component="{P404}" />
	</div>
</Router>

