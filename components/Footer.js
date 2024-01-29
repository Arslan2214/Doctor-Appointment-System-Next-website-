import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-1 justify-between items-center bg-sky-50/60 shadow-[inset_0_1px_2px_2px_#e2e1e1] text-sm px-2 sm:px-10 lg:px-20 py-8">
        <div>
          <p>
            &copy; Copyright <span className="font-bold">ARslan.</span> All
            Rights Reserved
          </p>
          <p className="sm:text-start text-center">
            Developed by{" "}
            <Link
              className="font-semibold text-blue-400 hover:underline underline-offset-2"
              href="https://github.com/Arslan2214"
              target="_blank"
            >
              ARslan Ahmad
            </Link>
            .
          </p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <FooterIcon icon="@" href="#herosection" />
          <FooterIcon icon="@" href="#herosection" />
          <FooterIcon icon="@" href="#herosection" />
          <FooterIcon icon="@" href="#herosection" />
        </div>
      </div>
    </>
  );
};

const FooterIcon = (props) => {
  return (
    <>
      <Link
        className="rounded-full bg-blue-500/80 hover:bg-blue-500 px-3 py-2 text-white"
        href={props.href}
      >
        {props.icon}
      </Link>
    </>
  );
};

export default Footer;
