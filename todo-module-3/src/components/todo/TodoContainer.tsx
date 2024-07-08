// import NoTask from "./NoTask";
import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between mb-10">
        <AddTodoModal />
        <Button>Filter</Button>
      </div>
      <div className="h-full w-full bg-primary-gradient rounded-md p-2">
        <div className="bg-white rounded-md p-3 w-full h-full">
          {/* <NoTask /> */}
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
          <TodoCard />
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;