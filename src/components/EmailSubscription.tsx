import React from "react";
import { Box, Typography, TextField, Button, useTheme } from "@mui/material";

const EmailSubscription = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        mt: 8,
        px: 2,
        py: 6,
        textAlign: "center",
        backgroundColor: "#f7f7f7",
        borderRadius: 3,
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, fontWeight: "bold", color: "black" }}
      >
        h
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: 2,
          maxWidth: 500,
          mx: "auto",
        }}
      >
        <TextField
          type="email"
          label="g"
          variant="outlined"
          fullWidth
          size="medium"
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ px: 4, py: 1.5, fontWeight: "bold" }}
        >
          Lorem ipsum dolor sit . Tempore, modi.
        </Button>
      </Box>
    </Box>
  );
};

export default EmailSubscription;
