import React from 'react';
import {
  Pressable,
  Image,
  StyleSheet,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Video from 'react-native-video';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChildItem = ({
  item,
  style,
  onPress,
  index,
  imageKey,
  local,
  height,
  videoKey,
}) => {
  const [Loading, setLoading] = React.useState(false);
  const [mute, setmute] = React.useState(false);

  return (
    <View style={styles.container}>
      {item['type'] === 'Image' ? (
        <Pressable onPress={() => onPress(index)}>
          <Image
            style={[style, {height: height}]}
            fadeDuration={0}
            source={local ? item[imageKey] : {uri: item[imageKey]}}
          />
        </Pressable>
      ) : item['type'] === 'Video' ? (
        <View>
          {Loading ? (
            <View
              style={[
                styles.backgroundVideo,
                {
                  backgroundColor: 'black',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <ActivityIndicator size={'small'} color={'white'} />
            </View>
          ) : (
            <View>
              <Video
                source={local ? item[videoKey] : {uri: item[videoKey]}}
                style={styles.backgroundVideo}
                repeat={true}
                resizeMode={'cover'}
                muted={mute}
                onError={error => console.log(error)}
                onBuffer={data =>
                  data.isBuffering ? setLoading(true) : setLoading(false)
                }
              />
              <View
                style={{
                  position: 'absolute',
                  right: 5,
                  bottom: 5,
                  backgroundColor: 'rgba(253,253,253,0.5)',
                  borderRadius: 50,
                  width: 30,
                  height: 30,
                }}>
                <Ionicons
                  name={mute ? 'volume-high-outline' : 'volume-mute-outline'}
                  size={20}
                  style={{padding: 5}}
                  onPress={() => setmute(!mute)}
                />
              </View>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};
const width = Dimensions.get('window').width;
export default ChildItem;
const styles = StyleSheet.create({
  container: {},
  backgroundVideo: {
    width: width - 18,
    height: '100%',
  },
});
