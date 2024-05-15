"use client";
import Copyright from "@/components/Copyright";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
import React from "react";
import { TablePaymentTransaction } from "./TablePaymentTransaction";
import { DialogError } from "@/components/DialogError";

export default function DashboardPage() {
  const [connectionError, showConnectionError] = React.useState(false);

  return (
    <>
      <DialogError
        open={connectionError}
        onClose={() => showConnectionError(false)}
      />
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <TablePaymentTransaction
                  showConnectionError={showConnectionError}
                />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </>
  );
}
