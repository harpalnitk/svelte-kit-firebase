<script lang='ts'>
    import DropdownMenu from '$lib/Components/UI/DropdownMenu.svelte';
    import { goto } from '$app/navigation';
    import authStore from '../../stores/authStore';
      
      authStore.subscribe(async ({isLoggedIn, firebaseControlled}) => {
          if(!isLoggedIn && firebaseControlled){
              await goto('/auth');
          }
      })
    </script>
<h1>User Profile</h1>
<main>
    <DropdownMenu/>
    <div class='test tooltip'></div>
</main>

<style>
    main{
display: flex;
align-items: center;
flex-direction: column;
    }
    .test{
        margin: 1rem;
        width: 100px;
        height: 100px;
        background-color: firebrick;
    }

</style>
