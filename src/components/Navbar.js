import { TextField } from "@mui/material";

const Navbar = ({ page, pageSize, onPageChange, onPageSizeChange }) => (
  <div style={{ marginBottom: "20px" }}>
    <TextField
      label="Strona"
      type="number"
      value={page}
      onChange={(e) => onPageChange(parseInt(e.target.value))}
      style={{ marginRight: "10px" }}
    />
    <TextField
      label="Ilość tagów na stronie"
      type="number"
      value={pageSize}
      onChange={(e) => onPageSizeChange(parseInt(e.target.value))}
      style={{ marginRight: "10px" }}
    />
  </div>
);

export default Navbar;
