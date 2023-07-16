import { Alert } from "components";
import { useUpdateOne } from "hooks";
import { Button, useAlert } from "lib";
import { HttpError } from "services/utils";
import { ResourceType } from "types";

type MessageResourceString = "question" | "review" | "devis";

type StatusFieldProps<R extends MessageResourceString> = {
  message: ResourceType<R>;
  resource: R;
};

export const StatusField = <R extends MessageResourceString>(
  props: StatusFieldProps<R>
) => {
  const { message, resource } = props;

  const alert = useAlert();

  const { mutate } = useUpdateOne<R>(resource, {
    onSuccess: () => {
      alert.show({ render: <Alert message="Status updated !" /> });
    },
    onError: (error) => {
      if (error instanceof HttpError && error.status === 403)
        alert.show({
          render: (
            <Alert message="This is a demo. Regular users cannot modify instances for safety reasons" />
          ),
        });
    },
  });

  const onChange = (newStatus: "pending" | "refused" | "accepted") => {
    mutate({
      id: message.id,
      data: { status: newStatus } as Partial<ResourceType<R>>,
    });
  };

  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {message.status === "pending" ? (
        <>
          <p style={{ flex: 1 }}>En attente</p>
          <Button onClick={() => onChange("accepted")}>Accepter</Button>
          <Button onClick={() => onChange("refused")}>Refuser</Button>
        </>
      ) : (
        <>
          <p style={{ flex: 1 }}>
            {message.status === "accepted" ? "Accepté" : "Refusé"}
          </p>
          <Button onClick={() => onChange("pending")}>Annuler</Button>
        </>
      )}
    </div>
  );
};
