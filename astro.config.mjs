import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Foodify.Ai",
      social: {
        github: "https://github.com/sDaman830/on-demand",
      },
      sidebar: [
        {
          label: "Getting Started",
          items: [{ label: "Started guid Guide", link: "/guides/start/" }],
        },
        {
          label: "Plugins",
          items: [{ label: "Plugins-Info", link: "/guides/plugins-info/" }],
        },
      ],
    }),
  ],
});
