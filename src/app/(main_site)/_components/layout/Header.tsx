import Link from "next/link";
import Image from "next/image";

import NavigationHeader from "./NavigationHeader";
import CustomWidthWrapper from "@/components/wrappers/CustomWidthWrapper";

const Header = () => {
  return (
    <header className="py-4 border-b border-neutral-200">
      <CustomWidthWrapper>
        <nav className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/thanka_digital_logo.svg"
              alt="Thanka Digital logo"
              className="w-10 h-10 md:w-14 md:h-12"
              width={40}
              height={40}
            />
          </Link>
          <NavigationHeader />
        </nav>
      </CustomWidthWrapper>
    </header>
  );
};

export default Header;
