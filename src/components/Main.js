import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { useSort } from "../store/table-context";

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
            {state.sortDirection[field] === "asc" ? (
              <ArrowUpward />
            ) : (
              <ArrowDownward />
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const TagTableRow = ({ tag }) => (
  <TableRow key={tag.id}>
    <TableCell>{tag.id}</TableCell>
    <TableCell>{tag.name}</TableCell>
    <TableCell>{tag.count}</TableCell>
  </TableRow>
);

const Main = ({ tags, onSort }) => (
  <Table>
    <TagTableHeader onSort={onSort} />
    <TableBody>
      {tags.map((tag) => (
        <TagTableRow key={tag.id} tag={tag} />
      ))}
    </TableBody>
  </Table>
);

export default Main;
