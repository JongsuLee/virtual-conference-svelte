<script lang="ts">
  import '/src/style/index.css'
  import Button from "../../components/common/Button.svelte";

</script>

<Button id='practice-button' classList={['practice-button', 'hello']} options={{clickHandler: () => {console.log('clicked')}, childNode: childNode, content: 'content1', mouseoverHandler: () => {console.log('mouseover')}, mouseoutHandler: () => {console.log('mouseout')}}}>
</Button>
{#snippet childNode()}
  <div>image</div>
  <div>content2</div>
{/snippet}