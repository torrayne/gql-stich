import { arg, intArg, list, queryType, stringArg } from "nexus";

export const Query = queryType({
  definition(t) {
    t.field("account", {
      type: "Account", // or "Account"
      args: {
        name: stringArg(),
        status: arg({ type: "StatusEnum" }),
      },
      resolve: () => {
        console.log("hit account");
        return null;
      },
    });
    t.field("accountsById", {
      type: list("Account"), // or "Account"
      args: {
        ids: list(intArg()),
      },
      resolve: () => {
        console.log("hit accountsById");
        return null;
      },
    });
  },
});
