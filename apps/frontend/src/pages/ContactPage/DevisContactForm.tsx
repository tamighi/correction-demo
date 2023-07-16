import React from "react";

import { Button, Input, Select, TextArea, useForm } from "lib";

import { DatePicker, FormContent, Paragraph } from "components";
import { DevisDto, SubServiceDto } from "types";
import { CustomFileInput } from "./CustomFileInput";

import { services } from "../../constants";

const DevisContactForm = () => {
  const { register, handleSubmit, reset } = useForm<DevisDto>();

  const [serviceId, setServiceId] = React.useState<number>();
  const [subServices, setSubServices] = React.useState<SubServiceDto[]>();
  const [_, setFile] = React.useState<File>();

  React.useEffect(() => {
    const selectedService = services.find((service) => {
      return service.id === serviceId;
    });
    if (selectedService) {
      setSubServices(selectedService.subServices);
    } else {
      setSubServices(undefined);
    }
  }, [serviceId]);

  const onSubmit = (_: Partial<DevisDto>) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Paragraph>
          Thank you for your interest in our correction service! We will
          carefully review the provided information and calculate the cost for
          correcting your text. We will get back to you shortly with a detailed
          quotation.
        </Paragraph>

        <Input required flex {...register("name")} label="name" />
        <Input
          type="email"
          required
          flex
          {...register("email")}
          label="email"
        />
        <DatePicker flex label="time limit" required {...register("endDate")} />

        <div style={{ display: "flex", width: "100%", gap: "10px" }}>
          <Select
            flex
            {...register("service.id", {
              onChange: (value) => setServiceId(Number(value)),
            })}
            label="service wanted"
          >
            <option value="">none</option>
            {services.map((service) => {
              return (
                <option key={service.id} value={service.id}>
                  {service.name}
                </option>
              );
            })}
          </Select>
        </div>

        {subServices ? (
          <Select flex {...register("subService.id")} label="text type">
            <option value="">none</option>
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
          <Button type="submit" variant="contained">
            Send
          </Button>
        </div>
      </FormContent>
    </form>
  );
};

export default DevisContactForm;
