import { Button, Input } from "lib";

import { SubServiceDto } from "types";
import { ApiErrorForm, FormAction, FormContent, Loader } from "components";
import { useCreateRefForm } from "hooks";

import { SubServiceFormContainer } from "./SubServiceFormContainer";

export const SubServiceCreate = ({ serviceId }: { serviceId: number }) => {
  const { register, onSubmit, error, isLoading } = useCreateRefForm<
    Partial<SubServiceDto>
  >("subService", {
    defaultData: { service: { id: serviceId } },
    parentResource: "service",
  });

  return (
    <form>
      <SubServiceFormContainer>
        <FormContent direction="horizontal">
          <Input {...register("textType")} placeholder="Type de texte" flex />
          <Input
            {...register("pricePerCharacter")}
            placeholder="Prix par caractere"
            flex
            type="number"
            step={0.001}
          />
        </FormContent>
        <FormAction>
          {error?.badEntry && <ApiErrorForm />}
          <Button onClick={onSubmit}>Create</Button>
          {isLoading && <Loader size="small" />}
        </FormAction>
      </SubServiceFormContainer>
    </form>
  );
};
