<script lang="ts">
  import Button from "../../components/common/Button.svelte";
  import Buttons from "../../components/common/Buttons.svelte";
  import Modal from "../../components/common/Modal.svelte";
  import { isModalOn } from "./stores";

  $effect(() => {
    console.log("isModalOn::", $isModalOn);
  });
</script>

{#if $isModalOn}
  <Modal
    id=""
    classList={[]}
    options={{
      modalOffHandler: () => {
        $isModalOn = !$isModalOn;
      },
      childNode: modal,
      childNodeOptions: {
        header: "header",
        body: "body",
        footer: {
          button1: {
            id: "footer-button1",
            classList: ["footer-button"],
            options: {
              clickHandler: (e: MouseEvent) => {
                e.stopPropagation();
                $isModalOn = !$isModalOn;
                console.log("clicked button1", $isModalOn);
              },
              content: "확인",
            },
          },
          button2: {
            id: "footer-button2",
            classList: ["footer-button"],
            options: {
              clickHandler: (e: MouseEvent) => {
                e.stopPropagation();
                $isModalOn = !$isModalOn;
                console.log("clicked button2", $isModalOn);
              },
              content: "취소",
            },
          },
        },
      },
    }}
  />
{/if}

<Buttons
  id="practice-buttons"
  classList={[]}
  buttons={[
    {
      id: "practice-button1",
      classList: ["practice-button", "practice"],
      options: {
        clickHandler: () => {
          console.log("practice1 clicked");
        },
        content: "button1",
      },
    },
    {
      id: "practice-button2",
      classList: ["practice-button", "practice"],
      options: {
        clickHandler: () => {
          console.log("practice2 clicked");
        },
        childNode: button2,
      },
    },
    {
      id: "practice-button3",
      classList: ["practice-button", "practice"],
      options: {
        clickHandler: () => {
          console.log("practice3 clicked");
        },
        childNode: button3,
      },
    },
  ]}
/>

{#snippet button2()}
  <div>image</div>
  <div>button2</div>
{/snippet}

{#snippet button3()}
  <div>image</div>
  <div>button3</div>
{/snippet}

{#snippet modal(modalOptions: { [key: string]: any })}
  <div>{modalOptions["header"]}</div>
  <div>{modalOptions["body"]}</div>
  <Buttons
    id=""
    classList={[]}
    buttons={[
      { id: modalOptions["footer"]["button1"]["id"], classList: modalOptions["footer"]["button1"]["classList"], options: modalOptions["footer"]["button1"]["options"] },
      { id: modalOptions["footer"]["button2"]["id"], classList: modalOptions["footer"]["button2"]["classList"], options: modalOptions["footer"]["button2"]["options"] },
    ]}
  />
{/snippet}
