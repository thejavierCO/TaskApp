<script> 
	import { Router, Route,Link} from "svelte-routing";
	import P404 from "./components/p404.svelte";
	import Home from "./components/Home.svelte";
	import Dashboard from "./components/dashboard.svelte";
	import SingIn from "./components/isSingIn.svelte";
	import SingInBtn from "./components/loginbtn.svelte";
</script>
<div class="vh-full">
	<Router>
		<nav class="flex md:flex-row flex-col container mx-auto" style="width:100%;">
			<Link to="/" class="flex-grow text-center p-1 hover:bg-black hover:text-white duration-150">Home</Link>
			<SingIn>
				<Link to="/dashboard" class="hidden md:block flex-grow text-center p-1 hover:bg-black hover:text-white duration-150">Dashboard</Link>
			</SingIn>
			<SingInBtn />
		</nav>
		<div class="container mx-auto">
			<Route path="/">
				<SingIn preventDefault={true} let:profile>
					<Home auth={profile}/>
				</SingIn>
			</Route>
			<SingIn let:storage let:auth>
				<Route path="/dashboard"><Dashboard {storage} {auth} /></Route>
			</SingIn>
			<Route component="{P404}" />
		</div>
	</Router>
</div>
<style global>
	.vh-full{
		height: 100vh;
	}
</style>