import type { Snippet } from "svelte";

interface ComponentProps {
  id: string;
  classList: string[];
  options?: { [key: string]: any };
}

interface ButtonProps extends ComponentProps {
  options: {
    content?: string;
    childNode?: Snippet<[{ [key: string]: any }]>;
    childNodeOptions?: { [key: string]: any };
    clickHandler: (e: MouseEvent) => any;
    mouseoverHandler?: (e: MouseEvent) => any;
    mouseoutHandler?: (e: MouseEvent) => any;
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

interface StreamFrameProps extends ComponentProps {
  options: {
    width?: number;
    height?: number;
    isCameraOn: boolean;
    isMicOn: boolean;
    childNode: Snippet<[{ [key: string]: any }]>;
    childNodeOptions: { [key: string]: any };
  };
}

export type { ButtonProps, ButtonsProps, ModalProps, StreamFrameProps };
