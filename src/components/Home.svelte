<script>
    export let auth;
    let {name,image:{0:{contentUrl:avatar}},description} = auth;
</script>
<h1>Home</h1>
{#if auth}
    <div>{name}</div>
    <img src={avatar} alt={name}>
    <div>{description}</div>
{/if}