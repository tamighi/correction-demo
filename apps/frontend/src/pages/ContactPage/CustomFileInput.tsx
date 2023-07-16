import { Button } from "lib";
import React from "react";

interface CustomFileInputProps {
  onChange: (file: File) => void;
}

export const CustomFileInput = (props: CustomFileInputProps) => {
  const { onChange } = props;
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const [filename, setFilename] = React.useState<string>();

  const handleClick = () => {
    hiddenFileInput.current?.click();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const fileUploaded = event.target.files[0];
      onChange(fileUploaded);
      setFilename(fileUploaded.name);
    }
  };

  return (
    <div>
      <span>{filename ? filename : "aucun fichier"} </span>
      <Button
        type="button"
        variant="contained"
        color="secondary"
        onClick={handleClick}
      >
        Parcourir
      </Button>
      <input
        type="file"
        name="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
        accept="text/*"
      />
    </div>
  );
};
