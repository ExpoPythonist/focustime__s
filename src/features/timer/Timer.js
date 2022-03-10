import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Button } from 'react-native';
import { colors } from '../../utils/colors';
import { spacing } from '../../utils/sizes';
import { Countdown } from '../../components/Countdown'
import { RoundedButton } from '../../components/RoundedButton';
import { ProgressBar } from "react-native-paper";

export const Timer = ({ focusSubject }) => {
    const [isStarted, setStarted] = useState(false);
    const [progress, setProgress] = useState(1);
    const onProgress = (progress) => {
        setProgress(progress);
      };

    return (
        <View style = {styles.container}>
            <View style = {styles.countdown}> 
                <Countdown
                    isPaused={!isStarted}
                    onProgress={onProgress}
                />
            </View>
            <View style = {{ paddingTop: spacing.sm }}>  
                <Text style = {styles.title}>Focusing on:</Text>
                <Text style = {styles.task}>{focusSubject}</Text>      
            </View>
            <View style={{paddingTop:spacing.md}}>
                <ProgressBar progress={progress} style={{height:10}} color='#5E84E2'/>
            </View>
            <View style={styles.buttonwrapper}>
                {isStarted ? (
                        <RoundedButton title="Pause" onPress={() => setStarted(false)} />
                        ):( 
                        <RoundedButton title="Start" onPress={() => setStarted(true)} />
                        ) }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        color: colors.primary_color,
        textAlign: "center",
        fontSize: 25
    },
    task: {
        color: colors.primary_color,
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 35
    },
    countdown: {
        flex: 0.5,
        alignItems: "center",
        justifyContent: "center",
        padding: spacing.lg
    },
    buttonwrapper: {
        flex: 0.3,
        padding: spacing.lg,
        alignItems: "center",
        justifyContent: "center"
    }
})

