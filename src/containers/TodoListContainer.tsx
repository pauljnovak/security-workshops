import { connect } from 'react-redux';
import TodoList from "../components/TodoList";
import addTodo from "../actions/addTodo";
import setDone from "../actions/setDone";
import deleteTodo from "../actions/deleteTodo";


const Container = (props: any) => <TodoList {...props} />;

// @ts-ignore
const mapStateToProps = ({ todo }) => ({
    todos: todo.todos,
});

const mapDispatchToProps = {
    addTodo,
    deleteTodo,
    setDone
};

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
export default TodoListContainer;
