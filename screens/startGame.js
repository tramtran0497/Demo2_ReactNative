import {StyleSheet, TextInput, View} from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGame () {
    return(
        <View style={styles.container}>
            <TextInput 
                style = {styles.textInput}
                keyboardType='number-pad'
                maxLength={2}
            />
            <View style={styles.buttonsContainer}>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    )
};

export default StartGame;

const styles = StyleSheet.create({
    container: {
        marginTop: 100,
        marginHorizontal: 8,
        borderColor: 'purple',
        borderWidth: 1,
        borderRadius: 10,
    },
    textInput: {
        paddingVertical: 8,
        width: 100,
        textAlign: 'center',
        borderBottomColor: 'purple',
        borderBottomWidth: 1,
        alignSelf: 'center',
        fontSize: 32,

    },
    buttonsContainer: {
        flexDirection: 'row',
        
    },
    buttonContainer: {
        flex: 1,
        marginHorizontal: 8,
    },
});
