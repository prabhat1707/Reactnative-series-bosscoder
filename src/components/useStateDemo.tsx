import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function UseStateDemo() {
      const [count, setCount] = useState(1);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>useState – Counter</Text>

      <Text style={styles.count}>{count}</Text>

      <View style={styles.row}>
        {/* Decrease button */}
        <Pressable
          style={({ pressed }) => [styles.btn, styles.decrease, pressed && styles.pressed]}
          onPress={() => setCount(prev => prev - 1)}
        >
          <Text style={styles.btnText}>− Decrease</Text>
        </Pressable>

        {/* Reset button */}
        <Pressable
          style={({ pressed }) => [styles.btn, styles.reset, pressed && styles.pressed]}
          onPress={() => setCount(0)}
        >
          <Text style={styles.btnText}>Reset</Text>
        </Pressable>

        {/* Increase button */}
        <Pressable
          style={({ pressed }) => [styles.btn, styles.increase, pressed && styles.pressed]}
          onPress={() => setCount(prev => prev *2)}
        >
          <Text style={styles.btnText}>+ Increase</Text>
        </Pressable>
      </View>

      <Text style={styles.hint}>
        Current value: <Text style={styles.hintBold}>{count}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#1a1a2e',
  },
  count: {
    fontSize: 72,
    fontWeight: '800',
    color: '#6200ee',
    marginBottom: 32,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  decrease: {
    backgroundColor: '#e53935',
  },
  reset: {
    backgroundColor: '#757575',
  },
  increase: {
    backgroundColor: '#43a047',
  },
  pressed: {
    opacity: 0.7,
  },
  btnText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  hint: {
    fontSize: 14,
    color: '#555',
  },
  hintBold: {
    fontWeight: 'bold',
    color: '#6200ee',
  },
});
