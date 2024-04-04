import { Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useSort } from "./store/table-context";
import ErrorSnackbar from "./components/ErrorSnackbar";

const App = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(50);
  const [error, setError] = useState(null);
  const { state, dispatch } = useSort();

  useEffect(() => {
    const fetchTags = async () => {
      setLoading(true);
      try {
        const url = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pageSize}&order=desc&sort=popular&site=stackoverflow`;
        const res = await axios.get(url);
        const fetchedTags = res.data.items.map((tag, index) => ({
          id: index + 1,
          name: tag.name,
          count: tag.count,
        }));
        setTags(fetchedTags);
        setError(null);
      } catch (err) {
        console.error(err);
        setError("Błąd ładowania tagów. Wprowadzona liczba strony lub liczba tagów może być niepoprawna");
      } finally {
        setLoading(false);
      }
    };

    if (page > 0 && pageSize > 0) {
      fetchTags();
    }
  }, [page, pageSize]);

  const sortBy = (field) => {
    const direction = state.sortDirection[field] === "asc" ? "desc" : "asc";
    dispatch({ type: "TOGGLE_SORT", payload: { field } });
    const sortedTags = [...tags].sort((a, b) => {
      return direction === "asc"
        ? a[field] < b[field]
          ? -1
          : 1
        : a[field] > b[field]
        ? -1
        : 1;
    });
    setTags(sortedTags);
  };

  const handleCloseError = () => {
    setError(null);
  };

  return (
    <div>
      <Typography variant="h5">List of Tags</Typography>
      <Navbar
        page={page}
        pageSize={pageSize}
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
      />
      {loading ? <CircularProgress /> : <Main tags={tags} onSort={sortBy} />}
      <ErrorSnackbar
        open={!!error}
        message={error}
        onClose={handleCloseError}
      />
    </div>
  );
};

export default App;
