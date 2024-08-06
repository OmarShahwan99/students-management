import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useLanguage } from "../../contexts/language.context";
import { Delete, Edit } from "@mui/icons-material";
import { StudentModel } from "../../models/student";
import { useModalAction } from "../ui/modal/modal.context";
import TableSkeleton from "../ui/TableSkeleton";

const StudentsTable = ({
  data,
  isLoading,
}: {
  data: StudentModel[];
  isLoading: boolean;
}) => {
  const { getLocaleString } = useLanguage();
  const { openModal } = useModalAction();
  return (
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
        <TableBody>
          {isLoading ? (
            <TableSkeleton rowCount={5} />
          ) : (
            data?.map((student) => (
              <TableRow key={student.id}>
                <TableCell>{student.firstName}</TableCell>
                <TableCell>{student.lastName}</TableCell>
                <TableCell>{student.birthDate.split("T")[0]}</TableCell>
                <TableCell>
                  {getLocaleString(student.grade.translations)}
                </TableCell>
                <TableCell>
                  {getLocaleString(student.gender.translations)}
                </TableCell>
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
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StudentsTable;
