import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebeff2',
    width: Dimensions.get('window').width / 2,
    borderRadius: 5,
    padding: 10,
    margin: 5,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  title: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
  },
  price: {
    color: 'grey',
    fontWeight: 'bold',
    marginTop: 5,
  },
  inStock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
