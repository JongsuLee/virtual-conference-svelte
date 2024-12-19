<script lang="ts">
  import "/src/style/index.css";
  import type { StreamFrameProps } from "../../types/props";
  import { onMount } from "svelte";

  const { id, classList, options }: StreamFrameProps = $props();
  const { childNode, childNodeOptions } = options;
  let streamFrame: HTMLDivElement;
  let base = $state(0);

  onMount(() => {
    const width = streamFrame.clientWidth;
    const height = streamFrame.clientHeight;
    base = width >= height ? height : width;
  });
</script>

<style>
  .stream-frame {
    width: var(--width, 100%);
    height: var(--height, 100%);
  }
  .profile-image {
    width: var(--profile-width);
    height: var(--profile-height);
  }
</style>

<div
  {id}
  class={`stream-frame ${classList.reduce((result, value) => `${result}${value} `, "")}`}
  style={`${options.width ? `--width: ${options.width}px;` : ""} ${options.height ? `--height: ${options.height}px;` : ""}`}
  bind:this={streamFrame}
>
  <div class={`profile-frame ${options.isCameraOn ? "off" : "on"}`}>
    <div class="profile-image" style={`${base ? `--profile-width: ${(base * 3) / 5}px; --profile-height: ${(base * 3) / 5}px` : ""}`}></div>
  </div>
  <video class={`stream-video ${options.isCameraOn ? "on" : "off"}`} />
  {@render childNode(childNodeOptions)}
</div>
