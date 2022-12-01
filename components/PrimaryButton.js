import {StyleSheet, View, Text} from 'react-native';

function PrimaryButton ({children}) {
    return(
        <View style={styles.container}>
            <Text style={styles.textButton}>{children}</Text>
        </View>
    )
};

export default PrimaryButton;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'purple',
        borderRadius: 6,
        marginVertical: 10,
        backgroundColor: 'purple'
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
    }
});