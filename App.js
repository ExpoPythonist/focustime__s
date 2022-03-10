import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Focus } from './src/features/focus/Focus';
import { colors } from './src/utils/colors';
import { Timer } from './src/features/timer/Timer';
import { spacing } from './src/utils/sizes';

export default function App() {
const [focusSubject, setFocusSubject] = useState("Coding");

  return (
    <View style = {styles.container}>
      {focusSubject ? ( <Timer focusSubject={focusSubject} /> ) : ( <Focus addSubject={setFocusSubject} /> )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: spacing.xxxl,
    backgroundColor: colors.secondary_color,
  },
});
