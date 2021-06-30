<!-- <script context="module" lang="ts">
	//export const prerender = true;
	import { firestore } from "../firestore";
  export async function load({ page, fetch, session, context }) {
    const db = await firestore();
	const pubData = await db.collection("public").get();
	let privData;
    try {
		//SSR: this will fail on node server because user cannot be authenticated by node server;
       privData = await db.collection("private").get();
	  
    } catch (e) {
      console.log("should see bad permission error");
      console.log(e);
    }
    return {
      props: {
        publicData: pubData.docs.map((d) => {
			return d.data()}),
      },
    };
  }
</script> -->

<script lang="ts">
	// import Counter from '$lib/Counter/index.svelte';
	export let publicData = [];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<!-- <section>
<h1> Welcome</h1>
<ul>
	{#each publicData as item}
	  <li>{item.firstName} / {item.lastName}</li>
	{/each}
  </ul>
</section> -->

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
