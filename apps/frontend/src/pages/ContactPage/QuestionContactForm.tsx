import { Button, Input, TextArea, useAlert, useForm } from "lib";

import { QuestionDto } from "types";
import { Alert, FormContent, Paragraph } from "components";

const QuestionContactForm = () => {
  const { register, handleSubmit, reset } = useForm<QuestionDto>();
  const alert = useAlert();

  const onSubmit = (_: Partial<QuestionDto>) => {
    alert.show({
      render: (
        <Alert>
          Thank you for reaching! <br />I will get back to you as soon as
          possible. <br />(This is a demo, this form does not work.)
        </Alert>
      ),
    });
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

        <Input flex {...register("name")} label="name" />
        <Input
          type="email"
          flex
          {...register("email")}
          label="email"
        />

        <TextArea
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
