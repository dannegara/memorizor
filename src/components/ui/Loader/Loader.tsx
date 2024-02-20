import { Spin } from "antd";

interface LoaderProps {
  className?: string;
}

const Loader = ({ className }: LoaderProps) => {
  return <Spin className={className} />;
};

export default Loader;
