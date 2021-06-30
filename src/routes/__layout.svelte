<script context="module" lang="ts"> // THIS WILL RUN BOTH ON SERVER AND CLIENT
	import { initFirebase } from "../initFirebase";
	export async function load({ page, fetch, session, context }) {
	  await initFirebase();
	  return {
		props: {},
	  };
	}
  </script>

<script lang="ts">
	import Header from '$lib/Header/index.svelte';
	import '../app.scss';
	import Navbar from '$lib/components/UI/Navigation/Navbar.svelte';
	import Sidebar from '$lib/components/UI/Navigation/Sidebar.svelte';

	//Initialize Firebase IMPORT
	import firebase from 'firebase/app';
	import 'firebase/auth';
	// AUTH STORE SET UP IMPORT
	import authStore from '../stores/authStore';

	import { onMount } from 'svelte';

	onMount(() => {
		//! This is done inside onMount
	firebase.auth().onAuthStateChanged((user)=>{
		console.log('Auth State changed in the Layout File')
	authStore.set({
		isLoggedIn: user !==null,
		user,
		firebaseControlled: true
	});
	});
	});
	let open= false;
  //The framework give value of url{/about, /page} to this variable
  export let segment;

</script>

<!-- <Header /> -->
<Sidebar bind:open/>
<Navbar bind:sidebar={open} {segment}/>

<main>
	<slot />
</main>

<footer>
	<p>All rights reserved. Lotus Corporation</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
