import {StyleSheet, View, Text, Pressable} from 'react-native';

function PrimaryButton ({children}) {

    function pressHandler() {
        console.log("pressed")
    };
    return(
        <View style={styles.outerContainer}>
            <Pressable style={({pressed}) => pressed ? [styles.innerContainer, styles.pressed]: styles.innerContainer} onPress={pressHandler} android_ripple={{color: 'pink'}}>
                <Text style={styles.textButton}>{children}</Text>
            </Pressable>
        </View>
    )
};

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 6,
        marginVertical: 10,
        overflow: 'hidden',
    },
    textButton: {
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
    innerContainer: {
        backgroundColor: 'purple',
    },
    pressed: {
        opacity: 0.5
    }
});