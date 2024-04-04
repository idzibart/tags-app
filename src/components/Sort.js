import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Sort = ({ direction }) => (
  direction === "asc" ? <ArrowUpward /> : <ArrowDownward />
);

export default Sort;
