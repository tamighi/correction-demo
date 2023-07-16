import React from "react";

import { Button, Input, Select, TextArea, useForm } from "lib";

import { usePostFormData, useServices } from "hooks";
import {
  DatePicker,
  FormContent,
  Loader,
  ApiErrorForm,
  Paragraph,
} from "components";
import { DevisDto, SubServiceDto } from "types";
import { CustomFileInput } from "./CustomFileInput";

const DevisContactForm = () => {
  const { register, handleSubmit, reset } = useForm<DevisDto>();
  const { mutate, isLoading, isError, isSuccess } = usePostFormData("devis");

  const [serviceId, setServiceId] = React.useState("");
  const [subServices, setSubServices] = React.useState<SubServiceDto[]>();
  const [file, setFile] = React.useState<File>();
  const fileRef = React.useRef<HTMLInputElement>(null);

  const services = useServices();

  React.useEffect(() => {
    const selectedService = services?.data?.find((service) => {
      return service.id == serviceId;
    });
    if (selectedService) {
      setSubServices(selectedService.subServices);
    } else {
      setSubServices(undefined);
    }
  }, [serviceId]);

  const onSubmit = (devis: Partial<DevisDto>) => {
    const data = new FormData();
    data.append("file", file as Blob);
    data.append("devis", JSON.stringify(devis));
    mutate(data, {
      onSuccess: () => {
        reset();
        if (fileRef.current) {
          fileRef.current.value = "";
        }
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Paragraph>
          Formulaire de demande de devis
          <br />
          Combien coûte la correction de votre texte ? Écrivez-moi !
        </Paragraph>

        <Input required flex {...register("name")} label="Nom" />
        <Input
          type="email"
          required
          flex
          {...register("email")}
          label="Email"
        />
        <DatePicker flex label="Delai" required {...register("endDate")} />

        <div style={{ display: "flex", width: "100%", gap: "10px" }}>
          <Select
            flex
            {...register("service.id", {
              onChange: (value) => setServiceId(value),
            })}
            label="Service désiré"
          >
            <option value="">Non spécifié</option>
            {services.data?.map((service) => {
              return (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              );
            })}
          </Select>

          {services.data ? "" : <Loader size="small" />}
        </div>

        {subServices ? (
          <Select flex {...register("subService.id")} label="Type de texte">
            <option value="">Non spécifié</option>
            {subServices.map((subService) => {
              return (
                <option key={subService.id} value={subService.id}>
                  {subService.textType}
                </option>
              );
            })}
          </Select>
        ) : null}

        <TextArea
          required
          flex
          rows={12}
          {...register("message")}
          label="Message"
        />

        <CustomFileInput onChange={setFile} />

        <div style={{ gap: "6px", display: "flex", alignItems: "flex-start" }}>
          <Button type="submit" variant="contained" disabled={isLoading}>
            Envoyer
          </Button>
          {isLoading && <Loader size="small" />}
          {isError && <ApiErrorForm />}
        </div>

        {isSuccess && (
          <p>
            Votre message a bien été envoyé ! Je reviendrai vers vous dès que
            possible.
          </p>
        )}
      </FormContent>
    </form>
  );
};

export default DevisContactForm;
