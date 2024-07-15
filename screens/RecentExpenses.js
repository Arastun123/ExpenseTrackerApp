import { Text } from "react-native";
import ExpensesOutput from "../components/Expenses/ExpensesOutput";
import { useContext, useEffect } from "react";
import { ExpensesContext } from "../store/expense-context";
import { getDateMinusDays } from "../util/date";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
    const expenseCtx = useContext(ExpensesContext);
    
    useEffect(() => {
        async function getExpenses(){
            const expenses = fetchExpenses();
            expenseCtx.setExpenses(expenses);
        }
    }, []);

    const recentExpense = expenseCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date > date7DaysAgo;
    })
    return (
        <ExpensesOutput expenses={recentExpense} expensesPeriod='Last 7 days' fallbackText='No expeses register for the last 7 days'/>
    )
}

export default RecentExpenses;