import { MouseEventHandler, PropsWithChildren } from "react";
import { Button as AntdButton } from "antd";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
}

const Button = ({
  children,
  type,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <AntdButton type="primary" onClick={onClick} htmlType={type}>
      {children}
    </AntdButton>
  );
};

export default Button;
