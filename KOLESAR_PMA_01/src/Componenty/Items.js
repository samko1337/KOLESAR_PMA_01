import { useState } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

export default function Item({ title }) {
  const [isGreen, setIsGreen] = useState(false);

  function handlePress() {
    setIsGreen((current) => !current);
  }

  return (
    <Pressable onPress={handlePress}>
      <Text
        style={[
          styles.taskItem,
          { backgroundColor: isGreen ? 'green' : 'red' },
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    margin: 5,
    borderRadius: 8,
    padding: 5,
    fontSize: 16,
  },
});