<script>
  import Logo from './Logo.svelte';
  import Hamburger from './Hamburger.svelte';
  import Menu from './Menu.svelte';

  export let sidebar = false;
  export let segment;
</script>

<header class="nav-controller">
  <nav class="flex">
    <Hamburger bind:open={sidebar} />
    <Logo />
  </nav>

  <Menu {segment}/>
</header>

<style lang="scss">
  @import '../../../../styles/vars';
  .nav-controller {
    height: 3rem;
    display: flex;

    color: $text-bg-primary;
    padding: 0.1rem 1rem;
    justify-content: space-between;
    background-color: $primary-color;
    box-shadow: 0 2px 6px $anchor-box-shadow;

    nav {
      display: flex;
      // align-self: center;
    }
  }
</style>
