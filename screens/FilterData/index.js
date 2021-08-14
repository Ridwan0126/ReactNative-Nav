// import React from 'react';
// import {View, Text, Button, StyleSheet} from 'react-native';

// const BookmarkScreen = () => {
//   return (
//     <View style={styles.container}>
//       <Text>Bookmark Screen</Text>
//       <Button title="Click Here" onPress={() => alert('Button Clicked!')} />
//     </View>
//   );
// };

// export default BookmarkScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, {Component} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Image,
} from 'react-native';
import {ListItem} from 'react-native-elements';
import {Avatar} from 'react-native-elements/dist/avatar/Avatar';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // user: [],
      contact: [],
      refresh: false,
      limit: 15,
      page: 1,
    };
  }

  getData = (page = 1) => {
    console.log('page:', page);
    this.setState({
      refresh: true,
    });
    const {limit} = this.state;
    // fetch(
    //   `https://jsonplaceholder.typicode.com/comments?_limit=${limit}&_page=${page}`,
    // )
    fetch(
      `https://jsonplaceholder.typicode.com/photos?_limit=${limit}&_page=${page}`,
    )
      // fetch(`http://localhost:3000/contact`)
      .then(response => response.json())
      .then(user => {
        let newData = [];
        if (page === 1) newData = user;
        else newData = [...this.state.user, ...user];

        this.setState({
          user: newData,
          page,
          refresh: false,
        });
      });
  };

  img = ({item}) => {
    return (
      <Image
        style={{width: 100, height: 100}}
        source={{uri: item.thumbnailUrl}}
      />
    );
  };

  renderData = ({item}) => {
    return (
      <ListItem
        bottomDivider={true}
        onPress={() => Alert.alert('Hallo', item.img + 'clicked!!')}>
        <Avatar
          rounded
          title={item.title[0]}
          source={{uri: item.thumbnailUrl}}
        />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.url}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    );
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ImageBackground
        source={{
          uri:
            'https://ichef.bbci.co.uk/news/507/cpsprodpb/AA0E/production/_119543534_animedua.jpg',
        }}
        style={styles.backgroundImage}
        blurRadius={9}>
        <View style={styles.container}>
          <FlatList
            data={this.state.user}
            keyExtractor={(item, idx) => idx}
            renderItem={this.renderData}
            onRefresh={() => this.getData(1)}
            refreshing={this.state.refresh}
            onEndReached={() => this.getData(this.state.page + 1)}
            onEndReachedThreshold={0.1}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },
  container: {
    borderWidth: 1,
    // borderColor: 'red',
    flex: 1,
  },
});

export default Home;
