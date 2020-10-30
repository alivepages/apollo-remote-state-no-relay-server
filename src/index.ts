import { TodoRepo } from './modules/todos/repos/todoRepo';
import { createLocalServer } from "./server";

export type Context = { todosRepo: TodoRepo }

const server = createLocalServer();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

