import { Warning } from "@mui/icons-material";
import { Box, Button, Stack, Typography } from "@mui/material";
import { useModalAction, useModalState } from "../ui/modal/modal.context";
import useDeleteStudent from "../../query/student/useDeleteStudent";
import { LoadingButton } from "@mui/lab";
import { useTranslation } from "react-i18next";

const DeleteConfirm = () => {
  const { closeModal } = useModalAction();

  const { t } = useTranslation();

  const { data: studentId } = useModalState();

  const { mutateAsync, isPending } = useDeleteStudent();

  const handleDelete = () => {
    mutateAsync(studentId).then(() => {
      closeModal();
    });
  };

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
          {t("common:sureAction")}
        </Typography>
        <Typography variant="body2" color="#131212CC" mt={1}>
          {t("student:deleteConfirm")}
        </Typography>
        <Typography variant="body2" color="#F34235">
          {t("common:actionConnetBeUndone")}
        </Typography>
        <Stack direction="row" spacing={2} mt={3}>
          <LoadingButton
            onClick={handleDelete}
            loading={isPending}
            fullWidth
            variant="contained"
            color="error"
          >
            {t("common:delete")}
          </LoadingButton>
          <Button
            fullWidth
            color="error"
            variant="outlined"
            onClick={closeModal}
          >
            {t("common:cancel")}
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default DeleteConfirm;
