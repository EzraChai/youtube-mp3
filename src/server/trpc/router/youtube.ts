import { z } from "zod";
import { downloadSong } from "ytdl-mp3";

import { router, publicProcedure } from "../trpc";

export const youtubeRouter = router({
  download: publicProcedure
    .input(z.object({ url: z.string().trim().url() }))
    .mutation(async ({ input }) => {
      return downloadSong(input.url, { outputDir: `/public` });
    }),
});
