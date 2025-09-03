// components/NewcollectionServer.tsx
import { defaultSort, sorting } from "lib/constants";
import { getCollectionProducts } from "lib/shopify";
import NewcollectionClient from "./NewcollectionClient";

export default async function NewcollectionServer({
  params,
  searchParams,
}: {
  params: { collection: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sort = searchParams?.sort as string | undefined;
  const { sortKey, reverse } =
    sorting.find((item) => item.slug === sort) || defaultSort;

  const products = await getCollectionProducts({
    collection: params.collection,
    sortKey,
    reverse,
  });

  return <NewcollectionClient products={products} />;
}
