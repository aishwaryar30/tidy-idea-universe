
import { useState } from "react";
import { Plus } from "lucide-react";

interface TodoInputProps {
  onAdd: (text: string) => void;
}

export const TodoInput = ({ onAdd }: TodoInputProps) => {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="flex gap-2">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-mint-200 transition-all duration-200"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-mint-400 text-white rounded-lg hover:bg-mint-500 transition-colors duration-200 flex items-center gap-2"
        >
          <Plus className="w-5 h-5" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};
