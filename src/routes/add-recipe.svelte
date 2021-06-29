<script lang='ts'>
import { goto } from '$app/navigation';

    import authStore from '../stores/authStore';
  
  authStore.subscribe(async ({isLoggedIn, firebaseControlled})=> {
      if(!isLoggedIn && firebaseControlled){
          await goto('/auth');
      }
  })
</script>

<main>
    <h1>Add Recipe</h1>
</main>

<style>
    main{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>