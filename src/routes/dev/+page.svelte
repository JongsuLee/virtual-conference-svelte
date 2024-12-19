<script lang="ts">
  import Button from "../../components/common/Button.svelte";
  import Buttons from "../../components/common/Buttons.svelte";
  import StreamFrame from "../../components/conference/StreamFrame.svelte";
  import { isCameraOn, isMicOn, isEffectOn } from "./stores";
</script>

<StreamFrame
  id=""
  classList={[]}
  options={{
    width: 480,
    height: 270,
    isCameraOn: $isCameraOn,
    isMicOn: $isMicOn,
    childNode: ConferenceStreamFrameStatus,
    childNodeOptions: { userName: "이종수", isCameraOn: $isCameraOn, isMicOn: $isMicOn },
  }}
/>

{#snippet DeviceSetStreamFrameButtons()}
  <div class="device-set-toggle-buttons">
    <Buttons
      id=""
      classList={[]}
      buttons={[
        {
          id: "device-set-camera-button",
          classList: ["device-set-toggle-button"],
          options: {
            childNode: Toggle,
            childNodeOptions: { content: `카메라 ${$isCameraOn ? "끄기" : "켜기"}`, direction: "down" },
            clickHandler: () => {
              $isCameraOn = !$isCameraOn;
            },
            mouseoverHandler: (e) => {
              const target = e.target as HTMLDivElement;
              const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

              toggle.classList.add("on");
            },
            mouseoutHandler: (e) => {
              const target = e.target as HTMLDivElement;
              const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

              toggle.classList.remove("on");
            },
          },
        },
        {
          id: "device-set-mic-button",
          classList: ["device-set-toggle-button"],
          options: {
            childNode: Toggle,
            childNodeOptions: { content: `마이크 ${$isMicOn ? "끄기" : "켜기"}`, direction: "down" },
            clickHandler: () => {
              $isMicOn = !$isMicOn;
            },
            mouseoverHandler: (e) => {
              const target = e.target as HTMLDivElement;
              const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

              toggle.classList.add("on");
            },
            mouseoutHandler: (e) => {
              const target = e.target as HTMLDivElement;
              const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

              toggle.classList.remove("on");
            },
          },
        },
      ]}
    />
    <Button
      id="device-set-effect-button"
      classList={["device-set-toggle-button"]}
      options={{
        childNode: Toggle,
        childNodeOptions: { content: `효과 ${$isEffectOn ? "끄기" : "켜기"}`, direction: "down" },
        clickHandler: () => {
          $isEffectOn = !$isEffectOn;
        },
        mouseoverHandler: (e) => {
          const target = e.target as HTMLDivElement;
          const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

          toggle.classList.add("on");
        },
        mouseoutHandler: (e) => {
          const target = e.target as HTMLDivElement;
          const toggle = target.id ? target : (target.parentElement as HTMLDivElement);

          toggle.classList.remove("on");
        },
      }}
    />
  </div>
  {#snippet Toggle({ content, direction }: { [key: string]: any })}
    <div class="toggle-button-image"></div>
    <div class="description-frame">
      <div class="description-content">{content}</div>
      <div class={`description-dummy ${direction}`}></div>
    </div>
  {/snippet}
{/snippet}

{#snippet ConferenceStreamFrameStatus({ userName, isCameraOn, isMicOn }: { [key: string]: any })}
  <div class="conference-stream-status-frame">
    <div class={`video-status-frame device-status-frame ${isCameraOn ? "on" : "off"}`}>
      <div class="device-status-image"></div>
    </div>
    <div class={`audio-status-frame device-status-frame ${isMicOn ? "on" : "off"}`}>
      <div class="device-status-image"></div>
      <div class="equalizer-frame">
        <div class="equalizer"></div>
        <div class="equalizer"></div>
        <div class="equalizer"></div>
        <div class="equalizer"></div>
        <div class="equalizer hidden"></div>
      </div>
    </div>
    <div class="conference-stream-user-name">{userName}</div>
  </div>
{/snippet}
