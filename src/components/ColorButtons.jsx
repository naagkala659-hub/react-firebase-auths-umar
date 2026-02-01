import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function ColorButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button color="secondary">Secondary</Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="filled" color="#611709">
        costum
      </Button>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "#611709",
          "&:hover": {
            backgroundColor: "#3700b3",
          },
        }}
      >
        Custom Color Button
      </Button>
    </Stack>
  );
}
