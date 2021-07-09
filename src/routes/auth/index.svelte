<script lang='ts'>
    import uiStore from '../../stores/uiStore';
    import { goto } from '$app/navigation';
    import firebase from 'firebase/app';
    import TextInput from '$lib/Components/UI/TextInput.svelte';
    import Button from '$lib/Components/UI/Button.svelte';
    import { updateUser } from '../../auth-db';
      //validation
  import { isEmpty, isValidEmail, minLength, maxLength } from '$lib/helpers/validation.js';
  //transitions
  import { fade } from 'svelte/transition';

let signup= false;
let email= '';
let password= '';
$: error = $uiStore.localMsg;
$: emailValid = !isEmpty(email) && isValidEmail(email);
$: passwordValid = !isEmpty(password) && minLength(password) && maxLength(password);
$: formValid = emailValid && passwordValid;
$: console.log(emailValid);

async function loginWithGoogle(){
    uiStore.setIsLoading(true);
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
        await goto('/');
        uiStore.setIsLoading(false);
    } catch (e) {
        console.log('Error in sign in with Google', e);
        error = e.message;
        uiStore.setMsgDangerLoading('Error in sign in with Google', false);
    }
}


const loginWithEmailAndPassword =  async () => {
    uiStore.setLocalMsgLoading('', true);
    try {
        console.log(`Email: ${email} Password: ${password}`);
        if (signup) {
             firebase.auth().createUserWithEmailAndPassword(email, password).then(async res=>{
                 console.log('Response in Signup', res);
                 await updateUser(res.user.uid, res.user.email,res.user.photoURL, res.user.displayName);
                 await goto('/');
                 uiStore.setIsLoading(false);
             }).catch(e=> handleError(e));
        } else {
             firebase.auth().signInWithEmailAndPassword(email, password).then(async res=>{
                 console.log('Response in SignIn', res);
                 await goto('/');
                 uiStore.setIsLoading(false);
             }).catch(e=> handleError(e));
        }
      
    } catch (e) {
           console.log('Error in loginWithEmailAndPassword ', e);
    }  
}



const handleError = (e)=>{
    console.log('Error in sign in with Email and Password', e);
    //error = e.message;
    uiStore.setLocalMsgLoading(e.message, false);
 
}
</script>
<main>



    <section>

    
        <form on:submit|preventDefault={loginWithEmailAndPassword}>
            {#if error}
            <div class='error-msg'>{error}</div>
            {/if}
            <TextInput
            value={email}
            on:input={(event) => (email = event.target.value)}
            invalid={!emailValid}
            label='Email'
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            errorMessage='Not a valid Email'
        />
        <TextInput
        value={password}
        on:input={(event) => (password = event.target.value)}
        invalid={!passwordValid}
        label='Password'
        name='password'
        id='password'
        type='password'
        placeholder='Password'
        errorMessage='Minimum 6 characters password is required'
    />
    <Button type="submit" size='small' disabled={!formValid} width='100'>{signup ? 'SignUp': 'SignIn'} </Button>
        </form>
    </section>
    {#if !signup}
    <div class="strike">
        <span>OR</span>
      </div>
    <section transition:fade>
        <div class="google-login" on:click="{loginWithGoogle}">
            <img 
            src="google-logo.png"
            alt="Login With Google"
            />
            <h2>Login With Google</h2>
        </div>
    </section>
    {/if}
    <div class="animated-line" transition:fade>
    {#if signup}
    <a class='signup-link' on:click={()=>signup = !signup}>Switch to Sign In!</a>
    {:else}
    <a class='signup-link' on:click={()=>signup = !signup}>Not a member ? Sign Up!</a>
    {/if}
    </div>
   
   
</main>


<style lang="scss">
    @import '../../styles/vars';
     main, section{
         width:auto;
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
     h1{

     }

     main {
         border: 1px solid grey;
         border-radius: 5px;
         width: clamp(25ch, 50%, 75ch);
         margin: 1rem auto;
         padding: 2rem;
     }
     img{
         width: 10rem;
         cursor: pointer;
     }
     .divider {
         margin: 1rem 0;
     }
     .divider::before, .divider::after{
         content:'----';
         align-self: center;
     }
     .signup-link {
         margin-top: .5rem;
         color: $primary-color;
         font-size: $fs-small;
         cursor: pointer;
     }
     .error-msg {
         color: $color-danger;
         width: 28ch;
         font-size: $fs-small;
         margin: .25rem 0;
     }

     .google-login {
         margin: 2rem 0;
        display: flex;
        transition: all .2s ease;
        cursor:pointer;
     }
     .google-login:hover {
       transform: scale(1.1);
     }

     .google-login img{
         margin-right: .5rem;
         height: 3rem;
         width: 3rem;
         
        }
        .strike{
            margin-top: 1rem;
        }


 </style>