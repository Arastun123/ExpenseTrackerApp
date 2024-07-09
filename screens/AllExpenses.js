import { Text, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";

function AllExpenses() {
    return (
        <ExpensesOutput expensesPeriod='Total' />
    )
}

export default AllExpenses;