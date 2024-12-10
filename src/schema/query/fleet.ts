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
  organization_id?: string;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (
  _: unknown,
  { id, organizationId }: Args,
  { organization_id }: Context
): Fleet => {
  if (!organization_id) {
    throw new Error("Unauthorized");
  }
  return { id, name: "羽田空港送迎", organizationId };
};
