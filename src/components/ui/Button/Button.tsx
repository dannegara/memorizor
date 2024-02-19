import { MouseEventHandler, PropsWithChildren } from "react";
import { Button as AntdButton } from "antd";

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "submit";
  className?: string;
}

const Button = ({
  children,
  type,
  className,
  onClick,
}: PropsWithChildren<ButtonProps>) => {
  return (
    <AntdButton
      type="primary"
      className={className}
      onClick={onClick}
      htmlType={type}
    >
      {children}
    </AntdButton>
  );
};

export default Button;
