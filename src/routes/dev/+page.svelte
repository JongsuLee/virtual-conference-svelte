<script lang="ts">
  import Buttons from '../../components/common/Buttons.svelte';

</script>

<Buttons 
  id='practice-buttons'
  classList={[]}
  buttons={[
  {
    id: 'practice-button1',
    classList: ['practice-button', 'practice'],
    options: {
      clickHandler: () => {
        console.log('practice1 clicked')
      },
      content: 'button1'
    }
  },
  {
    id: 'practice-button2',
    classList: ['practice-button', 'practice'],
    options: {
      clickHandler: () => {
        console.log('practice2 clicked')
      },
      childNode: button2
    }
  },
  {
    id: 'practice-button3',
    classList: ['practice-button', 'practice'],
    options: {
      clickHandler: () => {
        console.log('practice3 clicked')
      },
      childNode: button3
    }
  },
]} />

{#snippet button2()}
  <div>image</div>
  <div>button2</div>
{/snippet}

{#snippet button3()}
  <div>image</div>
  <div>button3</div>
{/snippet}