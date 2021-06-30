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

	//Initialize Firebase IMPORT
	import firebase from 'firebase/app';
	import 'firebase/auth';
	// AUTH STORE SET UP IMPORT
	import authStore from '../stores/authStore';

	import { onMount } from 'svelte';

	onMount(() => {
		//! This is done inside onMount
	firebase.auth().onAuthStateChanged((user)=>{
	authStore.set({
		isLoggedIn: user !==null,
		user,
		firebaseControlled: true
	});
	});
	});


</script>

<Header />

<main>
	<slot />
</main>

<footer>
	<p>My Footer</p>
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
