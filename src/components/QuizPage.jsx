import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform, Image, Dimensions } from 'react-native';
import Sound from 'react-native-sound';
import { questions } from '../data/questions';

const { width, height } = Dimensions.get('window');

// Define font family based on platform
const fontFamily = Platform.select({
  ios: 'Jersey 25',
  android: 'Jersey25-Regular'
});

const QuizPage = ({ navigation, route }) => {
  const { quizType } = route.params || { quizType: 'default' };
  const quizQuestions = questions[quizType];
  const [soundsLoaded, setSoundsLoaded] = useState(false);
  const correctSound = useRef(null);
  const incorrectSound = useRef(null);

  // Get background color based on quiz type
  const getBackgroundColor = () => {
    switch(quizType) {
      case 'AFC':
        return '#FF0000'; 
      case 'default':
        return '#000000'; 
      default:
        return '#344474'; 
    }
  };

  // Initialize sounds in useEffect
  useEffect(() => {
    // Enable playback in silence mode
    Sound.setCategory('Playback');

    // Initialize correct sound
    const correct = new Sound(
      Platform.select({
        ios: 'correct.mp3',
        android: 'correct.mp3',
      }), 
      Platform.select({
        ios: '',
        android: Sound.MAIN_BUNDLE,
      }),
      (error) => {
        if (error) {
          console.log('Failed to load correct sound', error);
        } else {
          correct.setVolume(1.0);
          setSoundsLoaded(true);
        }
      }
    );

    // Initialize incorrect sound
    const incorrect = new Sound(
      Platform.select({
        ios: 'incorrect.mp3',
        android: 'incorrect.mp3',
      }), 
      Platform.select({
        ios: '',
        android: Sound.MAIN_BUNDLE,
      }),
      (error) => {
        if (error) {
          console.log('Failed to load incorrect sound', error);
        } else {
          incorrect.setVolume(1.0);
          setSoundsLoaded(true);
        }
      }
    );

    // Store sounds in ref to access in handlers
    correctSound.current = correct;
    incorrectSound.current = incorrect;

    // Cleanup
    return () => {
      if (correctSound.current) correctSound.current.release();
      if (incorrectSound.current) incorrectSound.current.release();
    };
  }, []);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleAnswer = (selectedOption) => {
    const isCorrect = selectedOption === quizQuestions[currentQuestion].answer;
    
    if (soundsLoaded) {
      console.log(`Playing ${isCorrect ? 'correct' : 'incorrect'} sound for ${quizType} quiz`);
      
      // Stop any playing sounds
      if (correctSound.current) correctSound.current.stop();
      if (incorrectSound.current) incorrectSound.current.stop();

      // Play appropriate sound
      const soundToPlay = isCorrect ? correctSound.current : incorrectSound.current;
      if (soundToPlay) {
        soundToPlay.play((success) => {
          if (!success) {
            console.log(`Sound failed for ${quizType} quiz`);
          }
        });
      }
    }

    if (isCorrect) setScore(score + 1);
    setAnswers([...answers, selectedOption]);
    
    setTimeout(() => {
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        navigation.navigate('Results', { 
          score, 
          quizType,
          totalQuestions: quizQuestions.length 
        });
      }
    }, 500);
  };

  return (
    <View style={[styles.container, { backgroundColor: getBackgroundColor() }]}>
      <Text style={styles.title}>{quizType} Quiz</Text>
      
      <View style={styles.imageContainer}>
        {/* AFC Image */}
        {quizType === 'AFC' && (
          <Image
            source={{uri: 'https://e0.365dm.com/16/09/1600x900/nfl-afc-american-conference-patriots-colts-luck-gronkowski_3779900.jpg'}}
            style={styles.conferenceImage}
          />
        )}

        {/* NFC Image */}
        {quizType === 'NFC' && (
          <Image
            source={{uri: 'https://i.pinimg.com/736x/61/d0/76/61d0760fc55ea78ecfec7ed16e2c46e8.jpg'}}
            style={styles.conferenceImage}
          />
        )}

        {/* NFL Image */}
        {quizType === 'default' && (
          <Image
            source={{uri: 'https://www.si.com/.image/t_share/MjAwNTkwMjg5NjUwMzI4OTUy/2023-nfl-preseason-predictions-lombardi-trophy.png'}}
            style={styles.conferenceImage}
          />
        )}
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.questionCount}>
          Question {currentQuestion + 1} of {quizQuestions.length}
        </Text>
        <Text style={styles.question}>{quizQuestions[currentQuestion].question}</Text>
        {quizQuestions[currentQuestion].options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={styles.button}
            onPress={() => handleAnswer(option)}
          >
            <View style={styles.optionContainer}>
              <Text style={styles.letterIndicator}>
                {String.fromCharCode(65 + index)}.
              </Text>
              <Text style={styles.buttonText}>{option}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  imageContainer: {
    height: height * 0.25, 
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 8, 
  },
  conferenceImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
  },
  contentContainer: {
    flex: 1,
    padding: 15,
  },

  title: {
    fontFamily: fontFamily,
    fontSize: 36,
    fontWeight: '400',
    marginVertical: 10,
    textAlign: 'center',
    color: '#fff',
    paddingTop: 10,
  },
  questionCount: {
    fontFamily: fontFamily,
    fontSize: 22, 
    marginBottom: 10,
    color: '#fff'
  },
  question: {
    fontFamily: fontFamily,
    fontSize: 26, // Reduced from 32
    fontWeight: '400',
    marginBottom: 20,
    color: '#fff',
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#6d6b85',
    padding: 15, // Reduced from 20
    borderRadius: 12,
    marginVertical: 8, // Reduced from 10
  },
  buttonText: {
    fontFamily: fontFamily,
    color: '#fff',
    fontSize: 20, // Reduced from 24
    flex: 1
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15
  },
  letterIndicator: {
    fontFamily: fontFamily,
    color: '#fff',
    fontSize: 24, // Reduced from 28
    marginRight: 8,
    width: 30 // Reduced from 40
  },
});

export default QuizPage;
