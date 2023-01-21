import { prisma } from "~/db.server";
import type { Post } from "@prisma/client";

export const getPosts = async () => prisma.post.findMany();

export const getPost = async (slug: string) => {
  console.log("lookup slug", slug);
  return prisma.post.findUnique({ where: { slug } });
};

export const createPost = async (post: Omit<Post, "createdAt" | "updatedAt">) =>
  prisma.post.create({ data: post });

export const updatePost = async (slug: Post['slug'], post: Omit<Post, "createdAt" | "updatedAt">) =>
  prisma.post.update({ where: { slug }, data: post });
