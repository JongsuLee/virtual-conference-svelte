<script lang="ts">
  import "/src/style/index.css";
  import type { ModalProps } from "../../types/props";
  const { id, classList, options }: ModalProps = $props();
  const { childNode, childNodeOptions } = options;
</script>

<style>
  .modal-outer-frame {
    background-color: var(--background-color);
  }
</style>

<div
  class="modal-outer-frame"
  on:click={options.modalOffHandler ? options.modalOffHandler : null}
  style={`--background-color: ${options.backgroundColor ? options.backgroundColor : "rgba(0, 0, 0, 0.6)"}`}
>
  <div class={`modal-inner-frame ${classList.reduce((result, value) => `${result}${value} `, "")}`} {id}>
    {@render childNode(childNodeOptions)}
  </div>
</div>
