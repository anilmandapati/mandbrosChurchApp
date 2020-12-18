import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Card, Text, Icon, Right, Left, Button, Content} from 'native-base';
import CountDown from 'react-native-countdown-component';
import QuizExplanationCard from '../components/QuizExplanation';

class Quiz extends React.Component {
  state = {
    correctCount: 0,
    activeQuestionIndex: 0,
    answered: false,
    answerCorrect: false,
    selectedId: '',
    data: '',
    isLoading: true,
    showQuestionOne: true,
    showQuestionTwo: false,
    isNext: false,
    buttonDisabled: false,
    isResultsCard: false,
    showAllQuizQuestions: false,
    showAllQuizQuestionsText: '',
  };

  isNextShow = () => {
    this.setState({
      isNext: true,
      buttonDisabled: true,
      // score: +20,
    });
  };

  onFirstNext = () => {
    this.setState({
      showQuestionOne: false,
      showQuestionTwo: true,
      answered: false,
      answerCorrect: false,
      selectedId: '',
      buttonDisabled: false,
      isNext: false,
    });
  };

  onSecondNext = () => {
    this.setState({
      showQuestionTwo: false,
      showQuestionThree: true,
      answered: false,
      answerCorrect: false,
      selectedId: '',
      buttonDisabled: false,
      isNext: false,
    });
  };

  onThirdNext = () => {
    this.setState({
      showQuestionThree: false,
      showQuestionFour: true,
      answered: false,
      answerCorrect: false,
      selectedId: '',
      buttonDisabled: false,
      isNext: false,
    });
  };

  onFourthNext = () => {
    this.setState({
      showQuestionFour: false,
      showQuestionFive: true,
      answered: false,
      answerCorrect: false,
      selectedId: '',
      buttonDisabled: false,
      isNext: false,
    });
  };

  onFifthNext = () => {
    this.setState({
      showQuestionFive: false,
      isResultsCard: true,
      // answered: false,
      // answerCorrect: false,
      // selectedId: '',
      // buttonDisabled: false,
      // isNext: false,
    });
  };

  answerOne = (correct, id) => {
    this.setState(
      (state) => {
        const nextState = {answered: true, buttonDisabled: true};
        this.state.selectedId = id;
        this.isNextShow();

        if (correct) {
          nextState.correctCount = state.correctCount + 20;
          nextState.answerCorrect = true;
        } else {
          nextState.answerCorrect = false;
        }

        return nextState;
      },
      // () => {
      //   setTimeout(() => this.nextQuestion(), 750);
      // },
    );
  };

  answerTwo = (correct, id) => {
    this.setState((state) => {
      const nextState = {answered: true, buttonDisabled: true};
      this.state.selectedId = id;
      this.isNextShow();

      if (correct) {
        nextState.correctCount = state.correctCount + 20;
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
      }

      return nextState;
    });
  };

  answerThree = (correct, id) => {
    this.setState((state) => {
      const nextState = {answered: true, buttonDisabled: true};
      this.state.selectedId = id;
      this.isNextShow();

      if (correct) {
        nextState.correctCount = state.correctCount + 20;
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
      }

      return nextState;
    });
  };

  answerFour = (correct, id) => {
    this.setState((state) => {
      const nextState = {answered: true, buttonDisabled: true};
      this.state.selectedId = id;
      this.isNextShow();

      if (correct) {
        nextState.correctCount = state.correctCount + 20;
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
      }

      return nextState;
    });
  };

  answerFive = (correct, id) => {
    this.setState((state) => {
      const nextState = {answered: true, buttonDisabled: true};
      this.state.selectedId = id;
      this.isNextShow();

      if (correct) {
        nextState.correctCount = state.correctCount + 20;
        nextState.answerCorrect = true;
      } else {
        nextState.answerCorrect = false;
      }

      return nextState;
    });
  };

  showAllAnswers = () => {
    this.setState({
      showAllQuizQuestions: !this.state.showAllQuizQuestions,
      // if (this.state.showAllQuizQuestions = true) {
      //   this.state.showAllQuizQuestionsText = 'Hide all quiz Questions',
      // } else {
      //   showAllQuizQuestionsText = 'Show all quiz Questions',
      // }
    });
  };
  // nextQuestion = () => {
  //   this.setState((state) => {
  //     const nextIndex = state.activeQuestionIndex + 1;

  //     if (nextIndex >= state.totalCount) {
  //       return this.props.navigation.popToTop();
  //     }

  //     return {
  //       activeQuestionIndex: nextIndex,
  //       answered: false,
  //     };
  //   });
  // };

  componentDidMount() {
    fetch('http://mandbros.com/church-app-data/json/quiz.json')
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
      showQuestionOne,
      showQuestionTwo,
      showQuestionThree,
      showQuestionFour,
      showQuestionFive,
      correctCount,
      isNext,
      buttonDisabled,
      isResultsCard,
      showAllQuizQuestions,
    } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <View style={styles.mainContainer}>
            {showQuestionOne && (
              <View>
                <Card style={styles.cardContainer}>
                  <View style={styles.headerStyle}>
                    <Left>
                      <View style={styles.scoreStyle}>
                        <Text style={styles.scoreTextStyle}>Score</Text>
                        <Text style={styles.scoreNumberStyle}>
                          {correctCount}
                        </Text>
                      </View>
                    </Left>
                    <View style={styles.progressStyle}>
                      <Text style={styles.questionTextStyle}>Question 1/5</Text>
                      {/* <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  /> */}
                    </View>
                    <Right>
                      <CountDown
                        until={15}
                        onFinish={this.isNextShow}
                        onPress={() => alert('hello')}
                        size={20}
                        timeToShow={['S']}
                        running={true}
                        digitStyle={styles.digitColorStyle}
                        digitTxtStyle={styles.digitTxtColorStyle}
                      />
                    </Right>
                  </View>
                </Card>
                <Card style={styles.cardContainer}>
                  <Text style={styles.questionTextStyle}>
                    {data.questionOne[0].question}
                  </Text>
                  {/* <FlatList
                    data={data.questionOne[0].answers}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        disabled={buttonDisabled}
                        key={item.id}
                        style={
                          item.id === this.state.selectedId &&
                          this.state.answerCorrect
                            ? styles.styleForCorrectAnswer
                            : item.id === this.state.selectedId &&
                              !this.state.answerCorrect
                            ? styles.styleForWrongAnswer
                            : this.state.answered && item.correct
                            ? styles.styleForCorrectAnswer
                            : styles.styleForDefaultAnswer
                        }
                        onPress={() => this.answerOne(item.correct, item.id)}>
                        <Text style={styles.text}>{item.text}</Text>
                      </TouchableOpacity>
                    )}
                  /> */}
                  {data.questionOne[0].answers.map((item) => (
                    <TouchableOpacity
                      disabled={buttonDisabled}
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answerOne(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  ))}
                </Card>
                {isNext && (
                  <Card style={styles.cardContainer}>
                    <View style={styles.headerStyle}>
                      <Left>
                        <Text style={styles.questionTextStyle}>
                          Explanation
                        </Text>
                      </Left>
                      <Right>
                        <Button
                          style={styles.buttonStyle}
                          onPress={this.onFirstNext}>
                          <Text>Next</Text>
                        </Button>
                      </Right>
                    </View>
                    <Text style={styles.explanationTextColor}>
                      Correct Answer is {data.questionOne[0].correctAnswer}
                    </Text>
                    <Text style={styles.explanationTextColor}>
                      {data.questionOne[0].explanation}
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
                        <Text style={styles.scoreNumberStyle}>
                          {correctCount}
                        </Text>
                      </View>
                    </Left>
                    <View style={styles.progressStyle}>
                      <Text style={styles.questionTextStyle}>Question 2/5</Text>
                      {/* <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  /> */}
                    </View>
                    <Right>
                      <CountDown
                        until={15}
                        onFinish={this.isNextShow}
                        onPress={() => alert('hello')}
                        size={20}
                        timeToShow={['S']}
                        running={true}
                        digitStyle={styles.digitColorStyle}
                        digitTxtStyle={styles.digitTxtColorStyle}
                      />
                    </Right>
                  </View>
                </Card>
                <Card style={styles.cardContainer}>
                  <Text style={styles.questionTextStyle}>
                    {data.questionTwo[0].question}
                  </Text>
                  {/* <FlatList
                    data={data.questionTwo[0].answers}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        disabled={buttonDisabled}
                        key={item.id}
                        style={
                          item.id === this.state.selectedId &&
                          this.state.answerCorrect
                            ? styles.styleForCorrectAnswer
                            : item.id === this.state.selectedId &&
                              !this.state.answerCorrect
                            ? styles.styleForWrongAnswer
                            : this.state.answered && item.correct
                            ? styles.styleForCorrectAnswer
                            : styles.styleForDefaultAnswer
                        }
                        onPress={() => this.answerTwo(item.correct, item.id)}>
                        <Text style={styles.text}>{item.text}</Text>
                      </TouchableOpacity>
                    )}
                  /> */}
                  {data.questionTwo[0].answers.map((item) => (
                    <TouchableOpacity
                      disabled={buttonDisabled}
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answerTwo(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  ))}
                </Card>
                {isNext && (
                  <Card style={styles.cardContainer}>
                    <View style={styles.headerStyle}>
                      <Left>
                        <Text style={styles.questionTextStyle}>
                          Explanation
                        </Text>
                      </Left>
                      <Right>
                        <Button
                          style={styles.buttonStyle}
                          onPress={this.onSecondNext}>
                          <Text>Next</Text>
                        </Button>
                      </Right>
                    </View>
                    <Text style={styles.explanationTextColor}>
                      Correct Answer is {data.questionTwo[0].correctAnswer}
                    </Text>
                    <Text style={styles.explanationTextColor}>
                      {data.questionTwo[0].explanation}
                    </Text>
                  </Card>
                )}
              </View>
            )}
            {showQuestionThree && (
              <View>
                <Card style={styles.cardContainer}>
                  <View style={styles.headerStyle}>
                    <Left>
                      <View style={styles.scoreStyle}>
                        <Text style={styles.scoreTextStyle}>Score</Text>
                        <Text style={styles.scoreNumberStyle}>
                          {correctCount}
                        </Text>
                      </View>
                    </Left>
                    <View style={styles.progressStyle}>
                      <Text style={styles.questionTextStyle}>Question 3/5</Text>
                      {/* <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  /> */}
                    </View>
                    <Right>
                      <CountDown
                        until={15}
                        onFinish={this.isNextShow}
                        onPress={() => alert('hello')}
                        size={20}
                        timeToShow={['S']}
                        running={true}
                        digitStyle={styles.digitColorStyle}
                        digitTxtStyle={styles.digitTxtColorStyle}
                      />
                    </Right>
                  </View>
                </Card>
                <Card style={styles.cardContainer}>
                  <Text style={styles.questionTextStyle}>
                    {data.questionThree[0].question}
                  </Text>
                  {/* <FlatList
                    data={data.questionThree[0].answers}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        disabled={buttonDisabled}
                        key={item.id}
                        style={
                          item.id === this.state.selectedId &&
                          this.state.answerCorrect
                            ? styles.styleForCorrectAnswer
                            : item.id === this.state.selectedId &&
                              !this.state.answerCorrect
                            ? styles.styleForWrongAnswer
                            : this.state.answered && item.correct
                            ? styles.styleForCorrectAnswer
                            : styles.styleForDefaultAnswer
                        }
                        onPress={() => this.answerThree(item.correct, item.id)}>
                        <Text style={styles.text}>{item.text}</Text>
                      </TouchableOpacity>
                    )}
                  /> */}
                  {data.questionThree[0].answers.map((item) => (
                    <TouchableOpacity
                      disabled={buttonDisabled}
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answerThree(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  ))}
                </Card>
                {isNext && (
                  <Card style={styles.cardContainer}>
                    <View style={styles.headerStyle}>
                      <Left>
                        <Text style={styles.questionTextStyle}>
                          Explanation
                        </Text>
                      </Left>
                      <Right>
                        <Button
                          style={styles.buttonStyle}
                          onPress={this.onThirdNext}>
                          <Text>Next</Text>
                        </Button>
                      </Right>
                    </View>
                    <Text style={styles.explanationTextColor}>
                      Correct Answer is {data.questionThree[0].correctAnswer}
                    </Text>
                    <Text style={styles.explanationTextColor}>
                      {data.questionThree[0].explanation}
                    </Text>
                  </Card>
                )}
              </View>
            )}
            {showQuestionFour && (
              <View>
                <Card style={styles.cardContainer}>
                  <View style={styles.headerStyle}>
                    <Left>
                      <View style={styles.scoreStyle}>
                        <Text style={styles.scoreTextStyle}>Score</Text>
                        <Text style={styles.scoreNumberStyle}>
                          {correctCount}
                        </Text>
                      </View>
                    </Left>
                    <View style={styles.progressStyle}>
                      <Text style={styles.questionTextStyle}>Question 4/5</Text>
                      {/* <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  /> */}
                    </View>
                    <Right>
                      <CountDown
                        until={15}
                        onFinish={this.isNextShow}
                        onPress={() => alert('hello')}
                        size={20}
                        timeToShow={['S']}
                        running={true}
                        digitStyle={styles.digitColorStyle}
                        digitTxtStyle={styles.digitTxtColorStyle}
                      />
                    </Right>
                  </View>
                </Card>
                <Card style={styles.cardContainer}>
                  <Text style={styles.questionTextStyle}>
                    {data.questionFour[0].question}
                  </Text>
                  {/* <FlatList
                    data={data.questionFour[0].answers}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        disabled={buttonDisabled}
                        key={item.id}
                        style={
                          item.id === this.state.selectedId &&
                          this.state.answerCorrect
                            ? styles.styleForCorrectAnswer
                            : item.id === this.state.selectedId &&
                              !this.state.answerCorrect
                            ? styles.styleForWrongAnswer
                            : this.state.answered && item.correct
                            ? styles.styleForCorrectAnswer
                            : styles.styleForDefaultAnswer
                        }
                        onPress={() => this.answerFour(item.correct, item.id)}>
                        <Text style={styles.text}>{item.text}</Text>
                      </TouchableOpacity>
                    )}
                  /> */}
                  {data.questionFour[0].answers.map((item) => (
                    <TouchableOpacity
                      disabled={buttonDisabled}
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answerFour(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  ))}
                </Card>
                {isNext && (
                  <Card style={styles.cardContainer}>
                    <View style={styles.headerStyle}>
                      <Left>
                        <Text style={styles.questionTextStyle}>
                          Explanation
                        </Text>
                      </Left>
                      <Right>
                        <Button
                          style={styles.buttonStyle}
                          onPress={this.onFourthNext}>
                          <Text>Next</Text>
                        </Button>
                      </Right>
                    </View>
                    <Text style={styles.explanationTextColor}>
                      Correct Answer is {data.questionFour[0].correctAnswer}
                    </Text>
                    <Text style={styles.explanationTextColor}>
                      {data.questionFour[0].explanation}
                    </Text>
                  </Card>
                )}
              </View>
            )}
            {showQuestionFive && (
              <View>
                <Card style={styles.cardContainer}>
                  <View style={styles.headerStyle}>
                    <Left>
                      <View style={styles.scoreStyle}>
                        <Text style={styles.scoreTextStyle}>Score</Text>
                        <Text style={styles.scoreNumberStyle}>
                          {correctCount}
                        </Text>
                      </View>
                    </Left>
                    <View style={styles.progressStyle}>
                      <Text style={styles.questionTextStyle}>Question 5/5</Text>
                      {/* <ProgressBarAndroid
                    styleAttr="Horizontal"
                    indeterminate={false}
                    progress={0.25}
                  /> */}
                    </View>
                    <Right>
                      <CountDown
                        until={15}
                        onFinish={this.isNextShow}
                        onPress={() => alert('hello')}
                        size={20}
                        timeToShow={['S']}
                        running={true}
                        digitStyle={styles.digitColorStyle}
                        digitTxtStyle={styles.digitTxtColorStyle}
                      />
                    </Right>
                  </View>
                </Card>
                <Card style={styles.cardContainer}>
                  <Text style={styles.questionTextStyle}>
                    {data.questionFive[0].question}
                  </Text>
                  {/* <FlatList
                    data={data.questionFive[0].answers}
                    keyExtractor={({id}, index) => id}
                    renderItem={({item}) => (
                      <TouchableOpacity
                        disabled={buttonDisabled}
                        key={item.id}
                        style={
                          item.id === this.state.selectedId &&
                          this.state.answerCorrect
                            ? styles.styleForCorrectAnswer
                            : item.id === this.state.selectedId &&
                              !this.state.answerCorrect
                            ? styles.styleForWrongAnswer
                            : this.state.answered && item.correct
                            ? styles.styleForCorrectAnswer
                            : styles.styleForDefaultAnswer
                        }
                        onPress={() => this.answerFive(item.correct, item.id)}>
                        <Text style={styles.text}>{item.text}</Text>
                      </TouchableOpacity>
                    )}
                  /> */}
                  {data.questionFive[0].answers.map((item) => (
                    <TouchableOpacity
                      disabled={buttonDisabled}
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answerFive(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  ))}
                </Card>
                {isNext && (
                  <Card style={styles.cardContainer}>
                    <View style={styles.headerStyle}>
                      <Left>
                        <Text style={styles.questionTextStyle}>
                          Explanation
                        </Text>
                      </Left>
                      <Right>
                        <Button
                          style={styles.buttonStyle}
                          onPress={this.onFifthNext}>
                          <Text>Submit</Text>
                        </Button>
                      </Right>
                    </View>
                    <Text style={styles.explanationTextColor}>
                      Correct Answer is {data.questionFive[0].correctAnswer}
                    </Text>
                    <Text style={styles.explanationTextColor}>
                      {data.questionFive[0].explanation}
                    </Text>
                  </Card>
                )}
              </View>
            )}
            {isResultsCard && (
              <View>
                <ImageBackground
                  source={{
                    uri: 'https://pbs.twimg.com/media/ELQHMgXWoAAxKuN.jpg',
                  }}
                  style={styles.imageStyles}>
                  <Text style={styles.resultsText}>
                    You have scored {correctCount}
                  </Text>
                </ImageBackground>
                {/* <TouchableOpacity
                  style={styles.styleForDefaultAnswer}
                  onPress={this.showAllAnswers}>
                  <Text style={styles.text}>
                    Show All Quiz Questions with Answers
                  </Text>
                </TouchableOpacity> */}
                <Button
                  iconRight
                  primary
                  onPress={this.showAllAnswers}
                  style={styles.styleForDefaultAnswer}>
                  <Text>Show All Quiz Questions with Answers</Text>
                  <Icon name="ios-arrow-down" style={styles.iconStyle} />
                </Button>
                {showAllQuizQuestions && (
                  <View>
                    <QuizExplanationCard
                      id={'1'}
                      answer={data.questionOne[0].correctAnswer}
                      question={data.questionOne[0].question}
                      explanation={data.questionOne[0].explanation}
                    />
                    <QuizExplanationCard
                      id={'2'}
                      answer={data.questionTwo[0].correctAnswer}
                      question={data.questionTwo[0].question}
                      explanation={data.questionTwo[0].explanation}
                    />
                    <QuizExplanationCard
                      id={'3'}
                      answer={data.questionThree[0].correctAnswer}
                      question={data.questionThree[0].question}
                      explanation={data.questionThree[0].explanation}
                    />
                    <QuizExplanationCard
                      id={'4'}
                      answer={data.questionFour[0].correctAnswer}
                      question={data.questionFour[0].question}
                      explanation={data.questionFour[0].explanation}
                    />
                    <QuizExplanationCard
                      id={'5'}
                      answer={data.questionFive[0].correctAnswer}
                      question={data.questionFive[0].question}
                      explanation={data.questionFive[0].explanation}
                    />
                  </View>
                )}
              </View>
            )}
          </View>
        )}
      </ScrollView>
    );
  }
}

/* <Text style={styles.text}>{data.questionOne[0].question}</Text>
                <Text style={styles.text}>
                  {data.questionOne[0].answers[0].text}
                </Text>
                <TouchableOpacity
                  // key={data.questionOne[0].answers[0].id}
                  style={styles.container}
                  onPress={() =>
                    this.answer(data.questionOne[0].answers[0].correct)
                  }>
                  <Text style={styles.text}>
                    {data.questionOne[0].answers[0].text}
                  </Text>
                  <Text>{this.state.correctCount}</Text>
                </TouchableOpacity>
                <FlatList
                  data={data.questionOne[0].answers}
                  keyExtractor={({id}, index) => id}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      key={item.id}
                      style={
                        item.id === this.state.selectedId &&
                        this.state.answerCorrect
                          ? styles.styleForCorrectAnswer
                          : item.id === this.state.selectedId &&
                            !this.state.answerCorrect
                          ? styles.styleForWrongAnswer
                          : this.state.answered && item.correct
                          ? styles.styleForCorrectAnswer
                          : styles.styleForDefaultAnswer
                      }
                      onPress={() => this.answer(item.correct, item.id)}>
                      <Text style={styles.text}>{item.text}</Text>
                    </TouchableOpacity>
                  )}
                /> */

//               </View>
//             )}
//             <View>
//       </View>
//     );
//   }
// }

export default Quiz;

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
  digitColorStyle: {
    backgroundColor: '#db1849',
  },
  digitTxtColorStyle: {
    color: '#fff',
  },
  container: {
    marginVertical: 10,
    backgroundColor: '#0750AD',
    padding: 10,
  },
  text: {
    color: '#fff',
    // fontSize: 25,
    // textAlign: 'center',
    // letterSpacing: -0.02,
    // fontWeight: '600',
  },
  styleForCorrectAnswer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'green',
  },
  styleForWrongAnswer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: 'red',
  },
  styleForDefaultAnswer: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#0750AD',
  },
  explanationTextColor: {
    color: 'green',
    fontSize: 18,
  },
  imageStyles: {
    flex: 1,
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  resultsText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 120,
    marginHorizontal: 50,
    color: '#fff',
  },
  iconStyle: {
    color: '#fff',
  },
});
