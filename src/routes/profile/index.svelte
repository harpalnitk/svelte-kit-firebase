<script lang='ts'>
    import { goto } from '$app/navigation';
    
        import authStore from '../../stores/authStore';
      
      authStore.subscribe(async ({isLoggedIn, firebaseControlled})=> {
          if(!isLoggedIn && firebaseControlled){
              await goto('/auth');
          }
      })
    </script>
<h1>User Profile</h1>