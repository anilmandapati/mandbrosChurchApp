import React, {Component} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';

export default class BlogContentScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: '',
      isLoading: true,
    };
  }

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
    const {data, isLoading} = this.state;

    return (
      <View style={{flex: 1, padding: 24}}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          // <FlatList
          //   data={data}
          //   keyExtractor={({id}, index) => id}
          //   renderItem={({item}) => (
          //     <Text>
          //       {item.dailyVerse[0].image}, {item.dailyVerse[0].likes}
          //     </Text>
          //   )}
          // />
          <Text>
            {data.dailyVerse[0].image}, {data.dailyVerse[0].likes}
          {/* </Text>
          <Text> */}
           {data.dailyBlog[0].image}, {data.dailyBlog[0].likes}
          </Text>
        )}
      </View>
    );
  }
}
