import { format } from "date-fns";

import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardColumn } from "./components/columns";
import toast from "react-hot-toast";
import { useEffect } from "react";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  const formattedBillboards: BillboardColumn[] = billboards.map((item) => ({
    id: item.id,
    label: item.label,
    createAt: format(item.createAt, "MMMM do, yyyy"),
  }));

  // console.log(params.storeId);
  return (
    <>
      <div className="flex-col">
        <div className="flex-1 space-y-4 p-8 pt6">
          <BillboardClient data={formattedBillboards} />
        </div>
      </div>
    </>
  );
};

export default BillboardsPage;
