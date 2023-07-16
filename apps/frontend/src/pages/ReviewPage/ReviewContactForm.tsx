import { Button, Input, TextArea, useForm } from "lib";

import { ReviewDto } from "types";
import { FormContent, Rating } from "components";

const ReviewContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ReviewDto>();

  const onSubmit = (_: Partial<ReviewDto>) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Input required flex {...register("name")} label="Nom" />
        <Input
          type="email"
          required
          flex
          {...register("email")}
          label="Email"
        />
        <Rating required {...register("note")} />

        <TextArea
          required
          flex
          rows={13}
          {...register("message")}
          label="Message"
        />

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
