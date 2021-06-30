<!--  Since in Add recipe we are using a different layout -->
<script context="module" lang="ts"> // THIS WILL RUN BOTH ON SERVER AND CLIENT
	import { initFirebase } from "../../../initFirebase";
	export async function load({ page, fetch, session, context }) {
	  await initFirebase();
	  return {
		props: {},
	  };
	}
  </script>

<script lang="ts">
import Button from '$lib/Components/UI/Button.svelte';
import TextInput from '$lib/Components/UI/TextInput.svelte';
import SelectInput from '$lib/Components/UI/SelectInput.svelte';
import FileInput from '$lib/Components/UI/FileInput.svelte';




	import { goto } from '$app/navigation';
	import * as yup from 'yup';
	import { createForm } from 'svelte-forms-lib';
	import authStore from '../../../stores/authStore';
	import { createRecipe } from '../../../db';
	//import '../../../yup'; //not needed as file validation done by us

	authStore.subscribe(async ({ isLoggedIn, firebaseControlled }) => {
		if (!isLoggedIn && firebaseControlled) {
			await goto('/auth');
		}
	});

	const schema = yup.object().shape({
		title: yup.string().required().min(4).max(50),
		description: yup.string().required().min(10).max(1000),
		ingredients: yup
			.array()
			.min(1)
			.max(10)
			.of(
				yup.object().shape({
					name: yup.string().required().min(2).max(10),
					units: yup.mixed().oneOf(['none', 'ounces', 'cups', 'pounds']),
					amount: yup.number().min(1).max(30000)
				})
			),
		mainPicture: yup
			.mixed()
			.required('Picture Required')
		// 	.fileMax({
		// 		maxBytes: 1000,
		// 		message: 'Max Image size is 1MB'
		// 	})
		// 	.fileFormat({
		// 		formats: ['image/gif', 'image/jpeg', 'image/png'],
		// 		message: 'Images can only be png, gif, jpg'
		// 	})
	});

	//form and errors are stores and handleChange and handleSubmit are callback functions
	// updateValidateField function required only for file uploads
	const {
		form,
		errors,
		isValid,
		isSubmitting,
		handleChange,
		handleSubmit,
		// updateValidateField
	} = createForm({
		initialValues: {
			title: '',
			description: '',
			ingredients: [
				{
					name: '',
					units: 'none',
					amount: 1
				}
			],
			mainPicture: null
		},
		validationSchema: schema,
		onSubmit: async (values) => {
			try {
				console.log('Inside onSubmit in index.svelte');
				await createRecipe(values, $authStore.user.uid);
				alert('Saved Recipe');
			} catch (e) {
				alert('error saving');
				console.log(e);
			}
		}
	});

	const addIngredient = () => {
		$form.ingredients = $form.ingredients.concat({
			name: '',
			units: 'none',
			amount: 1
		});
		$errors.ingredients = $errors.ingredients.concat({
			name: '',
			units: '',
			amount: ''
		});
	};
	const removeIngredient = (index: number) => {
		$form.ingredients = $form.ingredients.filter((i, j) => j !== index);
		$errors.ingredients = $errors.ingredients.filter((i, j) => j !== index);
	};

	let units = ['None','Pounds','Ounces','Cups'];

	//$: console.log('$touched',$touched);
	$: console.log('$isSubmitting',$isSubmitting);
</script>

<main>
	<h1>Add Recipe</h1>
</main>

<section>
	<form on:submit={handleSubmit}>
		
			<TextInput
				on:input={handleChange}
				bind:value={$form.title}
				invalid= {$errors.title.length > 0}
				name="title"
				id="title"
				label='Title'
				placeholder="Recipe Title"
				errorMessage={$errors.title ? $errors.title : ''}
			/>
		

			<TextInput
				on:input={handleChange}
				bind:value={$form.description}
				invalid={$errors.description.length > 0}
				type="textarea"
				name="description"
				id="description"
				label='Description'
				placeholder="Recipe Description"
				rows=2
				errorMessage={$errors.description ? $errors.description : ''}
			/>
	<!-- invalid={$errors.mainPicture.length > 0} -->

			<FileInput
				on:fileUploaded={(event)=>{$form.mainPicture = event.detail; $errors.mainPicture = '';}}
				name="mainPicture"
				id="mainPicture"
				label='MainPicture'
				errorMessage={$errors.mainPicture ? $errors.mainPicture : ''}
			/>

		
		
		<div class="row ingredient-row">
			<h2>Ingredients</h2>
			<Button type="button" size='small' color={isValid ? null : 'success'} on:click={addIngredient}>Add Ingredient</Button>
		</div>
		{#if typeof $errors.ingredients === 'string' && !$errors.ingredients.includes('[')}
		<div class="error">{$errors.ingredients}</div>
	     {/if}
		
		 {#each $form.ingredients as ingredient, i}
		 <div class='ingredient-input-row'>
					 <TextInput
						 on:input={handleChange}
						 bind:value={$form.ingredients[i]['name']}
						 invalid={$errors.ingredients[i] &&
							 $errors.ingredients[i]['name'] &&
							 $errors.ingredients[i]['name'].length > 0}
						 label='Name'
						 name={`ingredients[${i}].name`}
						 id={`ingredients_${i}_name`}
						 placeholder="Name"
						 errorMessage={($errors.ingredients[i] && $errors.ingredients[i]['name'])? $errors.ingredients[i]['name'] : ''}
					 />
					 <SelectInput
						 on:change={handleChange}
						 bind:selectedVal={$form.ingredients[i]['units']}
						 name={`ingredients[${i}].units`}
						 id={`ingredients_${i}_units`}
						 label='Units'
						 items={units}
					 />
					 <TextInput
						 on:input={handleChange}
						 bind:value={$form.ingredients[i]['amount']}
						 invalid={$errors.ingredients[i] &&
							 $errors.ingredients[i]['amount'] &&
							 $errors.ingredients[i]['amount'].length > 0}
						 type="number"
						 label='Amount'
						 min = 1
						 max = 300000
						 name={`ingredients[${i}]amount`}
						 id={`ingredients_${i}_amount`}
						 errorMessage={$errors.ingredients[i] && $errors.ingredients[i]['amount'] ? $errors.ingredients[i]['amount'] : ''}
					 />
              <div>
				 <i class="fas fa-trash" on:click={() => removeIngredient(i)} />
			 </div>
		 </div>
	 {/each}


			<Button on:click={handleSubmit} color="success" disabled={!$isValid}>
	{#if $isSubmitting}
	   Loading...
	   {:else}
	   Submit
	{/if}
	</Button>

	</form>
</section>

<div>
	<h2>Form</h2>
	<pre>
          {JSON.stringify($form, null, 2)}
      </pre>
</div>
<div>
	<h2>Errors</h2>
	<pre>
          {JSON.stringify($errors, null, 2)}
      </pre>
</div> -->


<style>
	.fa-trash {
		margin-top: 35px;
		color: rgb(254, 131, 131);
		cursor: pointer;
		font-size: 25px;
	}

	section {
		padding: 1rem;
	}

	.col {
		display: flex;
		flex-direction: column;
	}
	.row {
		display: flex;
	}
	.ingredient-row{
justify-content: space-between;
	}
     .ingredient-input-row{
		 display: grid;
		 grid-template-columns: 5fr 4fr 2fr 1fr;
		 grid-template-rows: auto;
		 gap: 1em;
	 }
	.error {
		color: rgb(254, 131, 131);
	}

</style>
