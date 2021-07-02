<script>
		import authStore from '../../../../stores/authStore';
	export let open = false;
	function closeSidebar() {
		open = !open;
	}
</script>

<aside class="sidebar-controller" class:open>
	<nav>
		<a href="/" on:click={closeSidebar}><span>Home</span><i class="fa fa-info-circle" /></a>
		<a href="/about" on:click={closeSidebar}><span>About</span><i class="fa fa-info-circle" /></a>
		<a href="/contact" on:click={closeSidebar}>
			<!-- <span>Contact</span><i class="fa fa-handshake-o" /> -->
			<span>Contact</span><span style="color: transparent;text-shadow: 0 0 0 black; ">&#128222;</span>
		</a>
	
		{#if $authStore.isLoggedIn}
		<a href="/profile" on:click={closeSidebar}><span>Profile</span><i class="fa fa-sign-out" /></a>
		<a href="/auth/logout" on:click={closeSidebar}><span>Logout</span><i class="fa fa-sign-out" /></a>
		{:else}
		<a href="/auth" on:click={closeSidebar}><span>Login</span><i class="fa fa-sign-in" /></a>
		{/if}
	</nav>
</aside>

<style lang="scss">
	@import '../../../../styles/vars';
	aside {
		left: -100%;
		transition: left 0.3s ease-in-out;
		z-index: 1000;
	}

	.open {
		left: 0;
	}

	.sidebar-controller {
		width: auto;
		height: 100vh;
		box-shadow: 0 10px 15px -3px rgb(0 0 0 / 10%), 0 4px 6px -2px rgb(0 0 0 / 5%);
		position: absolute;
		background-color: $tertiary-color;
		nav {
			display: flex;
			flex-direction: column;
			align-items: flex-start;
			padding: 3rem;
			font-size: 1.25rem;
			a {
				display: flex;
				align-items: baseline;
				margin-bottom: 1rem;
				color: $text-bg-primary-dark;
				span {
					margin-right: 0.25rem;
				}
				&:hover {
					color: $text-bg-primary-dark-hover;
					transform: scale(1.1);
					transition: transform 0.2s ease;
				}
			}
		}
	}
</style>
