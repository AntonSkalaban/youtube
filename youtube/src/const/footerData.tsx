import React from "react";
import Facebook from "assets/svg/facebook.svg";
import Twitter from "assets/svg/twitter.svg";
import Instagram from "assets/svg/inst.svg";
import LinkedId from "assets/svg/linkedIn.svg";

export const titles: { [key: string]: string[] } = {
  first: ["TermsPrivacyPolicy & Safety", "How YouTube works", "Test new features"],
  seconsd: ["About Press Copyright", "Contact us Creators", "Advertise Developers"],
};

export const icons = [
  {
    component: <Facebook width={"100%"} height={"100%"} />,
    url: "https://www.facebook.com/ModsenSoftware/",
  },
  {
    component: <Twitter width={"100%"} height={"100%"} />,
    url: "https://twitter.com/modsencompany?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
  },
  {
    component: <Instagram width={"100%"} height={"100%"} />,
    url: "https://www.instagram.com/modsencompany/",
  },
  {
    component: <LinkedId width={"100%"} height={"100%"} />,
    url: "https://www.linkedin.com/company/modsen?originalSubdomain=pl",
  },
];
