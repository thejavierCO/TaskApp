<script>
    import {isLogin,authName,authImage,authDescription} from "../js/data";
</script>
<h1>Home</h1>
{#if $isLogin}
    <div>{$authName}</div>
    <img src={$authImage} alt="name">
    <div>{$authDescription}</div>
{/if}