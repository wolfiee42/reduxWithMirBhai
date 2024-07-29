// import NoTask from "./NoTask";
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import NoTask from "./NoTask";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  // from local State
  // const { todos } = useAppSelector((store) => store.todos);

  // from server
  const { data: todos, isLoading, isError } = useGetTodosQuery(undefined);
  console.log(todos);

  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="h-full w-full bg-primary-gradient rounded-md p-2">
        <div className="bg-white rounded-md p-3 w-full h-full">
          {todos?.length > 0 ? (
            todos.map((item: any) => {
              return <p>{item.name}</p>;
            })
          ) : (
            <NoTask />
          )}
        </div>
        {/* <div className="bg-white rounded-md p-3 w-full h-full">
          {todos.length > 0 ? (
            todos.map((item: any) => <TodoCard key={item.id} {...item} />)
          ) : (
            <NoTask />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
