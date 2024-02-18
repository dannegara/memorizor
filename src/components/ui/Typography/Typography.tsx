import { PropsWithChildren } from "react";
import { Typography as AntdTypography } from "antd";

const Typography = ({ children }: PropsWithChildren) => {
  return <AntdTypography.Title>{children}</AntdTypography.Title>;
};

export default Typography;
