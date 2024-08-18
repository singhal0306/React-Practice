import React, { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const transformTask = (data) => {
    const loadedTasks = [];

    for (const taskKey in data) {
      loadedTasks.push({ id: taskKey, text: data[taskKey].text });
    }

    setTasks(loadedTasks);
  };
  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  useEffect(() => {
    fetchTasks({
      url: 'https://tasks-a0acf-default-rtdb.firebaseio.com/tasks.json'
    }, transformTask);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
