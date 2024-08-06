import { Add, Delete, Edit } from "@mui/icons-material";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useModalAction } from "../../components/ui/modal/modal.context";
import useStudents from "../../query/student/useStudents";

const Students = () => {
  const { openModal } = useModalAction();
  const { data, isLoading } = useStudents();
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
      <CardContent>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>LastName</TableCell>
                <TableCell>Date of Birth</TableCell>
                <TableCell>Education Level</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Country</TableCell>
                <TableCell>City</TableCell>
                <TableCell>Mobile Number</TableCell>
                <TableCell>Notes</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            {data?.map((student) => (
              <TableBody>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.birthDate}</TableCell>
                <TableCell>{student.grade.translations[0].name}</TableCell>
                <TableCell>{student.gender.translations[0].name}</TableCell>
                <TableCell>{student.country}</TableCell>
                <TableCell>{student.city}</TableCell>
                <TableCell>{student.phone}</TableCell>
                <TableCell>{student.remarks}</TableCell>
                <TableCell>
                  <Stack flexDirection="row">
                    <IconButton
                      size="small"
                      color="error"
                      onClick={() =>
                        openModal("DELETE_CONFIRM", student.id, "xs")
                      }
                    >
                      <Delete />
                    </IconButton>
                    <IconButton
                      onClick={() => openModal("ADD_UPDATE_STUDENT", student)}
                      size="small"
                    >
                      <Edit />
                    </IconButton>
                  </Stack>
                </TableCell>
              </TableBody>
            ))}
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default Students;
