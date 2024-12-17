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
    clickHandler: () => any;
    mouseoverHandler?: () => any;
    mouseoutHandler?: () => any;
  };
}

interface ButtonsProps extends ComponentProps {
  buttons: ButtonProps[];
}

export type { ButtonProps, ButtonsProps };
