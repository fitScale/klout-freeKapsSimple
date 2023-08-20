import Link from "next/link";
import Svg from "../../../public/svgs/svgComponent/svg.component";
import style from "./PageRedirect.module.css";

export interface PageRedirectProps {
  heading: string;
  notFound?: boolean;
}

const PageRedirect = ({
  pageRedirectConfig,
}: {
  pageRedirectConfig: PageRedirectProps;
}) => {
  return (
    <div className={style.container}>
      <h1>
        {pageRedirectConfig.heading} -{" "}
        {pageRedirectConfig.notFound && (
          <span className="underline">PAGE NOT FOUND!</span>
        )}
      </h1>
      <Link href="/">
        <div className={style.button}>
          <p>BACK TO SHOP</p>
          <Svg icon="ArrowIcon" color="black" />
        </div>
      </Link>
    </div>
  );
};

export default PageRedirect;
