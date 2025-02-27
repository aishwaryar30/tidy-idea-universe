
import { useState } from "react";
import { TodoInput } from "@/components/TodoInput";
import { TodoItem } from "@/components/TodoItem";
import { Todo } from "@/types/todo";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const { toast } = useToast();

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text,
      completed: false,
    };
    setTodos((prev) => [newTodo, ...prev]);
    toast({
      title: "Task added",
      description: "Your new task has been added successfully.",
      duration: 2000,
    });
  };

  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    toast({
      title: "Task deleted",
      description: "The task has been removed.",
      duration: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-mint-50 px-4">
      <div className="max-w-2xl mx-auto pt-16 pb-32">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-800 mb-2">Tasks</h1>
          <p className="text-gray-600">Manage your tasks with elegance</p>
        </div>
        
        <div className="bg-white/40 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/50">
          <TodoInput onAdd={addTodo} />
          
          <div className="space-y-1">
            {todos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggle={toggleTodo}
                onDelete={deleteTodo}
              />
            ))}
          </div>
          
          {todos.length === 0 && (
            <div className="text-center py-12 text-gray-500 animate-fade-in">
              No tasks yet. Add one to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
