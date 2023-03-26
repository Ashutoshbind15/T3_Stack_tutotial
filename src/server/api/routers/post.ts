import clerkClient, { User } from "@clerk/clerk-sdk-node";

import { z } from "zod";

import {
  createTRPCRouter,
  privateProcedure,
  publicProcedure,
} from "~/server/api/trpc";
import { prisma } from "~/server/db";

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
      orderBy: [{ createdAt: "desc" }],
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

  create: privateProcedure
    .input(
      z.object({
        description: z.string().min(5).max(256),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const authorId = ctx.userId;

      const post = await ctx.prisma.post.create({
        data: {
          uid: authorId,
          description: input.description,
        },
      });

      return post;
    }),
});
