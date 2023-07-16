import { Paper, Grid } from "lib";

import BasePage from "./BasePage";

const CenteredPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <BasePage>
      <Grid container>
        <Grid md={3} />
        <Grid xs={12} md={6} style={{ width: "100%", display: "inline-flex" }}>
          <Paper
            style={{ padding: "12px", width: "100%", margin: "8px" }}
          >
            {children}
          </Paper>
        </Grid>
        <Grid md={3} />
      </Grid>
    </BasePage>
  );
};

export default CenteredPage;
