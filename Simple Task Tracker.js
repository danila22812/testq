// Simple Task Tracker

class Task {
  constructor(description) {
    this.description = description;
    this.completed = false;
  }
}

class TaskTracker {
  constructor() {
    this.tasks = [];
  }

  addTask(description) {
    const task = new Task(description);
    this.tasks.push(task);
    console.log(`Task "${description}" added.`);
  }

  completeTask(description) {
    const task = this.findTask(description);
    if (task) {
      task.completed = true;
      console.log(`Task "${description}" marked as completed.`);
    } else {
      console.log(`Task "${description}" not found.`);
    }
  }

  listTasks() {
    console.log("Tasks:");
    for (const task of this.tasks) {
      const status = task.completed ? "[X]" : "[ ]";
      console.log(`${status} ${task.description}`);
    }
  }

  findTask(description) {
    return this.tasks.find((task) => task.description === description);
  }
}

// Usage example
const taskTracker = new TaskTracker();
taskTracker.addTask("Complete homework");
taskTracker.addTask("Read a book");
taskTracker.listTasks();
taskTracker.completeTask("Complete homework");
taskTracker.listTasks();
