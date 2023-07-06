import { enumType, interfaceType, objectType } from "nexus";

export const Node = interfaceType({
  name: "Node",
  definition(t) {
    t.id("id", { description: "Unique identifier for the resource" });
  },
});

export const Account = objectType({
  name: "Account",
  isTypeOf(source) {
    return "email" in source;
  },
  definition(t) {
    t.implements(Node); // or t.implements("Node")
    t.string("username");
    t.string("email");
  },
});

export const StatusEnum = enumType({
  name: "StatusEnum",
  members: ["ACTIVE", "DISABLED"],
});
