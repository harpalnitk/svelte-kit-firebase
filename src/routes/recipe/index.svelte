<script lang='ts'>
    import firebase from 'firebase/app';
    import authStore from '../../stores/authStore';

    import Button from '$lib/Components/UI/Button.svelte';

    async function logout(){
        await firebase.auth().signOut();
    }

</script>
<main>
    <h1>Welcome to recipe site</h1>
    {#if $authStore.isLoggedIn}
    <Button on:click={logout} color='danger'>Logout</Button>
    {/if}
</main>


