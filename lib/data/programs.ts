export type Program = {
  title: string;
  eyebrow: string;
  icon: string;
  description: string;
  link?: { label: string; href: string; external?: boolean };
};

export const programs: Program[] = [
  {
    title: "Defending Civil Rights",
    eyebrow: "Advocacy & Justice",
    icon: "gavel",
    description:
      "UCA has been a national leader in defending the civil rights of Chinese Americans. Working with congressional leaders, media, and broad public support, UCA successfully campaigned for the rights of Sherry Chen and Xiaoxing Xi, two outstanding Chinese American scientists falsely charged with espionage-related crimes. As an increasing number of Chinese Americans are becoming unfortunate collateral damage, resulting from the deterioration of relations between the United States and China, UCA is fostering a multi-city dialogue between the Chinese American community and law enforcement agencies to address racial profiling and intellectual property protection as well as other urgent concerns. UCA also initiated the “Speak Up Campaign,” where 19 presidents of top U.S. universities publicly voiced their support for Chinese American faculty members and international students as well as for continued benefits of international collaboration in the sciences. To address the increasing racism and hate crime against Asian Americans due to the COVID-19 pandemic, UCA has built and strengthened relationships and conducted regular discussions with the Jewish American and African American communities to foster equal justice and civil rights for all.",
  },
  {
    title: "Chinese American Convention",
    eyebrow: "Signature Event",
    icon: "groups",
    description:
      "The Chinese American Convention, organized and convened biennially by UCA, is a national platform for Chinese American civic leaders, elected officials, scientists, entrepreneurs, youth leaders, and other stakeholders who share, discuss, and shape a common agenda for the future of the Chinese American community and this country. The conventions from 2016 to 2024 were quite successful, attracting some of the most influential speakers, and well attended with each drawing more than 600 active participants from over 35 states.",
    link: { label: "Learn More", href: "/convention" },
  },
  {
    title: "WAVES Youth Mental Health Collaborative",
    eyebrow: "Health & Wellness",
    icon: "psychology",
    description:
      "Due to a unique set of familial, cultural, and societal factors, mental health issues among Asian American youth are on the rise but have received little attention. Working with local community organizations and a team of experts and counselors, UCA WAVES addresses this urgent need by creating culturally-informed programs to raise awareness and provide knowledge of mental health concerns. UCA WAVES has successfully organized 12 national and local youth mental health conferences, as well as four webinars specifically designed to address mental health needs resulting from the pandemic. We also have ongoing collaboratives such as Mental Health First Aid training and peer support groups for nursing students, parents, and youth.",
    link: { label: "Explore Resources", href: "https://ucawaves.org/", external: true },
  },
  {
    title: "UCA Next Generation Programs",
    eyebrow: "Youth Leadership",
    icon: "school",
    description:
      "To help build a pipeline to nurture future Asian American leaders, UCA created a series of programs to foster leadership, including: Summer Civic Leadership Internship, to provide college and high school students with internship opportunities at all levels of the government; UCA Youth Leadership Camp in Washington DC, to train future leaders; and UCA Summer University, to provide summer online courses for students.",
    link: { label: "UCA Youth Leadership Camp", href: "/program/youth-leadership" },
  },
  {
    title: "Culture and Heritage Programs",
    eyebrow: "Heritage",
    icon: "auto_awesome",
    description:
      "To preserve and renew Chinese cultural traditions, ethnic identities and values, while supporting the universal practice of giving, UCA has spearheaded the celebration and commemoration of culturally significant holidays and customs, transforming them into charitable events, which include the traditional Lunar New Year Jiaozhi (dumpling) Festival, Hong Bao (red packets) Drives, and other community initiatives.",
  },
  {
    title: "Civic Leadership Forums",
    eyebrow: "Civic Engagement",
    icon: "campaign",
    description:
      "To encourage more civic engagement in local communities across the nation, UCA, sponsored by CLUSA Foundation, successfully organized eight Civic Leadership Forums in Milwaukee, the Twin Cities, Chicago, Salt Lake City, Houston, Pittsburgh, and Indianapolis.",
  },
  {
    title: "Food of Love Charitable Giving Program",
    eyebrow: "Community Aid",
    icon: "volunteer_activism",
    description:
      "To celebrate the Asian American and Pacific Islander Heritage Month in May 2020, UCA launched a nationwide “Food of Love” charity event to serve fellow Americans affected by the coronavirus pandemic. Working with the U.S.-China Restaurant Alliance, the Salvation Army, and other partner organizations, the program delivered thousands of hot meals to frontline and health care workers as well as people in need across all 50 states and in more than 128 cities. As part of its relief efforts, UCA also coordinated multiple personal protective equipment (PPE) donation drives to support vulnerable communities and medical facilities.",
  },
  {
    title: "UCA Summer University",
    eyebrow: "Civic Education",
    icon: "terminal",
    description:
      "UCA Summer University is part of UCA’s many important initiatives to train, catalyze and prepare Chinese Americans, especially its next generation, for a full participation in American democracy and civic life. Typically offered in summer, it conducts a wide range of training and topics in an interactive and stimulating manner. It offers great opportunity to learn from and network with prestigious Chinese American scholars, educators, elected officials, and civic leaders.",
  },
];
