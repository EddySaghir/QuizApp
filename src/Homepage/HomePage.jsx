import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');

const fontFamily = Platform.select({
  ios: 'Jersey 25',
  android: 'Jersey25-Regular'
});

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Pick Six</Text>
        </View>

        <Image
          style={styles.mainImage}
          source={{uri: 'https://c.animaapp.com/NnzXC44G/img/ifbwing4nwxogmhjo9zz-1@2x.png'}}
        />

        <View style={styles.quizSection}>
          <Image
            style={styles.logo}
            source={{uri: 'https://c.animaapp.com/NnzXC44G/img/r-1@2x.png'}}
          />
          <TouchableOpacity 
            style={[styles.quizButton, styles.afcButton]}
            onPress={() => navigation.navigate('Quiz', { quizType: 'AFC' })}
          >
            <Text style={styles.buttonText}>Take AFC Quiz</Text>
          </TouchableOpacity>
        </View>

        <Image
          style={styles.usaTodayImage}
          source={{uri: 'https://c.animaapp.com/NnzXC44G/img/usa-today-22312857-1@2x.png'}}
        />

        <View style={styles.quizSection}>
          <Image
            style={styles.logo}
            source={{uri: 'https://c.animaapp.com/NnzXC44G/img/nfclogo-1@2x.png'}}
          />
          <TouchableOpacity 
            style={[styles.quizButton, styles.nfcButton]}
            onPress={() => navigation.navigate('Quiz', { quizType: 'NFC' })}
          >
            <Text style={styles.buttonText}>Take NFC Quiz</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
          style={styles.entireNflButton}
          onPress={() => navigation.navigate('Quiz', { quizType: 'default' })}
        >
          <Text style={styles.buttonText}>Take Entire NFL Quiz</Text>
          <Image
            style={styles.footballIcon}
            source={{uri: 'https://c.animaapp.com/NnzXC44G/img/football-american-1@2x.png'}}
          />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.leaderboardButton}
          onPress={() => navigation.navigate('Leaderboard')}
        >
          <Text style={styles.leaderboardText}>Leaderboards</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000', // Changed from '#25202091'
  },
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#000000', // Added black background
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,
  },
  titleText: {
    fontFamily: fontFamily,
    color: '#ffffff',
    fontSize: 64,
    fontWeight: '400',
  },
  mainImage: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  quizSection: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  logo: {
    width: 80,
    height: 80,
    marginRight: 15,
  },
  quizButton: {
    flex: 1,
    height: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  afcButton: {
    backgroundColor: '#c40c34',
  },
  nfcButton: {
    backgroundColor: '#344474',
  },
  usaTodayImage: {
    width: width * 0.8,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 20,
  },
  entireNflButton: {
    flexDirection: 'row',
    backgroundColor: '#6d6b85',
    borderRadius: 15,
    height: 65,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
  },
  leaderboardButton: {
    width: 172,
    height: 90,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    fontFamily: fontFamily,
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '400',
  },
  leaderboardText: {
    fontFamily: fontFamily,
    color: '#ffffff', // Changed from '#181801'
    fontSize: 20,
    fontWeight: '400',
  },
  footballIcon: {
    width: 40,
    height: 40,
  },
});

export default HomePage;