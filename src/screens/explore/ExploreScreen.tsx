import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

const initState = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
];

const ExploreScreen = () => {
  const [matrix, setMatrix] = useState(initState);
  const [turn, setTurn] = useState(true);

  const handleClick = (row, col) => {
    setTurn(!turn);
    matrix[row][col] = turn ? 'X' : 'O';
    setMatrix([...matrix]);
  };

  const Box = ({ data, _handleClick }) => {
    return (
      <Pressable disabled={!!data} style={styles.box} onPress={_handleClick}>
        <Text>{data}</Text>
      </Pressable>
    );
  };

  const Row = ({ data, _handleClick }) => {
    return (
      <View style={styles.row}>
        {data.map((col, index) => (
          <Box
            key={index}
            data={col}
            _handleClick={() => _handleClick(index)}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.area}>
      <View style={styles.container}>
        {matrix.map((row, index) => (
          <Row
            key={index}
            data={row}
            _handleClick={col => handleClick(index, col)}
          />
        ))}
      </View>
      <Pressable
        onPress={() => {
          console.log('avc');

          setMatrix([...initState]);
        }}>
        <Text>Reset</Text>
      </Pressable>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  area: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    borderColor: 'black',
    borderWidth: 1,
  },
  row: {
    flexDirection: 'row',
  },
  box: {
    width: 50,
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 30,
    height: 30,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 100,
  },
  txtX: {
    fontSize: 30,
  },
});
