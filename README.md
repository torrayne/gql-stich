# gql-stich

I'm trying to make the Nexus->Pothos migration easier.

**Nexus**

```gql
Query {
  builder: 'Nexus'
  users(search: String!) : User
}

User {
  id: string
  name: string
  orgId: ID!
}
```

**Pothos**

```gql
Query {
  builder: 'Pothos'
  organization: Organization
}

Organization {
  id: string
  name: string
}
```

**Merged**

If both schemas define the same field, the later schema will override all earlier schemas without warning. BE CAREFUL.

```ts
export const apollo = new ApolloServer({
  schema: mergeSchemas({ schemas: [NexusSchema, PothosSchema] }),
});
```

```gql
Query {
  builder: 'Pothos' // field overwritten
  organization: Organization
  users(search: String!) : User
}

Organization {
  id: string
  name: string
}

User {
  id: string
  name: string
  orgId: ID!
}
```
