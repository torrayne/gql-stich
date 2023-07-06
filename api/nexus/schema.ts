import { makeSchema } from "nexus";

// Recursively traverses the value passed to types looking for
// any valid Nexus or graphql-js objects to add to the schema,
// so you can be pretty flexible with how you import types here.

const types = [require("./types"), require("./query")];

export const schema = makeSchema({
  types,
  // or types: { Account, Node, Query }
  // or types: [Account, [Node], { Query }]
});
