
import { Todo } from "@/types/todo";
import { Check, Trash } from "lucide-react";
import { cn } from "@/lib/utils";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div
      className={cn(
        "group flex items-center justify-between p-4 mb-3 rounded-lg bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm transition-all duration-300",
        "hover:shadow-md hover:bg-white/90",
        "animate-slide-in"
      )}
    >
      <div className="flex items-center gap-3">
        <button
          onClick={() => onToggle(todo.id)}
          className={cn(
            "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
            todo.completed
              ? "bg-mint-400 border-mint-400"
              : "border-gray-300 hover:border-mint-400"
          )}
        >
          {todo.completed && <Check className="w-4 h-4 text-white" />}
        </button>
        <span
          className={cn(
            "text-gray-700 transition-all duration-200",
            todo.completed && "line-through text-gray-400"
          )}
        >
          {todo.text}
        </span>
      </div>
      <button
        onClick={() => onDelete(todo.id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:text-red-500"
      >
        <Trash className="w-4 h-4" />
      </button>
    </div>
  );
};
