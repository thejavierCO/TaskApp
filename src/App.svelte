<script> 
	import { Router, Route } from "svelte-routing";
	import {isLogin,btnLogin,storageLogin,homeShow,authLogin} from "./js/data";
	import P404 from "./components/p404.svelte";
	import Home from "./components/Home.svelte";
	import Dashboard from "./components/dashboard.svelte";
	import About from "./components/about.svelte";
	import Link from "./components/Link.svelte";
</script>
<Router>
	<nav>
		{#if $homeShow}
			<Link to="/" value="Home"/>
		{/if}
		<Link to="/dashboard" auth={true}>Dashboard</Link>
		<Link to="/about">About Me</Link>
		{#if $isLogin}
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
		<Route path="/about" component={About}/>
		<Route component="{P404}" />
	</div>
</Router>

