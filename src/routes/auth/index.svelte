<script lang='ts'>
    import firebase from 'firebase/app';
    import TextInput from '$lib/Components/UI/TextInput.svelte';
    import Button from '$lib/Components/UI/Button.svelte';
      //validation
  import { isEmpty, isValidEmail } from '$lib/helpers/validation.js';

async function loginWithGoogle(){
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider);
    } catch (e) {
        console.log('Error in sign in with Google', e);
    }
}

let email= '';
let password= ''
$: emailValid = !isEmpty(email) && isValidEmail(email);
$: passwordValid = !isEmpty(password);
$: formValid = emailValid && passwordValid;
$: console.log(emailValid);

const loginWithEmailAndPassword = async () => {
    try {
        console.log(`Email: ${email} Password: ${password}`);
        await firebase.auth().signInWithEmailAndPassword(email, password);
    } catch (e) {
        console.log('Error in sign in with Google', e);
    }  
}
</script>
<main>
    <section>
        <h1>Login With Google</h1>
        <img 
        src="sign-in-google.png"
         alt="Login With Google"
         on:click="{loginWithGoogle}"/>
    </section>
    <section>
        <span class='divider'>
            OR
        </span>
    </section>
    <section>
        <form on:submit|preventDefault={loginWithEmailAndPassword}>
            <TextInput
            value={email}
            on:input={(event) => (email = event.target.value)}
            invalid={!emailValid}
            label='Email'
            name='email'
            id='email'
            type='email'
            placeholder='Email'
            errorMessage='Email is required'
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
        errorMessage='Password is required'
    />
    <Button type="submit" size='small' disabled={!formValid}>Submit</Button>
        </form>
    </section>
    <pre>
        Email: {email}
        Password: {password}
    </pre>

</main>


 <style>
     main, section{
         display: flex;
         flex-direction: column;
         justify-content: center;
         align-items: center;
     }
     img{
         width: 10rem;
         cursor: pointer;
     }
     .divider::before{
         content:'----';
         align-self: center;
     }
 </style>