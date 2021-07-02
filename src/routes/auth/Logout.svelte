<script lang='ts'>
    
import authStore from '../../stores/authStore';
import uiStore from '../../stores/uiStore';
import firebase from 'firebase/app';
import { goto } from '$app/navigation';

console.log('INSIDE LOGOUT');

async function logout(){
    console.log('INSIDE LOGOUT 1');
    uiStore.setIsLoading(true);
    try {
        await firebase.auth().signOut();
        await goto('/auth');
        uiStore.setMsgSuccessLoading('Successfully Logged Out!', false);

    } catch (error) {
        console.log('Error in signout', error);
        uiStore.setMsgDangerLoading('Error in signout!', false);
    }

}
if($authStore.isLoggedIn){
    logout();
}
</script>
<!-- 
{#if $authStore.isLoggedIn}
<button on:click={logout}>Logout</button>
{/if} -->
