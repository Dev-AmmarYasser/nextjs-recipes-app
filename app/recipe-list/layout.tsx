import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className={`${inter.className}`}>{children}</div>;
};

export default layout;
