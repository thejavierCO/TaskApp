<script>
    import SingIn from "./isSingIn.svelte";
    import SingInBtn from "./loginbtn.svelte";
    import { Link } from "svelte-routing"
    import {isLogin,authName,authImage,authDescription} from "../js/data";
</script>
<div class="md:hidden block">
    <nav class="flex md:flex-row flex-col container mx-auto" style="width:100%;">
        <SingIn>
            <Link to="/dashboard" class="flex-grow text-center p-1 hover:bg-black hover:text-white duration-150">Dashboard</Link>
        </SingIn>
        <Link to="/about" class="flex-grow text-center p-1 hover:bg-black hover:text-white duration-150">About Me</Link>
        <Link to="/config" class="flex-grow text-center p-1 hover:bg-black hover:text-white duration-150">Config</Link>
        <SingInBtn class="flex-grow text-center p-1" />
    </nav>
</div>
{#if $isLogin}
    <div>{$authName}</div>
    <img src={$authImage} alt="name">
    <div>{$authDescription}</div>
{/if}