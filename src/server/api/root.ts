import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "./routers/post";

export const appRouter = createTRPCRouter({
  posts: postRouter,
});

export type AppRouter = typeof appRouter;
