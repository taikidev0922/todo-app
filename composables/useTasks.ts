interface Task {
  /** タスクID */
  id: number;
  /** タスク名 */
  name: string;
  /** 完了フラグ */
  done: boolean;
}

// こいつはグローバルに共有される
const _tasks = ref<Task[]>([]);

/**
 * タスク一覧を管理する
 * @returns タスク一覧とタスク操作関数
 */
export function useTasks() {
  /**
   * タスク一覧を返す
   */
  const tasks = computed(() => _tasks.value);

  /**
   * タスクを追加する
   * @param taskName タスク名
   */
  const addTask = (taskName: string) => {
    _tasks.value.push({
      id: _tasks.value.length + 1,
      name: taskName,
      done: false,
    });
  };

  /**
   * タスクを編集する
   * @param task 編集するタスク
   */
  const editTask = (task: Task) => {
    const index = _tasks.value.findIndex((t) => t.id === task.id);
    _tasks.value[index].name = task.name;
  };

  /**
   * タスクを削除する
   * @param task 削除するタスク
   */
  const deleteTask = (task: Task) => {
    const index = _tasks.value.findIndex((t) => t.id === task.id);
    _tasks.value.splice(index, 1);
  };

  return {
    tasks,
    addTask,
    editTask,
    deleteTask,
  };
}
