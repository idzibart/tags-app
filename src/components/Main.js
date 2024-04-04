import { Table, TableBody } from "@mui/material";
import TagTableHeader from "./TagTableHeader";
import TagTableRow from "./TagTableRow";

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
