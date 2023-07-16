import { Button, Input, TextArea, useForm } from "lib";

import { usePostMessage } from "hooks";
import { ReviewDto } from "types";
import { ApiErrorForm, FormContent, Loader, Rating } from "components";

const ReviewContactForm = () => {
  const { register, handleSubmit, reset } = useForm<ReviewDto>();
  const { mutate, isLoading, isError, isSuccess } =
    usePostMessage<ReviewDto>("review");

  const onSubmit = (review: Partial<ReviewDto>) => {
    mutate(review, { onSuccess: reset });
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
export default ReviewContactForm;
