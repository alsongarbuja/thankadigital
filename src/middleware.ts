import { withAuth } from "next-auth/middleware";
import { chainMiddleware } from "./middlewares/chain";

export default withAuth(chainMiddleware([]), {
  callbacks: {
    authorized: ({ req, token }) => {
      if (req.nextUrl.pathname.startsWith("/admin") && token === null) {
        return false;
      }
      return true;
    },
  },
});