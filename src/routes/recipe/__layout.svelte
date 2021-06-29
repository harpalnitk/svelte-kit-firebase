<script>
    // Since here we are using a spearate layout thus we have to initialze firebase here also
import { initFirebase } from "../../initFirebase";
export async function load({ page, fetch, session, context }) {
  await initFirebase();
  return {
    props: {},
  };
}
</script>


    <h1>Recipe App</h1>
    <slot></slot>
