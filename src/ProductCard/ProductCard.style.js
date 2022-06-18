import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width / 2,
    backgroundColor: '#ECEFF1',
    margin: 10,
    borderRadius: 10,
  },
  footer_container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  image: {
    backgroundColor: 'white',
    resizeMode: 'contain',
    height: Dimensions.get('window').height / 4,
    margin: 10,
    borderRadius: 10,
  },
  title: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 17,
  },
  price: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#808080',
  },
  stock: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    fontSize: 17,
    color: 'red',
    paddingBottom: 10,
  },
});
