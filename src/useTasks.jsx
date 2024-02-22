import useAddTask from './useAddTask';

const useTasks = () => {
  const { tasks } = useAddTask();
  return { tasks };
};

export default useTasks;
