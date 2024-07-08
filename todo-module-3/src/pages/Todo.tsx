import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h1 className="text-center my-10 text-3xl">My Todos</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
