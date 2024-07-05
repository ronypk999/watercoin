import React from "react";
import logo from "../assets/logo.webp";
const Footer: React.FC = () => {
  return (
    <>
      <div className="py-12 space-y-3 text-center text-[#737373] px-3">
        <img src={logo} className="w-full max-w-64 mx-auto" />
        <h2 className="text-xl md:text-3xl uppercase">
          changes the world for the better
        </h2>
        <p className="max-w-3xl mx-auto">
          RISK WARNING: Trading Cryptocurrencies is highly speculative, carries
          a level of risk and may not be suitable for all investors. You may
          lose some or all of your invested capital, therefore you should not
          speculate with capital that you cannot afford to lose. The content on
          this site should not be considered investment advice. Investing is
          speculative. When investing your capital is at risk.
        </p>
        <p className="max-w-3xl mx-auto">
          LEGAL DISCLAIMER: $WATER is a meme coin with no intrinsic value or
          expectation of financial return. $WATER is completely useless and for
          entertainment purposes only. Trading crypto, especially memecoins,
          involves significant risk and potential capital loss. Memecoins can be
          extremely volatile. Conduct thorough research. When you trade or
          purchase $WATER, you are agreeing that you have seen this disclaimer.
        </p>
        <p className="max-w-3xl mx-auto">
          We do not allow users of these countries to participate in the
          presale: The information on this site is not intended for residents of
          Afghanistan, Benin, Bhutan, China, Crimea region, Cuba, Iran, Iraq,
          Syria, USA, Vatican City, or for use by any person in any country or
          jurisdiction where such distribution or use would be contrary to local
          law or regulation.
        </p>
      </div>
    </>
  );
};

export default Footer;
