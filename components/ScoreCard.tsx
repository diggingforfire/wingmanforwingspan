import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface ScoreCardProps {}

const ScoreCard: React.FC<ScoreCardProps> = () => {
  const [scoreCardData, setScoreCardData] = useState({
    players: [
      {
        playerName: 'Player 1',
        birdPoints: 0,
        bonusPoints: 0,
        endOfRoundGoals: 0,
        eggs: 0,
        foodOnCards: 0,
        tuckedCards: 0,
        totalScore: 0,
      },
      {
        playerName: 'Player 2',
        birdPoints: 0,
        bonusPoints: 0,
        endOfRoundGoals: 0,
        eggs: 0,
        foodOnCards: 0,
        tuckedCards: 0,
        totalScore: 0,
      },
    ],
  });


  return (
    <View style={[styles.cardContainer]}>
      <Text style={styles.title}>Wingspan Scorecard</Text>
      <View style={styles.tableContainer}>
        <View style={styles.tableRow}>
          <Text style={styles.tableHeader}></Text>
          {scoreCardData.players.map((player) => (
            <Text key={player.playerName} style={styles.tableHeader}>{player.playerName}</Text>
          ))}
        </View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>Bird Points</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.birdPoints)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].birdPoints = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>Bonus Points</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.bonusPoints)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].bonusPoints = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>End of Round Goals</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.endOfRoundGoals)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].endOfRoundGoals = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>Eggs</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.eggs)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].eggs = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>Food on Cards</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.foodOnCards)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].foodOnCards = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={styles.pointCategory}>Tucked Cards</Text>{scoreCardData.players.map((player, index) => (
          <TextInput
            key={player.playerName}
            value={String(player.tuckedCards)}
            returnKeyType='done'
            onChangeText={(text) => {
              const updatedPlayers = [...scoreCardData.players];
              updatedPlayers[index].tuckedCards = parseInt(text) || 0;
              setScoreCardData({ ...scoreCardData, players: updatedPlayers });
            }}
            style={styles.input}
            keyboardType="numeric"
          />
        ))}</View>
        <View style={styles.tableRow}><Text style={[styles.pointCategory, styles.totalLabel]}>Total Score</Text>{scoreCardData.players.map((player, index) => {
          const totalScore =
            player.birdPoints +
            player.bonusPoints +
            player.endOfRoundGoals +
            player.eggs +
            player.foodOnCards +
            player.tuckedCards;
          return (
            <Text key={player.playerName} style={styles.totalLabel}>{totalScore}</Text>
          );
        })}</View>
      </View>
    </View>
  );
};

export default ScoreCard;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    padding: 0,
    margin: 0,
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  tableContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    overflow: 'hidden',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  pointCategory: {
    flex: 0,
    flexBasis: "30%"
  },
  tableHeader: {
    fontWeight: 'bold',
  },
  totalLabel: {
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 4,
    margin: 2,
    width: 50,
    textAlign: 'center',
  },
});