import { useEffect, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import { Skeleton } from "@mui/lab";

const TableSkeleton = ({ rowCount = 5 }: { rowCount?: number }) => {
  const [columnCount, setColumnCount] = useState(10);

  useEffect(() => {
    const tableHead = document.querySelector("thead");
    if (tableHead) {
      const cols = tableHead.querySelectorAll("th").length;
      setColumnCount(cols);
    }
  }, []);

  return Array.from(new Array(rowCount)).map((_, rowIndex) => (
    <TableRow key={rowIndex}>
      {Array.from(new Array(columnCount)).map((_, colIndex) => (
        <TableCell key={colIndex}>
          <Skeleton variant="text" />
        </TableCell>
      ))}
    </TableRow>
  ));
};

export default TableSkeleton;
