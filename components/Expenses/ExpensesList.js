import { FlatList, Text, View } from "react-native";
import ExpensesItem from "./ExpensesItem";


function renderExpenseItem(itemData) {
    return <ExpensesItem {...itemData.item}/>
}
function ExpensesList({ expenses }) {
    return (
        <FlatList
            data={expenses}
            renderItem={renderExpenseItem}
            keyExtractor={(item) => item.id}
        />
    )
}

export default ExpensesList;