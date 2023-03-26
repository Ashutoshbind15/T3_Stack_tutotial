import clerkClient, { User } from "@clerk/clerk-sdk-node";

import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterUser = (user: User) => {
  return {
    id: user.id,
    username: user.username,
    profileImageUrl: user.profileImageUrl,
  };
};

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({
      take: 100,
    });

    const users = (
      await clerkClient.users.getUserList({
        userId: posts.map((post) => post.uid),
        limit: 100,
      })
    ).map(filterUser);

    return posts.map((post) => ({
      post,
      author: users.find((user) => user.id === post.uid),
    }));
  }),
});
