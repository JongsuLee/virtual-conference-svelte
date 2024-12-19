<script lang="ts">
  import "/src/style/index.css";
  import type { ButtonProps } from "../../types/props";
  const { classList, id, options }: ButtonProps = $props();
</script>

<div
  {id}
  class={`button ${classList.reduce((result, value) => `${result}${value} `, "")}`}
  on:click={options.clickHandler}
  on:mouseover={options.mouseoverHandler ? options.mouseoverHandler : null}
  on:mouseout={options.mouseoutHandler ? options.mouseoutHandler : null}
>
  {#if options.content}
    {options.content}
  {/if}
  {#if options.childNode}
    {@render options.childNode(options.childNodeOptions ? options.childNodeOptions : {})}
  {/if}
</div>
