import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/sizes';
import { colors } from '../../utils/colors';
 
export const Focus = ( { addSubject }) => {
    const [tmpItem, setTmpItem] = useState(null);
    
    return (
        <View style = {styles.container}> 
            <View style = {styles.titleContainer}>
                <Text style = {styles.title}>What would you like to focus on?</Text>
                <View style = {styles.inputContainer}> 
                <TextInput style = {styles.input} 
                onSubmitEditing = {
                    ({nativeEvent}) => {
                        setTmpItem(nativeEvent.text)
                    }
                }
                /> 
                < RoundedButton size={50} title= '+' onPress = {() => {
                    addSubject(tmpItem)
                }} />
                </View>
            </View>
                
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flex: .5,
        padding: spacing.md,
        justifyContent: "center",
    },
    title: {
        color: colors.primary_color,
        fontWeight: "bold",
        fontSize: fontSizes.lg
    },
    inputContainer: {
        paddingTop: spacing.md,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1, 
        marginRight: spacing.md, 
        borderWidth: 2, 
        borderColor: colors.primary_color,
        backgroundColor: colors.lightGray
    }
})
