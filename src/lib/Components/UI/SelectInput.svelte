<script>
    export let selectedVal;
    export let items;
    export let name;
    export let id;
    export let label;
    export let invalid = false;
  export let validityMessage = ''; //empty string is treated as not true
  let touched = false;
</script>
<div class="form-control">
     <label for={id}>{label}</label>
    <select name={name} id={id} 
    bind:value={selectedVal}
    on:blur={() => (touched = true)}
    on:change>
        <option value="" disabled selected>Select {label}</option>
        {#each items as item}
            <option value={item}>{item}</option>
        {/each}
    </select>
    {#if validityMessage && invalid && touched}
    <p class="error-message">{validityMessage}</p>
  {/if}
</div>


<style lang="scss">
    @import '../../../styles/vars';
    	select {
  padding: 0.25rem 0.25rem;
  font: inherit;
  border: 1px solid $text-bg-primary;
  float: left;
  width: 100%;
  background: $text-bg-primary;
  &:focus{
    border: 1px solid $secondary-color;
    box-shadow: 0 0 3px $secondary-color;
    outline-offset: 0px;
    outline: none;
  }
	}

    label {
    display: block;
    margin-bottom: 0.5rem;
    width: 100%;
  }

  .form-control {
    padding: 0.5rem 0;
    width: 100%;
    margin: 0.25rem 0;
  }
  .error-message {
    color: $color-error;
    margin: 0.25rem 0;
  }
</style>

