import { apollo } from "./apollo";

// The `listen` method launches a web server.
apollo.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
