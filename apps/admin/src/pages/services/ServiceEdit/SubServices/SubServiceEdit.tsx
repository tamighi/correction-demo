import { SubServiceDto } from "types";
import { SubServiceCreate } from "./SubServiceCreate";
import { SubServiceEditForm } from "./SubServiceEditForm";

export const SubServiceEdit = ({
  subServices = [],
  serviceId,
}: {
  subServices?: SubServiceDto[];
  serviceId: number;
}) => {
  return (
    <>
      <span>Sous-services</span>
      {subServices.map((subService) => (
        <SubServiceEditForm key={subService.id} subService={subService} />
      ))}
      <SubServiceCreate serviceId={serviceId} />
    </>
  );
};
