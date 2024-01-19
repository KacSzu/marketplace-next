import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { AppRouter } from "@/trpc";
import e from "express";
const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    router: AppRouter,
    // ACCEPTABLE ERROR
    createContext: () => ({}),
  });
};

export { handler as GET, handler as POST };
