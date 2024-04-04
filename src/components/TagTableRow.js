import { TableRow, TableCell } from "@mui/material";

const TagTableRow = ({ tag }) => (
  <TableRow key={tag.id}>
    <TableCell>{tag.id}</TableCell>
    <TableCell>{tag.name}</TableCell>
    <TableCell>{tag.count}</TableCell>
  </TableRow>
);

export default TagTableRow;
