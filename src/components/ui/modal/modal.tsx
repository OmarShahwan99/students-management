import { Dialog, DialogProps } from "@mui/material";
import { ReactNode } from "react";

interface Props extends DialogProps {
  children: ReactNode;
  primaryBtn?: ReactNode;
  secondaryBtn?: ReactNode;
  maxWidth?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Modal = ({
  open,
  onClose,
  children,
  primaryBtn,
  secondaryBtn,
  maxWidth = "md",
  ...rest
}: Props) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth={maxWidth}
      {...rest}
    >
      {children}
    </Dialog>
  );
};

export default Modal;
