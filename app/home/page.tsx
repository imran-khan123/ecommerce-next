import Heropanel from "components/Heropanel";
import Newcollection from "components/newcollection";


export default function HomePage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <div>
      <Heropanel />
      <Newcollection params={{ collection: "new-in" }} searchParams={searchParams} />
    </div>
  );
}
