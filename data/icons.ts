export const iconsMap = {
  react: "/icons/react.svg",
  express: "/icons/express.svg",
  html5: "/icons/html5.svg",
  css: "/icons/css.svg",
  nextjs: "/icons/nextjs.svg",
  javascript: "/icons/javascript.svg",
  mongoose: "/icons/mongoose.svg",
  nestjs: "/icons/nestjs.svg",
  sqlite: "/icons/sqlite.svg",
  tailwindcss: "/icons/tailwindcss.svg",
  typescript: "/icons/typescript.svg",
  prisma: "/icons/prisma.svg",
  postgresql: "/icons/postgresql.svg",
} as const;

export type IconName = keyof typeof iconsMap;
