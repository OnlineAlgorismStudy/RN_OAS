import React, {useState} from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import MusicRoute from './test/page1';



const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

function HomePage (){

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'music', title: 'Music', icon: 'queue-music' },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    // albums: AlbumsRoute,
    // recents: RecentsRoute,
  });

  return (
      <View>
 <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
      </View>
   
  
  );
};

export default HomePage;