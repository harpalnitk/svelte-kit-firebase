<script lang='ts'>
    
import authStore from '../../stores/authStore';
import firebase from 'firebase/app';

async function logout(){
await firebase.auth().signOut();
}
</script>

{#if $authStore.isLoggedIn}
<button on:click={logout}>Logout</button>
{/if}
