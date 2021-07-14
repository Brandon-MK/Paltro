import React from 'react';
import {
  View,
  FlatList,
  Dimensions,
  Image,
  Text,
  useWindowDimensions,
  Animated,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FoodListView from '../../components/FoodListView';
import FlatListSlider from '../../components/imageslider/slider';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const FoodView = () => {
  // const {width, height} = Dimensions.get('window');
  const images = [
    {
      key: '2',

      image:
        'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: '3',

      image:
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHwwfDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    },
    {
      key: '1',

      image:
        'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
    },
  ];
  const titles = [
    {
      title: 'Beef',
      data: [
        {
          key: '1',
          variants: [],
          name: 'Beef Steak',
          price: '25000 UGX',
          image:
            'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      title: 'Chicken',
      data: [
        {
          key: '2',
          variants: [],
          name: 'Chicken Wings',
          price: '25000 UGX',
          image:
            'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHdpbmdzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      title: 'Drinks',
      data: [
        {
          key: '3',
          variants: [],
          name: 'Cola',
          price: '5000 UGX',
          image:
            'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29jYSUyMGNvbGF8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
    {
      title: 'Pizza',
      data: [
        {
          key: '4',
          variants: [
            {key: '1', size: 'large'},
            {key: '2', size: 'small'},
            {key: '3', size: 'medium'},
          ],
          name: 'Hawiian Pizza',
          price: '25000 UGX',
          image:
            'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
        },
      ],
    },
  ];
  const screenWidth = Math.round(Dimensions.get('window').width);

  const Tabs = props => {
    return (
      <View>
        <Text style={{color: 'black'}}>{props.item}</Text>
      </View>
    );
  };
  const FirstRoute = () => {
    return (
      <View style={{height: 100, marginTop: 10}}>
        {titles.map(item => {
          return item.data.map((i, index) => (
            <FoodListView
              key={index}
              name={i.name}
              variants={i.variants}
              price={i.price}
              image={i.image}
            />
          ));
        })}
      </View>
    );
  };

  const SecondRoute = () => (
    <View style={{flex: 1, backgroundColor: '#673ab7'}} />
  );

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: 'black'}}
      style={{backgroundColor: 'white'}}
      activeColor={'black'}
      inactiveColor={'grey'}
    />
  );

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes, setRoutes] = React.useState([
    {key: `first`, title: 'First'},
    {key: `second`, title: 'Second'},
  ]);
  // const routesUpater = titles.map(items => {
  //   setRoutes([{key: `${items.title}`, title: items.title}], ...routes);
  // });
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <View style={{flex: 1, backgroundColor: '#eaeaea'}}>
      <View>
        <FlatListSlider
          data={images}
          timer={5000}
          imageKey={'image'}
          local={false}
          width={screenWidth}
          separator={0}
          loop={true}
          autoscroll={true}
          indicatorContainerStyle={{position: 'absolute', bottom: 20}}
          //currentIndexCallback={index => console.log('Index', index)}
          onPress={item => alert(JSON.stringify(item))}
          indicatorActiveColor={'#ffb100'}
          indicatorInActiveColor={'#ffffff'}
          indicator
          animation
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            position: 'absolute',
            justifyContent: 'space-between',
            padding: 10,
            width: '100%',
          }}>
          <View
            style={{
              backgroundColor: 'rgba(217,217,217,0.4)',
              borderRadius: 50,
              width: 35,
              height: 34,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="arrow-back" color={'black'} size={30} />
          </View>
          <View
            style={{
              backgroundColor: 'rgba(217,217,217,0.4)',
              borderRadius: 50,
              width: 35,
              height: 34,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Ionicons name="heart-outline" color={'#ffb100'} size={30} />
          </View>
        </View>
      </View>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
      <View>
        {/* <TabView />
        <FlatList
          data={titles}
          keyExtractor={(item, index) => `index${index}-${item.title}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({item}) => (
            <View style={{width, height: '100%', flex: 1}}>
              {item.data.map(i => {
                return (
                  <FoodListView name={i.name} price={i.price} image={i.image} />
                );
              })}
            </View>
          )}
        />*/}
      </View>
    </View>
  );
};

export default FoodView;
