import { PropsWithChildren } from "react";
import styles from "./layout.module.css";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className={styles.Layout}>{children}</div>;
};

export default Layout;
