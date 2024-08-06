import { Add, FilterAltOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useModalAction } from "../../components/ui/modal/modal.context";
import useStudents from "../../query/student/useStudents";
import StudentsTable from "../../components/student/StudentsTable";
import { Dispatch, useState } from "react";
import { SetStateAction } from "jotai";

const Filteration = ({
  value,
  setValue,
}: {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Box display="flex" alignItems="center" gap={2} m={1}>
      <Typography
        component="span"
        variant="body2"
        display="flex"
        color="primary"
      >
        <FilterAltOutlined />
        Filter By:
      </Typography>
      <Stack direction="row" spacing={2}>
        <TextField
          onChange={(e) => setValue(e.target.value)}
          value={value}
          size="small"
          placeholder="Search by first name, last.."
        />
      </Stack>
    </Box>
  );
};

const Students = () => {
  const { openModal } = useModalAction();

  const [searchValue, setSearchValue] = useState("");

  const { data, isLoading } = useStudents();

  const filteredData = data?.filter(
    (student) =>
      student.firstName
        .toLocaleLowerCase()
        .startsWith(searchValue.toLocaleLowerCase()) ||
      student.lastName
        .toLocaleLowerCase()
        .startsWith(searchValue.toLocaleLowerCase())
  );

  return (
    <Card variant="outlined">
      <CardHeader
        title="Student's Data"
        action={
          <Button
            variant="contained"
            endIcon={<Add />}
            onClick={() => openModal("ADD_UPDATE_STUDENT")}
          >
            Add Student
          </Button>
        }
      />
      <Filteration value={searchValue} setValue={setSearchValue} />
      <Divider />
      <CardContent>
        <StudentsTable data={filteredData!} isLoading={isLoading} />
      </CardContent>
    </Card>
  );
};

export default Students;
