import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import ApiAlert from "./api-alert";

interface ApiListProps {
  entityName: string;
  entityIdName: string;
}

const ApiList: React.FC<ApiListProps> = ({ entityName, entityIdName }) => {
  const params = useParams();
  const origin = useOrigin();

  const baseUrl = `${origin}/api/${params.storeId}`;

  return (
    <>
      <ApiAlert
        tittle={"GET"}
        variant={"public"}
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        tittle={"GET"}
        variant={"public"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        tittle={"POST"}
        variant={"admin"}
        description={`${baseUrl}/${entityName}`}
      />
      <ApiAlert
        tittle={"PATCH"}
        variant={"admin"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
      <ApiAlert
        tittle={"DELETE"}
        variant={"admin"}
        description={`${baseUrl}/${entityName}/{${entityIdName}}`}
      />
    </>
  );
};

export default ApiList;
