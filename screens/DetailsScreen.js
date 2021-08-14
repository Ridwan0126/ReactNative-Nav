import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const DetailsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Button
        title="Go to details screen...again"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go to home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, {Component} from 'react';
// import {StyleSheet, Text, View, FlatList} from 'react-native';
// import {ListItem} from 'react-native-elements';
// import axios from 'axios';

// type Props = {};
// export default class Category extends Component<Props> {
//   constructor(props) {
//     super(props);
//     prefik_url = 'http://255.255.255.0:3000/contact';
//     this.state = {
//       contact: [],
//     };
//   }
//   componentDidMount() {
//     axios.get(`http://255.255.255.0:3000/contact`).then(res => {
//       const contact = res.data;
//       console.log(contact);
//       this.setState({contact});
//     });
//   }

//   keyExtractor = (item, index) => index.toString();
//   renderItem = ({item}) => (
//     <ListItem
//       title={item.email}
//       leftAvatar={{source: {uri: prefik_url + item.image}}}
//     />
//   );
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <Text style={styles.txtHeader}> List Data </Text>
//         </View>
//         <FlatList
//           keyExtractor={this.keyExtractor}
//           data={this.state.contact}
//           renderItem={this.renderItem}
//         />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 20,
//     flex: 1,
//   },
//   txtHeader: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#fff',
//   },
//   header: {
//     height: 70,
//     backgroundColor: 'brown',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
