import { Warning } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useModalAction } from "../ui/modal/modal.context";

const DeleteConfirm = () => {
  const { closeModal } = useModalAction();
  return (
    <Box>
      <Box
        height="140px"
        bgcolor="#F34235"
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{ borderBottomLeftRadius: "11px", borderBottomRightRadius: "11px" }}
      >
        <Warning sx={{ color: "#fff", fontSize: "4rem" }} />
      </Box>
      <Box p={4} mt={2} textAlign="center">
        <Typography color="#F34235" variant="h4">
          Are you sure ?
        </Typography>
        <Typography variant="body2" color="#131212CC" mt={1}>
          Are you sure you want to delete this student's information?
        </Typography>
        <Typography variant="body2" color="#F34235">
          This action connet be undone.
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <Button fullWidth variant="contained" color="error">
            Delete
          </Button>
          <Button
            fullWidth
            color="error"
            variant="outlined"
            onClick={closeModal}
          >
            Cancel
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default DeleteConfirm;
