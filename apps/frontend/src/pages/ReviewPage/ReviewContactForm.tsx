import { Button, Input, TextArea, useAlert, useForm } from "lib";

import { ReviewDto } from "types";
import { Alert, FormContent, Rating } from "components";

const ReviewContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ReviewDto>();
  const alert = useAlert();

  const onSubmit = (_: Partial<ReviewDto>) => {
    alert.show({
      render: (
        <Alert>
          Thank you for reaching! <br />I will get back to you as soon as
          possible.
          <br /> (This is a demo, this form does not work.)
        </Alert>
      ),
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Input flex {...register("name")} label="Nom" />
        <Input type="email" flex {...register("email")} label="Email" />
        <Rating {...register("note")} />

        <TextArea flex rows={13} {...register("message")} label="Message" />

        <div style={{ gap: "7px", display: "flex", alignItems: "flex-start" }}>
          <Button type="submit" variant="contained">
            Envoyer
          </Button>
        </div>
      </FormContent>
    </form>
  );
};
export default ReviewContactForm;
