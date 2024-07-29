// import NoTask from "./NoTask";
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import NoTask from "./NoTask";

const TodoContainer = () => {
  const { todos } = useAppSelector((store) => store.todos);

  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="h-full w-full bg-primary-gradient rounded-md p-2">
        <div className="bg-white rounded-md p-3 w-full h-full">
          {todos.length > 0 ? (
            todos.map((item) => <TodoCard {...item} />)
          ) : (
            <NoTask />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
