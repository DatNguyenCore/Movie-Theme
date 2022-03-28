import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import MovieItem from './components/MovieItem';
import Header from './components/Header';

interface Props {
  navigation: any;
}

function HomeScreen({navigation}: Props) {
  function onRefresh() {}

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={fakeData}
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

const fakeData = [
  {
    id: 1,
    name: 'Batman',
    description:
      'In the name of his murdered parents, Bruce Wayne wages eternal war on the criminals of Gotham City. He is vengeance. He is the night. He is Batman.',
    alterEgo: 'Bruce Wayne',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/Char_Gallery_Batman_DTC1018_6053f2162bdf03.97426416.jpg',
    comic: 'DC',
  },
  {
    id: 2,
    name: 'Superman',
    description:
      'Faster than a speeding bullet, more powerful than a locomotive… The Man of Steel fights a never-ending battle for truth, justice, and the American way.',
    alterEgo: 'Clark Kent',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_SUPUN4_3_52ab8fd51b5a34.80060929.jpg',
    comic: 'DC',
  },
  {
    id: 3,
    name: 'Green Lantern',
    description:
      'Test pilot Hal Jordan went from being a novelty, the first-ever human Green Lantern, to one of the most legendary Lanterns to ever wield a power ring.',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/HJGLC_2_20_color_rev2-gallery_57fc3654b85168.06256543.jpg',
    alterEgo: 'Alan Scott',
    comic: 'DC',
  },
  {
    id: 4,
    name: 'Wonder Woman',
    description:
      "Beautiful as Aphrodite, wise as Athena, swifter than Hermes, and stronger than Hercules, Princess Diana of Themyscira fights for peace in Man's World.",
    alterEgo: 'Princes Diana',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_JL3_14-15_52ab8f55dc6f22.91291238.jpg',
    comic: 'DC',
  },
  {
    id: 5,
    name: 'Aquaman',
    description:
      'The son of a lighthouse keeper and an Atlantean queen, Arthur Curry is the bridge between the surface world and his tumultuous realm of the sea.',
    alterEgo: 'Arthur Curry',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_aq25-8-9_52ab5e4b495e69.41502312.jpg',
    comic: 'DC',
  },
  {
    id: 6,
    name: 'Cyborg',
    description:
      'Part man, part machine, Vic Stone is a former member of the Teen Titans and a current member of the Justice League who wrestles to preserve his humanity with every new upgrade.',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_JL5_52ab71a32357c7.19695885.jpg',
    alterEgo: 'Vic Stone',
    comic: 'DC',
  },
  {
    id: 7,
    name: 'Green Arrow',
    description:
      "Billionaire Oliver Queen uses both his wealth and his unmatched archery skills as the Justice League's battling bowman, Green Arrow.",
    alterEgo: 'Oliver Queen',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_GA-22_05_52ab866d3a3405.51637692.jpg',
    comic: 'DC',
  },
  {
    id: 8,
    name: 'Hawkman',
    description:
      'No DC superhero as lived as many lives as Hawkman, yet through each of them he has sought justice for humanity and happiness for his beloved Hawkgirl.',
    alterEgo: 'Carter Hall',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/GalleryChar_1900x900_Hawkman_52ab8e7b78b286.34665467.jpg',
    comic: 'DC',
  },
  {
    id: 9,
    name: 'Nightwing',
    description:
      'If it’s hard being a superhero, what is it like as a sidekick? The heroes get the glory, while you clean up the mess. You don’t make the decisions and you don’t give orders. So, what do you do if you’re the Boy Wonder to one of the most recognizable super heroes in the universe and you’re looking to break out on your own? You become Nightwing.',
    alterEgo: 'Dick Grayson',
    imgUrl:
      'https://www.dccomics.com/sites/default/files/Char_Gallery_Nightwing_01_5bb3a97f931a79.98942818.jpg',
    comic: 'DC',
  },
  {
    id: 10,
    name: 'The Flash',
    description:
      "Three men have held the title of 'The Fastest Man Alive'—Jay Garrick, Barry Allen and Wally West. Each of them redefined the word 'hero.'",
    alterEgo: 'Barry Allen',
    imgUrl:
      'https://cdn11.bigcommerce.com/s-0kvv9/images/stencil/1280x1280/products/288506/405629/apirqylzj__92316.1553279639.jpg?c=2',
    comic: 'DC',
  },
];

export default HomeScreen;
