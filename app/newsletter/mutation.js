import { shopifyFetch } from "lib/shopify";

// api/shopifyApi.ts
export const createNewsletterCustomerMutation = `
mutation CreateCustomer($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customerUserErrors {
      code
      field
      message
    }
    customer {
      id
    }
  }
}
`;

export default async function createNewsletterCustomer(email) {
  const res = await shopifyFetch({
    query: createNewsletterCustomerMutation,
    variables: {
      input: {
        email: email,
        acceptsMarketing: true,  // Mark the customer as accepting marketing
      },
    },
  });
console.log(res?.body);

  if (res?.body?.errors) {
    throw new Error('Error creating customer');
  }

  const userErrors = res.body?.data.customerCreate.customerUserErrors;
  if (userErrors.length > 0) {
    throw new Error(userErrors[0].message);
  }

  return res.body.data.customerCreate.customer.id;
}
