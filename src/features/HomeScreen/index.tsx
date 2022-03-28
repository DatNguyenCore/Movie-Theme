import React, {useEffect, useMemo} from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useSelector, useDispatch} from 'react-redux';
import {FooterFlatList, NoData} from '../../components';
import styles from './styles';
import SuperheroItem from './components/SuperheroItem';
import Header from './components/Header';
import {NavigationProps} from '../../navigation/configs/NavigationProps';
import Screen from '../../navigation/configs/Screen';
import SuperheroActions from '../../reduxs/reducer/SuperheroReducer';
import {RootState} from '../../reduxs';
import {Colors} from '../../themes';
import {Superhero} from '../../types/superhero';

interface Props extends NavigationProps<Screen.SuperheroDetail> {}

function HomeScreen({navigation}: Props) {
  const {data, fetching, textSearch} = useSelector(
    (state: RootState) => state.superhero,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SuperheroActions.getSuperheroes());
  }, [dispatch]);

  function onRefresh() {
    dispatch(SuperheroActions.getSuperheroes());
  }

  function renderFooter() {
    if (fetching) {
      return <FooterFlatList />;
    }
  }

  function renderEmptyList() {
    return <NoData />;
  }

  const superheroList = useMemo(() => {
    return data.filter((item: Superhero) => {
      return item.textForSearch.toLocaleLowerCase().includes(textSearch);
    });
  }, [data, textSearch]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={superheroList}
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
          <SuperheroItem data={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
}

export default HomeScreen;
