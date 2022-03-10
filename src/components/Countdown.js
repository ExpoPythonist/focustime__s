import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacing } from "../utils/sizes";

const minutesToMiliseconds = (min) => min * 1000 * 60;
const formatTime = (time) => time < 10 ? `0${time}` : time;

export const Countdown = ({
    minutes = 1,
    isPaused,
    onProgress,
  }) => {
    const interval = React.useRef(null);
    
    const countDown = () => 
        setmilis((time) => {
            if( time === 0) {
                return time;
            }
            const timeLeft = time - 1000;
            onProgress(timeLeft / minutesToMiliseconds(minutes));
            return timeLeft;
        });

    useEffect(() => {
        if (isPaused) {
            if(interval.current) clearInterval(interval.current);
            return;
        }
        interval.current = setInterval(countDown, 1000); 
        return () => clearInterval(interval.current)
    }, [isPaused])
     

    const [milis, setmilis] = useState(minutesToMiliseconds(minutes))

    const minute = Math.floor( milis / 1000 / 60) % 60;
    const seconds = Math.floor( milis / 1000) % 60;

    return (
        <Text style = {styles.text}>{formatTime(minute)}:{formatTime(seconds)}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.primary_color,
        fontSize: fontSizes.xxxl,
        fontWeight: "bold",
        padding: spacing.lg,
        backgroundColor: 'rgba(94, 132, 226, 0.3)'
    }
})