import "./App.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const {
    isPending,
    error,
    data: users,
  } = useQuery({
    queryKey: ["users"],
    queryFn: () =>
      axios.get("https://reqres.in/api/users").then((res) => res.data.data),

    staleTime: 3000,
  });

  if (isPending) return "Loading...";

  if (error) return "error is" + error.message;

  return (
    <>
      {users.map((item) => (
        <p key={item.id}>
          {item.first_name} {item.last_name}
        </p>
      ))}
    </>
  );
}

export default App;
