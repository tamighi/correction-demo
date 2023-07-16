import { Alert } from "components";
import { Button, DeleteIcon, IconButton, useAlert } from "lib";
import { useQueryClient } from "react-query";
import { dataProvider } from "services/api";

interface FileDownloadFieldProps {
  file?: {
    storedFilename: string;
    originalFilename: string;
    id: number;
  };
  id: number | string;
}

export const FileDownloadField = (props: FileDownloadFieldProps) => {
  const { file, id } = props;
  const alert = useAlert();
  const queryClient = useQueryClient();

  const handleDownload = async () => {
    const res = await dataProvider.simpleRequest(
      `${process.env.BACKEND_URL}/file/${file?.id}`
    );
    const blob = await res.blob();
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");

    link.href = url;
    link.download = file?.originalFilename || "NoFilename";

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode?.removeChild(link);
  };

  const handleDelete = async () => {
    try {
      const res = await dataProvider.simpleRequest(
        `${process.env.BACKEND_URL}/file/${file?.id}`,
        { method: "DELETE" }
      );

      if (res.ok) {
        alert.show({
          render: <Alert message="File deleted successfully" />,
        });
        queryClient.invalidateQueries(["devis", { id: id.toString() }]);
      }
    } catch {
      alert.show({
        render: (
          <Alert message="This is a demo. Regular users cannot delete instances for safety reasons." />
        ),
      });
    }
  };

  return (
    <div>
      {file ? (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span style={{ alignSelf: "center" }}>
            Fichier: {file.originalFilename}
          </span>
          <div style={{ display: "flex" }}>
            <Button onClick={handleDownload}>Telecharger</Button>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      ) : (
        "Aucun fichier joint"
      )}
    </div>
  );
};
