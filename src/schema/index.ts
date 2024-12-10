type Args = {
  id: string;
  organizationId: string;
};

type Fleet = {
  id: string;
  organizationId: string;
  name: string;
};

type Context = {
  organizationId?: string;
};

export const resolvers = {
  Query: {
    getFleet: async (
      _: unknown,
      { id, organizationId }: Args,
      { organizationId: contextOrganizationId }: Context
    ): Promise<Fleet> => {
      if (!contextOrganizationId) {
        throw new Error("Unauthorized");
      }
      return { id, name: "羽田空港送迎", organizationId: organizationId };
    },
  },
};
