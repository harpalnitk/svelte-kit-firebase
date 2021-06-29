<script>
export let id;
export let label;
export let name;
export let invalid = false;
export let errorMessage;
</script>



  
    <input
        on:change
        class:invalid={invalid}
        type="file"
        {name}
        {id}
        class='inputfile'
    />
    <label for={id}>Choose {label}</label>
    {#if errorMessage}
        <small class="error-message">{errorMessage}</small>
    {/if}




<style lang="scss">
    @import '../../../styles/vars';
  //     label {
  //   display: block;
  //   margin-bottom: 0.5rem;
  //   width: 100%;
  // }

  // .form-control {
  //   padding: 0.5rem 0;
  //   width: 100%;
  //   margin: 0.25rem 0;
  // }

  input[type='file']{
    width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
  }
  input[type='file'] + label {
  font: inherit;
  color: white;
  background-color: $primary-color;
  display: inline-block;
  padding: 0.5em 1em;
  opacity: 1;
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
  box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.3);
  margin: 0.4rem 0.2rem;
  letter-spacing: 0.06em;
  position: relative;
  overflow: hidden;
}
input[type='file'] + label:hover {
  opacity: 0.9;
}
input[type='file'] + label {
  cursor: pointer; /* "hand" cursor */
}
input[type='file']:active + label {
  opacity: 1;
  transform: scale(0.9);
  outline: 1px dotted $secondary-color;
  outline: -webkit-focus-ring-color auto 5px;
}

// using FastClick (a library for eliminating the 300ms
//tap-pause on touch-capable devices) and have
// plans to add some extra markup to the content of
//a label, the button won’t work as it should,
// unless you use pointer-events: none, respectively
input[type='file'] + label * {
  pointer-events: none;
}

  .invalid {
    border-color: $color-error;
    background: $color-danger-tertiary;
  }
  .error-message {
    color: $color-error;
    margin: 0.25rem 0;
  }
</style>