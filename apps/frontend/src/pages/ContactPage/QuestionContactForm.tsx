import { Button, Input, TextArea, useForm } from "lib";

import { QuestionDto } from "types";
import { FormContent, Paragraph } from "components";

const QuestionContactForm = () => {
  const { register, handleSubmit, reset } = useForm<QuestionDto>();

  const onSubmit = (_: Partial<QuestionDto>) => {
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContent>
        <Paragraph>
          Thank you for reaching out to us! We will respond to your inquiry as
          soon as possible to provide you with the requested information or to
          discuss your specific case.
        </Paragraph>

        <Input required flex {...register("name")} label="name" />
        <Input
          type="email"
          required
          flex
          {...register("email")}
          label="email"
        />

        <TextArea
          required
          flex
          rows={12}
          {...register("message")}
          label="message"
        />

        <div style={{ gap: "6px", display: "flex", alignItems: "flex-start" }}>
          <Button type="submit" variant="contained">
            Send
          </Button>
        </div>
      </FormContent>
    </form>
  );
};

export default QuestionContactForm;
