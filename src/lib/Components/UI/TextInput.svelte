<script>
 
  export let id;
  export let label;
  export let rows = null;
  export let value;
  export let name;
  export let type = 'text';
  export let invalid = false;
  export let errorMessage = ''; //empty string is treated as not true
  export let placeholder=''
  export let touched = false;

export let min = 1;
export let max = 100;
</script>
 <!--on:blur={() => (touched = true)}
Instead of this we are using touched from svelte-forms-lib
-->
<div class="form-control">
  <label for={id}>{label}</label>
  {#if type === 'textarea'}
    <textarea
      class:invalid={invalid && touched}
      {rows}
      {id}
      {placeholder}
      {name}
      on:input
      bind:value
      on:blur={() => (touched = true)}
    />
    {:else if type === 'number'} 
    <input
    class:invalid={invalid && touched}
    {type}
    {id}
    {value}
    {name}
    {min}
    {max}
    on:input
    on:blur={() => (touched = true)}
/>
  {:else}
    <input
      class:invalid={invalid && touched}
      {type}
      {id}
      {value}
      {name}
      {placeholder}
      on:input
      on:blur={() => (touched = true)}
    />
  {/if}
  <!-- // when {type} is set dynamically then bind:value cannot be used
  in input however the same can be used in textarea
and  
     {value}
      on:input
    can be replaced by
    bind:value={value}
    which can be further replaced by
    bind:value
    -->
  {#if errorMessage && invalid && touched}
    <div class="error-msg">{errorMessage}</div>
  {/if}
</div>

<style lang="scss">
 @import '../../../styles/vars';
  input,
  textarea {
    display: block;
    width: 100%;
    font: inherit;
    border: none;
    border-bottom: 2px solid $button-disabled-background;
    border-radius: 3px 3px 0 0;
    background: $text-bg-primary;
    padding: 0.25rem 0.25rem;
    transition: border-color 0.1s ease-out;
  }

  input:focus,
  textarea:focus {
    border-color: $secondary-color;
    outline: none;
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
  .invalid {
    border-color: $color-error;
    background: $color-danger-tertiary;
  }
  .error-msg {
         color: $color-danger;
         width: 28ch;
         font-size: $fs-small;
         margin: .25rem 0;
     }
</style>
