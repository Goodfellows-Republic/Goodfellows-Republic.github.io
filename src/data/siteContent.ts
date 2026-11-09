export function assetUrl(relativePath: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const cleanRel = relativePath.replace(/^\/+/, "");
  return `${normalizedBase}${cleanRel}`;
}

export const EXTERNAL_LINKS = {
  email: "goodfellows.republic@gmail.com",
  discord: "https://discord.gg/9TQ76stCZZ",
  github: "https://github.com/Goodfellows-Republic",
  discordPrivacy: "https://discord.com/privacy",
  discordTerms: "https://discord.com/terms",
  heroFallbackUrl:
    "https://images-ext-1.discordapp.net/external/isi57iLA2kZVPLsaIPKx-B2qNAjR5knH2mJN2GuwELs/%3Fsize%3D4096/https/cdn.discordapp.com/banners/1523451618656260237/f188dc0294e10e9e0009ddcc2a4626c8.png?format=webp&quality=lossless",
};

export const NATIONAL_COLORS = [
  {
    name: "White",
    hex: "#FFFFFF",
    position: "Upper horizontal stripe (1/3 height)",
    role: "Clarity, open deliberation, and constitutional equality",
  },
  {
    name: "Golden sand",
    hex: "#FFD284",
    position: "Middle horizontal stripe (1/3 height)",
    role: "Shared civic warmth, fellowship, and common ground",
  },
  {
    name: "Forest green",
    hex: "#3E5524",
    position: "Lower horizontal stripe (1/3 height)",
    role: "Continuity, endurance, and the motto “Forever Green, Forever Free.”",
  },
];

export const REPUBLIC_VALUES = [
  {
    id: "fellowship",
    index: "01",
    title: "Fellowship",
    description:
      "A country is more than a name or a flag. It is a community of people who support one another and make room for different perspectives.",
  },
  {
    id: "respect",
    index: "02",
    title: "Respect",
    description:
      "Thoughtful dialogue starts with dignity. We encourage people to listen, disagree constructively, and treat others with care.",
  },
  {
    id: "shared-responsibility",
    index: "03",
    title: "Shared responsibility",
    description:
      "Our common future calls for participation. We welcome ideas and conversations about how to strengthen the Republic and its community.",
  },
];

export const PRIVACY_RECORDS_TABLE = [
  {
    type: "Moderation logs",
    purpose:
      "User IDs, usernames, and moderation records, used to administer community rules, review incidents, and handle appeals.",
  },
  {
    type: "Citizenship records",
    purpose:
      "Information recorded through the citizenship process, used to administer citizenship and related community participation.",
  },
  {
    type: "Votes",
    purpose:
      "Voting records, used to administer and maintain records of community votes. Do not assume a vote is anonymous unless the particular voting process explicitly states that it is.",
  },
  {
    type: "Tickets",
    purpose:
      "Ticket content submitted through the ticket system, used to respond to requests, resolve issues, and retain a record of those interactions.",
  },
];
