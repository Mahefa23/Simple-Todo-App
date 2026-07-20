import { Trash } from 'lucide-react';
import type { Todo } from './types/todo';

interface TodoItemProps {
    todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
    return (
        <li className="p-3">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input type="checkbox" className="checkbox checkbox-primary checkbox-sm" />
                    <span className="text-md font-medium">
                        <span>{todo.text}</span>
                    </span>
                    <span className={`badge ${todo.priority === "Urgent" ? "badge-error" : todo.priority === "Moyenne" ? "badge-warning" : "badge-success"} badge-sm`}>
                        {todo.priority}
                    </span>
                </div>
                <button className="btn btn-ghost btn-sm">

                    <Trash />
                </button>

            </div>
        </li>
    );
}

export default TodoItem;
