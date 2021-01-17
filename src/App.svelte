<script> 
	import { Router, Route,Link} from "svelte-routing";
	import P404 from "./components/p404.svelte";
	import Home from "./components/Home.svelte";
	import Dashboard from "./components/dashboard.svelte";
	import About from "./components/about.svelte";
	import Show from "./components/show.svelte";
	import SingIn from "./components/isSingIn.svelte";
	import SingInBtn from "./components/loginbtn.svelte";
</script>
<Router>
	<nav>
		<Show let:path>
			{#if path !== "/"}
				<Link to="/">Home</Link>
			{/if}
			{#if path !== "/dashboard"}
				<SingIn>
					<Link to="/dashboard">Dashboard</Link>
				</SingIn>
			{/if}
			{#if path !== "/about"}
				<Link to="/about">About Me</Link>
			{/if}
		</Show>
		<SingInBtn />
	</nav>
	<div>
		<Route path="/">
			<SingIn preventDefault={true} let:profile>
				<Home auth={profile}/>
			</SingIn>
		</Route>
		<SingIn let:storage let:auth>
			<Route path="/dashboard"><Dashboard {storage} {auth} /></Route>
		</SingIn>
		<Route path="/about" component={About}/>
		<Route component="{P404}" />
	</div>
</Router>

