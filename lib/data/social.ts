export type SocialLink = {
  name: "X" | "Instagram" | "Facebook" | "LinkedIn";
  href: string;
};

export const socialLinks: SocialLink[] = [
  { name: "X", href: "https://x.com/ucasocial" },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ucasocial?igsi=YTg4eW5peHQwcWxz",
  },
  { name: "Facebook", href: "https://www.facebook.com/share/1DgKBbhdQ8/" },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/unitedchineseamericans/?viewAsMember=true",
  },
];
