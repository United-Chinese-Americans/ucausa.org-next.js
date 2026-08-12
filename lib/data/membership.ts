export type MembershipTier = {
  title: string;
  tagline: string;
  body: string;
  perks: { label: string; text: string }[];
};

export const membershipTiers: MembershipTier[] = [
  {
    title: "1. Student Membership",
    tagline: "Fuel your ambition.",
    body: "Designed for high school and college students, this membership is your gateway to leadership. Get involved with the UCA and the broader Chinese American community as you transition into your professional life.",
    perks: [
      { label: "Benefits:", text: "Enjoy all Individual Membership perks at a specialized rate." },
      { label: "Requirement:", text: "Valid Student I.D. required." },
    ],
  },
  {
    title: "2. Individual Membership",
    tagline: "Stay connected, informed and empowered.",
    body: "Be the first to know about our latest initiatives. Gain exclusive access to professional networking, advocacy updates, and UCA community-driven events and promotions.",
    perks: [
      {
        label: "Key Perks:",
        text: "Members-only event access, special discounts, and priority registration for all UCA programs. The most important perk is you are now connecting with a unique UCA family with life long like-minded friends and friendship.",
      },
    ],
  },
  {
    title: "3. Family Membership",
    tagline: "Strength in unity.",
    body: "Empower your entire household. This tier allows up to five immediate family members to join the movement, ensuring your family stays connected to their heritage and civic opportunities.",
    perks: [
      { label: "Key Perks:", text: "All Individual benefits for the whole family at one bundled value." },
    ],
  },
  {
    title: "4. Lifetime Membership",
    tagline: "Our most prestigious circle.",
    body: "Make a permanent commitment to the future of Chinese Americans. As a Lifetime Member, you join a unique club of our most dedicated like-minded supporters and enjoy the highest level of recognition within the organization.",
    perks: [
      {
        label: "Key Perks:",
        text: "All UCA benefits for life, plus privileged “Gold Tier” treatment and VIP invitations to national summits.",
      },
    ],
  },
];

// Founding member list scans, in slide order.
export const foundingListSlides: string[] = [2, 3, 4, 5, 6].map(
  (n) => `https://storage.googleapis.com/objects.ucausa.org/join/join${n}.png`
);
