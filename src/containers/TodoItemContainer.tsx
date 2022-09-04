import { connect } from 'react-redux';
import setDone from "../actions/setDone";
import deleteTodo from "../actions/deleteTodo";
import setLabel from "../actions/setLabel";
import TodoItem from "../components/TodoItem";
import toggleDone from "../actions/toggleDone";


const Container = (props: any) => <TodoItem {...props} />;


const mapDispatchToProps = {
    setLabel,
    deleteTodo,
    setDone,
    toggleDone,
};


const TodoItemContainer = connect(null, mapDispatchToProps)(Container);
export default TodoItemContainer;
