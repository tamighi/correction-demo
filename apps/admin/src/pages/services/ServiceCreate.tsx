import { ArrowBackIcon, Button, IconButton, Input, TextArea } from "lib";

import { ServiceDto } from "types";
import { useCreateForm } from "hooks";
import {
  ApiErrorForm,
  FormAction,
  FormContent,
  Header,
  Loader,
  MainCard,
} from "components";
import { useNavigate } from "react-router-dom";

export const ServiceCreate = () => {
  const { register, onSubmit, error, isLoading } =
    useCreateForm<Partial<ServiceDto>>("service");
  const navigate = useNavigate();

  return (
    <MainCard>
      <form onSubmit={onSubmit}>
        <FormContent direction="vertical">
          <Header>
            <IconButton onClick={() => navigate("/service")}>
              <ArrowBackIcon />
            </IconButton>
            <h3>Creer un service</h3>
          </Header>
          <span>Nom du service</span>
          <Input flex {...register("name")} placeholder="nom" autoFocus />
          <span>Description du service</span>
          <TextArea
            {...register("description")}
            placeholder="Description"
            rows={10}
            flex
          />
        </FormContent>
        <FormAction>
          <Button type="submit" onClick={onSubmit}>
            Create
          </Button>
          {isLoading && <Loader size="small" />}
          {error?.badEntry && <ApiErrorForm />}
        </FormAction>
      </form>
    </MainCard>
  );
};
