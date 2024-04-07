import { useState, useEffect } from 'react';
import { TaskForm } from '@/components/Tasks/TaskForm';
import { getTasks } from '@/api/tasks';
import { Task } from '@/components/Tasks/Task';

export const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const loadTasks = () => getTasks().then((data) => setTasks(data));

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-y-3">
      <TaskForm onSubmit={loadTasks} />
      {tasks.length ? (
        <div className="w-full flex flex-col justify-center items-center gap-y-3">
          {tasks.map((taskProps) => (
            <Task key={taskProps.id} {...taskProps} onAction={loadTasks} />
          ))}
        </div>
      ) : (
        <p>No tasks</p>
      )}
    </div>
  );
};
