import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import { ApolloServer } from "apollo-server";
import { schema as NexusSchema } from "./api/nexus/schema";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
export const apollo = new ApolloServer({
  schema: NexusSchema,
  csrfPrevention: true,
  cache: "bounded",
  /**
   * What's up with this embed: true option?
   * These are our recommended settings for using AS;
   * they aren't the defaults in AS3 for backwards-compatibility reasons but
   * will be the defaults in AS4. For production environments, use
   * ApolloServerPluginLandingPageProductionDefault instead.
   **/
  plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});
