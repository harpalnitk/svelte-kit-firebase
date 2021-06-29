<script lang='ts'>
    import firebase from 'firebase/app';

async function loginWithGoogle(){
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
    } catch (e) {
        console.log('Error in sign in with Google', e);
    }
}
</script>
<main>
    <h1>Login With Google</h1>

    <img 
    src="sign-in-google.png"
     alt="Login With Google"
     on:click="{loginWithGoogle}"/>
</main>


 <style>
     main{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
     img{
         width: 10rem;
         cursor: pointer;
     }
 </style>