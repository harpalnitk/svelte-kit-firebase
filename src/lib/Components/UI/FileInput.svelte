<script>
	import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();

export let id;
export let label;
export let name;
export let errorMessage;
export let maxFileSize = 1; // In MegaBytes
export let validFileType = '.jpg, .jpeg, .png';
export let showPreview = true;
let avatar;


const validateAndDispatch = (e)=>{
  let image = e.target.files[0];
  if(image){
    //console.log('File Size',image.size); // In Bytes
    const size = image.size / (maxFileSize * 1024 * 1024);
   // console.log('size in MegaBytes', size); // In MegaBytes

   // console.log('File Type',image.type);
    const fileExt = image.type.split('/')[1];
   // console.log('File Ext',fileExt);

    if(!(
        fileExt == 'jpeg' ||
        fileExt == 'jpg' ||
        fileExt == 'png'
      )){
        errorMessage = `Only files of type JPEG, JPG accepted`;
      return;
    }else if (size > maxFileSize || size <= 0) {
      errorMessage = `Max File Size allowed is ${maxFileSize} MegaBytes`;
      return;
    } else  {
     // console.log('e',e);
      dispatch('fileUploaded', image);
    }

    if(showPreview){
      let reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = e => {
                 avatar = e.target.result
            };
    }

   
  }

}
</script>

{#if showPreview && avatar}
<section>
  <img class="avatar" src="{avatar}" alt="Uploaded Image Preview" />
</section>
{/if}

  <main>
    <input
        on:change={validateAndDispatch}
        type="file"
        {name}
        {id}
        class='inputfile'
        accept={validFileType}
    />
    <label for={id}>Choose {label}</label>
    {#if errorMessage}
        <small class="error-message">{errorMessage}</small>
    {/if}
  </main>





<style lang="scss">
    @import '../../../styles/vars';

    main {
      display: flex;
      place-content: flex-start;
    }
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

  .error-message {
    color: $color-error;
    margin-left: 0.5rem;
    align-self: center;
  }

  .avatar{
		display:flex;
		height:50px;
		width:50px;
	}
</style>