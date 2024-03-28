import "./App.css";
import { useUsers } from "./services/queries";

function App() {
  const { isPending, error, data: users } = useUsers();

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
