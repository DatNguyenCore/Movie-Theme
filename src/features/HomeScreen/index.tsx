import React, {useEffect} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles';
import MovieItem from './components/MovieItem';
import Header from './components/Header';
import {NavigationProps} from '../../navigation/configs/NavigationProps';
import Screen from '../../navigation/configs/Screen';
import MovieActions from '../../reduxs/reducer/MovieReducer';

interface Props extends NavigationProps<Screen.MovieDetail> {}

function HomeScreen({navigation}: Props) {
  const data = useSelector((state: any) => state.movie.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieActions.getMovies());
  }, [dispatch]);

  function onRefresh() {}

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onRefresh} />
        }
        ListHeaderComponent={<Header />}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MovieItem data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
