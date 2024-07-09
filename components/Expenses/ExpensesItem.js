import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormatedDAte } from "../../util/date";
import { useNavigation } from "@react-navigation/native";

function ExpensesItem({ id, description, date, amount }) {
    const navigation = useNavigation();

    function expensePressHandler() {
        navigation.navigate('ManageExpense',{
            expenseId: id
        });
    }

    return (
        <Pressable
            onPress={expensePressHandler}
            style={({pressed}) => pressed && style.press}
        >
            <View style={style.expenseItem}>
                <View>
                    <Text style={[style.textBase, style.description]}>{description}</Text>
                    <Text style={style.textBase}>{getFormatedDAte(date)}</Text>
                </View>
                <View style={style.amountContainer}>
                    <Text style={style.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default ExpensesItem;

const style = StyleSheet.create({
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4
    },
    textBase: {
        color: GlobalStyles.colors.primary100,
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold',
    },
    amountContainer: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        minWidth: 80,
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold',
    },
    press: {
        opacity: 0.75
    }
})