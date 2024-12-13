import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const fontFamily = Platform.select({
  ios: 'Jersey 25',
  android: 'Jersey25-Regular'
});

const ResultsScreen = ({ navigation, route }) => {
  const { score, quizType, totalQuestions } = route.params;
  const wrongAnswers = totalQuestions - score;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Complete!</Text>
      
      <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>Final Score:</Text>
        <Text style={styles.score}>{score}/{totalQuestions}</Text>
        
        <View style={styles.statsContainer}>
          <Text style={styles.statText}>✅ Correct: {score}</Text>
          <Text style={styles.statText}>❌ Wrong: {wrongAnswers}</Text>
          <Text style={styles.statText}>
            Accuracy: {Math.round((score / totalQuestions) * 100)}%
          </Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.retryButton]}
          onPress={() => navigation.replace('Quiz', { quizType })}
        >
          <Text style={styles.buttonText}>Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.button, styles.homeButton]}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#25202091',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontFamily: fontFamily,
    fontSize: 32,
    color: '#fff',
    marginBottom: 30,
  },
  scoreContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  scoreText: {
    fontFamily: fontFamily,
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
  },
  score: {
    fontFamily: fontFamily,
    fontSize: 48,
    color: '#fff',
    marginBottom: 20,
  },
  statsContainer: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  statText: {
    fontFamily: fontFamily,
    fontSize: 18,
    color: '#fff',
    marginVertical: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    padding: 15,
    borderRadius: 8,
    width: '45%',
  },
  retryButton: {
    backgroundColor: '#6d6b85',
  },
  homeButton: {
    backgroundColor: '#344474',
  },
  buttonText: {
    fontFamily: fontFamily,
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ResultsScreen;