<script>
	import { page } from '$app/stores';
	import authStore from '../../../../stores/authStore';
	import DropdownMenu from '$lib/Components/UI/DropdownMenu.svelte';
	import Avatar from '$lib/Pages/Auth/Avatar.svelte';
	import UserAvatar from '$lib/Pages/Auth/UserAvatar.svelte';
</script>

<nav class="menu-controller">
	<a aria-current={$page.path === '/' ? 'page' : undefined}  href="/">Home</a>
	<a aria-current={$page.path === '/about' ? 'page' : undefined}  href="/about">About</a>
	<a aria-current={$page.path === '/recipe' ? 'page' : undefined}  href="/recipe">Recipe</a>
	{#if !$authStore.isLoggedIn}
		<DropdownMenu left="-120px">
			<span slot="dropdown">
				<a href="/auth">
                 <Avatar/>
				 </a>
			</span>
			<span slot="menu">
				<a href="/auth" class="dropdown-link">SignIn</a>
			</span>
		</DropdownMenu>
	{:else}
		<DropdownMenu left="-120px">
			<span slot="dropdown">
				<UserAvatar/>
			</span>
			<span slot="menu">
				<a href="/profile" class="dropdown-link">Profile</a>
				<a href="/auth/logout" class="dropdown-link">Logout</a>
			</span>
		</DropdownMenu>
	{/if}
</nav>

<style lang="scss">
	@import '../../../../styles/vars';
	.menu-controller {
		text-transform: uppercase;
		color: $text-bg-primary;
		display: none;
		align-self: center;
		a {
			align-self: center;
			&:hover {
				color: $text-bg-primary-hover;
				text-decoration: none;
			}
			
			&:not(:last-child) {
				margin-right: 0.5rem;
			}
		}
	}
	@media (min-width: 640px) {
		.menu-controller {
			display: flex;
		}
	}
	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100%);
		height: 2px;
		background-color: $primary-color-dark;
		display: block;
		bottom: -18px;
	}


</style>
