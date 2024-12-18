<script lang="ts">
  import "/src/style/index.css";
  import type { ButtonsProps } from "../../types/props";
  import Button from "./Button.svelte";
  const { id, classList, buttons }: ButtonsProps = $props();
</script>

<div {id} class={`buttons ${classList.reduce((result, value) => `${result}${value} `, "")}`}>
  {#each buttons as button}
    <Button id={button.id} classList={button.classList} options={button.options} />
  {/each}
</div>
