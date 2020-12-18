import React, {Component} from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  View,
  ProgressBarAndroid,
} from 'react-native';
import {Card, Text, Icon, Right, Left, Button} from 'native-base';
import CountDown from 'react-native-countdown-component';

export default class BlogContentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      isLoading: true,
      isNext: false,
      score: 0,
      showQuestionOne: true,
      showQuestionTwo: false,
      buttonDisabled: false,
      buttonColor: '#0750AD',
      selectedButton: false,
    };
    this.onAnswerOnePress = this.onAnswerOnePress.bind(this);
  }
  isNextShow = () => {
    this.setState({
      isNext: true,
      buttonDisabled: true,
      // score: +20,
    });
  };
  
  answer = 'Psalm 119';
  onAnswerOnePress = (name, number) => {
    // alert(`hello, ${name}`);
    this.setState({
      selectedButton: true,
    });
    // const answer = 'Psalm 119';
    const selectedOption = name;
    const correctAnswerColor = 'green';
    const wrongAnswerColor = 'red';
    if (selectedOption === this.answer) {
      // alert(`hello, ${name}`);
      this.setState({
        // selectedButton: correctAnswerColor,
        buttonColor: correctAnswerColor,
      });
    }
    // else {
    //   this.setState({buttonColor: wrongAnswerColor});
    // }
    // this.setState({buttonColor: wrongAnswerColor});

    // this.setState({
    //   isNext: true,
    //   buttonDisabled: true,
    // });
  };
  onFirstNext = () => {
    this.setState({
      showQuestionOne: false,
      showQuestionTwo: true,
    });
  };

  componentDidMount() {
    fetch('http://mandbros.com/church-app-data/json/home.json')
      .then((response) => response.json())
      .then((json) => {
        this.setState({data: json});
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({isLoading: false});
      });
  }

  render() {
    const {
      data,
      isLoading,
      isNext,
      score,
      showQuestionOne,
      showQuestionTwo,
      buttonDisabled,
      buttonColor,
      selectedButton,
    } = this.state;

    return (
      <View style={styles.mainContainer}>
        {showQuestionOne && (
          <View>
            <Card style={styles.cardContainer}>
              <View style={styles.headerStyle}>
                <Left>
                  <View style={styles.scoreStyle}>
                    <Text style={styles.scoreTextStyle}>Score</Text>
                    <Text style={styles.scoreNumberStyle}>{score}</Text>
                  </View>
                </Left>
                <View style={styles.progressStyle}>
                  <Text style={styles.questionTextStyle}>Question 1/5</Text>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  />
                </View>
                <Right>
                  <CountDown
                    until={15}
                    onFinish={this.isNextShow}
                    onPress={() => alert('hello')}
                    size={20}
                    timeToShow={['S']}
                    running={true}
                  />
                </Right>
              </View>
            </Card>
            <Card style={styles.cardContainer}>
              <Text style={styles.questionTextStyle}>
                What is the longest chapter in the Bible?
              </Text>
              <TouchableOpacity
                disabled={buttonDisabled}
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor:
                      this.answer === 'Psalm 119' ? buttonColor : '#0750AD',
                  },
                ]}
                onPress={() => this.onAnswerOnePress('Psalm 119', 1)}>
                <Text style={styles.text}>A. Psalm 119</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={buttonDisabled}
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor:
                      this.answer === 'Ezekiel 32' ? buttonColor : '#0750AD',
                  },
                ]}
                onPress={() => this.onAnswerOnePress('Ezekiel 32')}>
                <Text style={styles.text}>B. Ezekiel 32</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={buttonDisabled}
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor:
                      this.answer === 'Psalm 117' ? buttonColor : '#0750AD',
                  },
                ]}
                onPress={() => this.onAnswerOnePress('Psalm 117')}>
                <Text style={styles.text}>C. Psalm 117</Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={buttonDisabled}
                style={[
                  styles.buttonStyle,
                  {
                    backgroundColor:
                      this.answer === 'Job 31' ? buttonColor : '#0750AD',
                  },
                ]}
                onPress={() => this.onAnswerOnePress('Job 31')}>
                <Text style={styles.text}>D. Job 31</Text>
              </TouchableOpacity>
            </Card>
            {isNext && (
              <Card style={styles.cardContainer}>
                <View style={styles.headerStyle}>
                  <Left>
                    <Text style={styles.questionTextStyle}>Explanation</Text>
                  </Left>
                  <Right>
                    <Button
                      style={styles.buttonStyle}
                      onPress={this.onFirstNext}>
                      <Text>Next</Text>
                    </Button>
                  </Right>
                </View>
                <Text>
                  It's time to put you biblical knowledge to the test!
                </Text>
              </Card>
            )}
          </View>
        )}
        {showQuestionTwo && (
          <View>
            <Card style={styles.cardContainer}>
              <View style={styles.headerStyle}>
                <Left>
                  <View style={styles.scoreStyle}>
                    <Text style={styles.scoreTextStyle}>Score</Text>
                    <Text style={styles.scoreNumberStyle}>{score}</Text>
                  </View>
                </Left>
                <View style={styles.progressStyle}>
                  <Text style={styles.questionTextStyle}>Question 2/5</Text>
                  <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.5}
                  />
                </View>
                <Right>
                  <CountDown
                    until={15}
                    onFinish={this.isNextShow}
                    onPress={() => alert('hello')}
                    size={20}
                    timeToShow={['S']}
                    running={true}
                  />
                </Right>
              </View>
            </Card>
            <Card style={styles.cardContainer}>
              <Text style={styles.questionTextStyle}>
                What is the longest chapter in the Bible?
              </Text>
              <Button style={styles.buttonStyle} onPress={this.isNextShow}>
                <Text>A. Psalm 119</Text>
              </Button>
              <Button style={styles.buttonStyle}>
                <Text>B. Ezekiel 32</Text>
              </Button>
              <Button style={styles.buttonStyle}>
                <Text>C. Psalm 117</Text>
              </Button>
              <Button style={styles.buttonStyle}>
                <Text>D. Job 31</Text>
              </Button>
            </Card>
            {isNext && (
              <Card style={styles.cardContainer}>
                <View style={styles.headerStyle}>
                  <Left>
                    <Text style={styles.questionTextStyle}>Explanation</Text>
                  </Left>
                  <Right>
                    <Button style={styles.buttonStyle}>
                      <Text>Next</Text>
                    </Button>
                  </Right>
                </View>
                <Text>
                  It's time to put you biblical knowledge to the test!
                </Text>
              </Card>
            )}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    marginHorizontal: 15,
  },
  headerStyle: {
    flexDirection: 'row',
  },
  cardContainer: {
    padding: 15,
  },
  questionTextStyle: {
    fontSize: 20,
  },
  buttonStyle: {
    marginVertical: 10,
    backgroundColor: '#0750AD',
    padding: 10,
  },
  scoreTextStyle: {
    fontSize: 20,
    marginTop: -10,
  },
  scoreNumberStyle: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: 'bold',
  },
  scoreStyle: {
    flexDirection: 'column',
  },
  progressStyle: {
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    height: 220,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    // fontSize: ,
    // fontWeight: 'bold',
  },
  button1Style: {
    marginVertical: 10,
    backgroundColor: '#0750AD',
    padding: 10,
  },
});
