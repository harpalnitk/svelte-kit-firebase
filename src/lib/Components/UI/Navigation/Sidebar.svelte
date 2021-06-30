<script>
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
		<a href="/emoji-chat" on:click={closeSidebar}
		><span>Emoji-Chat</span><i class="fa fa-user-plus" /></a
	>
		<a href="/timeline" on:click={closeSidebar}
			><span>Timeline</span><i class="fa fa-user-plus" /></a
		>
		<a href="/product-filter" on:click={closeSidebar}
			><span>Product-Filter</span><i class="fa fa-user-plus" /></a
		>
		<a href="/skill-bars" on:click={closeSidebar}
			><span>Skill-Bars</span><i class="fa fa-user-plus" /></a
		>
		<a href="/full-page-tabs" on:click={closeSidebar}
			><span>Full-Page-Tabs</span><i class="fa fa-user-plus" /></a
		>
		<a href="/sort-table" on:click={closeSidebar}
		><span>Sort-Table</span><i class="fa fa-user-plus" /></a
	>
	<a href="/slideshow" on:click={closeSidebar}
	><span>Slideshow</span><i class="fa fa-user-plus" /></a
>
	<a href="/flip-box" on:click={closeSidebar}
	><span>Flip-Box</span><i class="fa fa-user-plus" /></a
>
<a href="/tree-view" on:click={closeSidebar}
><span>Tree-View</span><i class="fa fa-user-plus" /></a
>
	<a href="/autocomplete" on:click={closeSidebar}
	><span>Autocomplete</span><i class="fa fa-user-plus" /></a
>
		<a href="/dashboard" on:click={closeSidebar}
			><span>Dashboard</span><i class="fa fa-sign-in" /></a
		>
		<a href="/gallery" on:click={closeSidebar}
		><span>Slideshow Gallery</span><i class="fa fa-sign-in" /></a
	>
		<a href="/auth" on:click={closeSidebar}><span>Login</span><i class="fa fa-sign-in" /></a>
		<a href="/logout" on:click={closeSidebar}><span>Logout</span><i class="fa fa-sign-out" /></a>
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
		// height: 100%;
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
