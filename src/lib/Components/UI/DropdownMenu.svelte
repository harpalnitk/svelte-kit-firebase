<script>
	import Button from '$lib/Components/UI/Button.svelte';
	export let left = '-50px';
    let dropdown;
    const hideDropdown = ()=>{
        dropdown.style.display = 'none';
    }
    function handleMouseOver(e) {
        dropdown.style.display = 'block';
	}
	function handleMouseOut(e) {
        dropdown.style.display = 'none';
	}
</script>

<div class="dropdown" aria-haspopup="true"
on:mouseover={handleMouseOver} on:mouseout={handleMouseOut}>
	<slot name="dropdown"><Button>Dropdown</Button></slot>
	<div class="arrow tooltip">hello</div>
	<span class="dropdown-content" 
    aria-label="submenu" 
    style="left:{left}"
     on:click="{hideDropdown}"
  
     bind:this={dropdown}>
		<slot name="menu">
			<a href="#" class="dropdown-link">Link 1</a>
			<a href="#" class="dropdown-link">Link 2</a>
			<a href="#" class="dropdown-link">Link 3</a>
		</slot>
	</span>
</div>

<style lang="scss">
	@import '../../../styles/vars';
	/* The container <div> - needed to position the dropdown content */

	.dropdown {
		position: relative;
		display: inline-block;
		--tooltip-arrow-height: 10px;
        --tooltip-arrow-width: 10px;
	}

	/* Dropdown Content (Hidden by Default) */
	.dropdown-content {
		display: none;
		position: absolute;
		width: clamp(18ch, 20%, 25ch);
		background-color: var(--primary-color);
		background: linear-gradient(
			180deg,
			var(--primary-color) 0%,
			var(--secondary-color) 10.45%,
			var(--tertiary-color) 41.35%
		);

		box-shadow: 0px 8px 16px 0px $anchor-box-shadow;
		z-index: 1;
	}
	.arrow {
		display: none;
		height: var(--tooltip-arrow-height);
		background-color: var(--primary-color);
	}

	/* Links inside the dropdown 
    SHITED TO APP.SCSS FILE
    */
	// .dropdown-content a{
	// 	color: $text-bg-primary-dark;
	// 	padding: 12px 16px;
	// 	text-decoration: none;
	// 	display: block;
	// }

	/* Change color of dropdown links on hover */
	.dropdown-content a:hover {
		background-color: var(--primary-color);
	}

	/* Show the dropdown menu on hover 
    .dropdown .dropdown-content:focus-within NEEDED FOR KEYBOARD TABS TO FUNCTION PROPERLY*/
	.dropdown:focus-within .dropdown-content,
	.dropdown:hover .dropdown-content,
	.dropdown .dropdown-content:hover {
		display: block;
	}

	/* Display arrow*/
	.dropdown:focus-within .arrow,
	.dropdown:hover .arrow,
	.dropdown .arrow:hover {
		display: block;
	}

	/* Change the background color of the dropdown button when the dropdown content is shown */
	.dropdown:hover .dropbtn {
		background-color: $secondary-color;
	}

	//For ARROW
	.tooltip {
		clip-path: polygon(
			0% var(--tooltip-arrow-height),
			calc(100% - 16px) var(--tooltip-arrow-height),
			calc(100% - 11px) 0%,
			calc(100% - 6px) var(--tooltip-arrow-height),
			100% var(--tooltip-arrow-height),
			100% 100%,
			0% 100%
		);
		font-size: 0;
	}
</style>
