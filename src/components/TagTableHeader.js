import { TableHead, TableRow, TableCell } from "@mui/material";
import { useSort } from "../store/table-context";
import Sort from "./Sort";

const TagTableHeader = ({ onSort }) => {
  const { state } = useSort();

  return (
    <TableHead>
      <TableRow>
        {["id", "name", "count"].map((field) => (
          <TableCell
            key={field}
            style={{ cursor: "pointer" }}
            onClick={() => onSort(field)}
          >
            {field.charAt(0).toUpperCase() + field.slice(1)}
            <Sort direction={state.sortDirection[field]} />
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default TagTableHeader;
