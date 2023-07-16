import { ResourceType } from "types";
import { SimpleField } from "components";
import { Button, Grid } from "lib";
import { StatusField } from "./StatusField";
import { useDeleteOne, useGetCurrentQuery } from "hooks";

type MessageResourceString = "question" | "review" | "devis";

type MessageDetailsProps<T extends ResourceType<MessageResourceString>> = {
  message: T;
  resource: MessageResourceString;
};

const MessageDetails = <T extends ResourceType<MessageResourceString>>(
  props: MessageDetailsProps<T>
) => {
  const { message, resource } = props;

  const query = useGetCurrentQuery();
  const { mutate } = useDeleteOne(resource, query);

  return (
    <Grid container style={{ gap: "16px" }}>
      <Grid xs={12}>
        <StatusField message={message} resource={resource} />
      </Grid>
      <Grid xs={12}>
        <SimpleField label="Recu le">
          {new Date(message.date).toLocaleDateString()}
        </SimpleField>
      </Grid>
      <Grid xs={6}>
        <SimpleField label="Nom">{message.name}</SimpleField>
      </Grid>
      <Grid xs={6}>
        <SimpleField label="Email">{message.email}</SimpleField>
      </Grid>
      <Grid xs={12}>
        <SimpleField label="Message">{message.message}</SimpleField>
      </Grid>
      <Grid xs={12}>
        <Button
          style={{
            color: "red",
            border: "2px solid red",
            borderRadius: "10px",
            fontWeight: "700",
            fontSize: "18px",
          }}
          onClick={() => mutate({ id: message.id })}
        >
          Delete
        </Button>
      </Grid>
    </Grid>
  );
};

export default MessageDetails;
