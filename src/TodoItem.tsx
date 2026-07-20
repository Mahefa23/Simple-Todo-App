import { Trash } from 'lucide-react';
import type { Todo } from './types/todo';

interface TodoItemProps {
    todo: Todo;
    onDelete: (id: number) => void;
    isSelected?: boolean;
    onToggleSelect?: (id: number) => void;
}

function TodoItem({ todo, onDelete, isSelected, onToggleSelect }: TodoItemProps) {
    return (
        <li className="p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        className="checkbox checkbox-primary checkbox-sm" 
                        checked={isSelected} 
                        onChange={() => onToggleSelect && onToggleSelect(todo.id)}
                    />
                    <span className="text-md font-medium">
                        <span>{todo.text}</span>
                    </span>
                    <span className={`badge ${todo.priority === "Urgent" ? "badge-error" : todo.priority === "Moyenne" ? "badge-warning" : "badge-success"} badge-sm`}>
                        {todo.priority}
                    </span>
                </div>
                <button className="btn btn-error btn-soft btn-sm" onClick={() => onDelete(todo.id)}>

                    <Trash className="w-4 h-4" />
                </button>

            </div>
        </li>
    );
}

export default TodoItem;
