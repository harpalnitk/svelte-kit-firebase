<script>
	import authStore from '../../../../stores/authStore';
	import Hoverable from '$lib/components/Hoverable.svelte';
    import Avatar from '$lib/Pages/Auth/Avatar.svelte';
	import UserAvatar from '$lib/Pages/Auth/UserAvatar.svelte';
import {links} from '$lib/Pages/Auth/sideBarLinks';

	export let open = false;
	function closeSidebar() {
		open = !open;
	}
	
</script>

<aside class="navigation" class:open>
	<section class="header">
        {#if !$authStore.isLoggedIn}
        <span>
            <a href="/auth">
        <Avatar width='10vh'/>
            </a>
        </span>
		<svg class="half-circle" viewBox="0 0 106 57">
			<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
		  </svg>
        <span class='name'>Guest</span>
        {:else}
        <span>
            <UserAvatar width='10vh'/>
       </span>
	   <svg class="half-circle" viewBox="0 0 106 57">
		<path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
	  </svg>
       <span class='name'>Harpal Singh</span>
        {/if}
    </section>
	<ul>
		{#each links as link}
		{#if $authStore.isLoggedIn || link.auth}
		<Hoverable let:hovering>
			<li class="list" class:active={hovering} on:click={closeSidebar}>
				<b />
				<b />
				<a href="{link.path}">
					<span class="icon"><i class="{link.icon}" aria-hidden="true" /></span>
					<span class="title">{link.name}</span>
				</a>
			</li>
		</Hoverable>
		{/if}
		{/each}
	</ul>
</aside>

<style lang="scss">
	@import '../../../../styles/vars';

	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1000;
		//background-color: var(--primary-color);
		//min-height: 100%;
		//overflow-y: scroll;
	}
	.header {
		height: 20vh;
        display: grid;
	     grid-template-rows: 2fr 1fr 1fr;
        // gap: 1em;
        place-content: center;
		background: linear-gradient(
			48deg,
			$primary-color 0%,
			$secondary-color 25%,
			$tertiary-color 100%,
			
		);
		position: relative;
	}

    .header > * {
        place-self: center;
        color: $primary-color;
    }

    .name{
        font-weight: 700;
        box-shadow: 0 0 6px -2px rgba(0,0,0,0.5);
		margin-top: -8vh;
    }

	.half-circle {
  position: relative; // to position anywhere in the grid
//   bottom: 0;
//   left: 0;

  width: 13vh; // all below to change semi circle to semi circle arc
  margin-top: -10vh;

  fill: none;
  stroke: $primary-color;
  stroke-width: 8;
  stroke-linecap: round;
}

	.open {
		left: 0;
	}
	.navigation {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 20rem;
		max-width: 70vw;
		border-radius: 1rem;
		// border-left: 5px solid  $primary-color;
		box-sizing: initial;
		background: $primary-color;
	}
	.navigation ul {
		// position: absolute;
		// top: 0;
		// left: 0;
		position: relative;
		width: 100%;
		//padding-left: 5px;
		// padding-top: 1.5rem;
	}
	.navigation ul li {
		position: relative;
		width: 100%;
		list-style: none;
		border-top-left-radius: 1rem;
		border-bottom-left-radius: 1rem;
	}
	.navigation ul li.active {
		background: var(--primary-color);
		//background: transparent;
	}
	.navigation ul li b:nth-child(1) {
		position: absolute;
		top: -1rem;
		height: 1rem;
		width: 100%;
		background: var(--primary-color);
		display: none;
	}
	.navigation ul li b:nth-child(1)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: $primary-color;
		border-bottom-right-radius: 1rem;
	}
	.navigation ul li b:nth-child(2) {
		position: absolute;
		bottom: -1rem;
		height: 1rem;
		width: 100%;
		background: var(--primary-color);
		display: none;
	}
	.navigation ul li b:nth-child(2)::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
		background: $primary-color;
		border-top-right-radius: 1rem;
	}
	.navigation ul li.active b:nth-child(1),
	.navigation ul li.active b:nth-child(2) {
		display: block;
	}
	.navigation ul li a {
		position: relative;
		width: 100%;
		display: flex;
		text-decoration: none;
		color: $text-bg-primary;
	}
	.navigation ul li.active a {
		color: $text-bg-primary-dark;
	}
	.navigation ul li a .icon {
		position: relative;
		min-width: 3rem;
		height: 3rem;
		line-height: 3rem;
		text-align: center;
		display: block;
	}
	.navigation ul li a .icon i {
		font-size: 1em;
	}
	.navigation ul li a .title {
		position: relative;
		height: 3rem;
		line-height: 3rem;
		display: block;
		padding-left: 0.5rem;
		white-space: normal;
	}
</style>
