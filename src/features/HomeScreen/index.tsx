import React, {useEffect, useMemo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {FooterFlatList, NoData} from '../../components';
import styles from './styles';
import MovieItem from './components/MovieItem';
import Header from './components/Header';
import {NavigationProps} from '../../navigation/configs/NavigationProps';
import Screen from '../../navigation/configs/Screen';
import MovieActions from '../../reduxs/reducer/MovieReducer';
import {RootState} from '../../reduxs';
import {Colors} from '../../themes';

interface Props extends NavigationProps<Screen.MovieDetail> {}

function HomeScreen({navigation}: Props) {
  const {data, fetching, textSearch} = useSelector(
    (state: RootState) => state.movie,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(MovieActions.getMovies());
  }, [dispatch]);

  function onRefresh() {
    dispatch(MovieActions.getMovies());
  }

  function renderFooter() {
    if (fetching) {
      return <FooterFlatList />;
    }
  }

  function renderEmptyList() {
    return <NoData />;
  }

  const movieList = useMemo(() => {
    return data.filter(movie => {
      return movie.textForSearch.toLocaleLowerCase().includes(textSearch);
    });
  }, [data, textSearch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movieList}
        refreshControl={
          <RefreshControl
            tintColor={Colors.white}
            refreshing={false}
            onRefresh={onRefresh}
          />
        }
        keyboardShouldPersistTaps="handled"
        ListHeaderComponent={<Header />}
        ListFooterComponent={renderFooter()}
        ListEmptyComponent={renderEmptyList()}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <MovieItem data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
