import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-skin-black py-12">
      <div className="container flex flex-wrap  gap-4 justify-between items-start">
        <div className="lg:max-w-[50%] space-y-4">
          <h2 className="text-[2rem] font-bold text-white">Pick</h2>
          <p className="text-base text-white lg:text-lg font-normal">
            Impreuna reinventam loialitatea la PICK! Atrageti mai multi clienti
            si pastrati-i aproape cu recompense personalizate. La fiecare
            vizita, colectarea de stampile deschide porti catre recompense si
            experiente unice. Impreuna, construim o comunitate vibranta unde
            fiecare interactiune conteaza si aduce beneficii tuturor.
          </p>
          <p className="text-base text-white lg:text-lg font-bold">
            contact@pick.coupons
          </p>
        </div>
        <div className="flex flex-wrap items-start gap-8 lg:gap-20">
          <div className="space-y-4">
            <h4 className="text-sm text-white/70">Legal</h4>
            <ul className="flex  flex-col gap-y-3">
              <li>
                <Link className="text-sm font-normal text-white" href={"/"}>
                  Termeni si conditii
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal text-white" href={"/"}>
                  Politica de confidentialitate
                </Link>
              </li>
              <li>
                <Link className="text-sm font-normal text-white" href={"/"}>
                  Politica de cookieuri
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm text-white/70">Contacteaza-ne</h4>
            <ul className="flex  flex-col gap-y-3">
              <li className="text-sm font-normal text-white">
                Termeni si conditii
              </li>

              <li className="text-sm  font-normal text-white">
                Made with ❤️ in Romania
              </li>
            </ul>
          </div>
        </div>
        <div
          className="h-[1px] my-3 w-full"
          style={{
            background:
              "linear-gradient(270deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.50) 51.16%, rgba(255, 255, 255, 0.10) 100.23%)",
          }}
        ></div>
        <div className="flex w-full flex-wrap justify-between  items-center">
          <p className="text-xs md:text-sm text-white/80">© 2024 Pick.</p>
          <ul className="inline-flex items-center gap-4">
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/icons/Instagram.svg"}
                  alt="facebook"
                  className=" w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <a href="http://" target="_blank" rel="noopener noreferrer">
                <Image
                  src={"/icons/Facebook.svg"}
                  alt="facebook"
                  className=" w-6 h-6"
                  width={24}
                  height={24}
                />
              </a>
            </li>
            <li>
              <Image
                className=" w-6 h-6"
                alt="facebook"
                width={24}
                height={24}
                src={"/icons/TwitterX.svg"}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
