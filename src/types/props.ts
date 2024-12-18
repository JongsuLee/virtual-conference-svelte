import type { Snippet } from "svelte";

interface ComponentProps {
  id: string;
  classList: string[];
  options?: { [key: string]: any };
}

interface ButtonProps extends ComponentProps {
  options: {
    content?: string;
    childNode?: Snippet;
    clickHandler: (e: MouseEvent) => any;
    mouseoverHandler?: () => any;
    mouseoutHandler?: () => any;
  };
}

interface ButtonsProps extends ComponentProps {
  buttons: ButtonProps[];
}

interface ModalProps extends ComponentProps {
  options: {
    childNode: Snippet<[{ [key: string]: any }]>;
    childNodeOptions: { [key: string]: any };
    modalOffHandler?: () => any;
    backgroundColor?: string;
  };
}

export type { ButtonProps, ButtonsProps, ModalProps };
