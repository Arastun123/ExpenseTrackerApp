import { Text, View } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext } from "react";
import { ExpensesContext } from "../store/expense-context";

function AllExpenses() {
    const expenseCtx = useContext(ExpensesContext)
    return (
        <ExpensesOutput
            expenses={expenseCtx.expenses}
            expensesPeriod="Total"
            fallbackText="No registered expenses found!"
        />
    )
}

export default AllExpenses;