import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '../../components/bottomSheet';
import CameraRoll from '@react-native-community/cameraroll';
import axios from 'axios';
import RNFS from 'react-native-fs';

const Camera = () => {
  const navigation = useNavigation();
  const camera = useRef(null);
  const refRBSheet = useRef();
  const [color, setcolor] = useState('white');
  const [Flash, setFlash] = useState(false);
  const [front, setfront] = useState(false);
  const [photos, setPhotos] = useState([]);
  const [uri, setUri] = useState(null);

  const takePicture = async () => {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      let base64Img = data.uri;
      console.log(base64Img);
      //   RNFS.readFile(
      //     Platform.OS === 'android' ? base64Img.substring(7) : base64Img,
      //     'base64',
      //   ) //substring(7) -> to remove the file://
      //     .then(res => setUrsi(res))
      //     .catch(err => console.error(err));

      //   if (uri) {
      //     axios
      //       .post('http://192.168.0.101:5000/paltroServer/v1/', {
      //         body: JSON.stringify({
      //           image_encoded: `data:image/jpg;base64,${uri}`,
      //         }),
      //       })
      //       .then(responseData => {
      //         console.log(responseData);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
      //   }
    }
  };
  const handleButtonPress = () => {
    CameraRoll.getPhotos({
      first: 20,
      assetType: 'Photos',
    })
      .then(r => {
        setPhotos(r.edges);
      })
      .catch(err => {
        console.log(err);
      });
  };
  const height = Dimensions.get('window').height;
  return (
    <View style={{flex: 1, flexDirection: 'column', backgroundColor: 'black'}}>
      <RNCamera
        ref={camera}
        style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}
        type={
          front ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back
        }
        flashMode={
          Flash
            ? RNCamera.Constants.FlashMode.on
            : RNCamera.Constants.FlashMode.off
        }
        useNativeZoom={true}
        androidCameraPermissionOptions={{
          title: 'Permission to use camera',
          message: 'We need your permission to use your camera',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        androidRecordAudioPermissionOptions={{
          title: 'Permission to use audio recording',
          message: 'We need your permission to use your audio',
          buttonPositive: 'Ok',
          buttonNegative: 'Cancel',
        }}
        // onGoogleVisionBarcodesDetected={({barcodes}) => {
        //   console.log(barcodes);
        // }}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          padding: 10,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons
            name="images-outline"
            color={'white'}
            size={30}
            onPress={() => {
              refRBSheet.current.open();
              handleButtonPress();
            }}
          />
          <Text style={{color: 'white', fontSize: 25, marginLeft: 5}}>
            Paltro
          </Text>
        </View>
        <View>
          <Ionicons
            name={Flash ? 'flash-sharp' : 'flash-outline'}
            color={'white'}
            size={30}
            onPress={() => setFlash(!Flash)}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          padding: 15,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}>
        <View>
          <Ionicons name="grid-outline" color={'white'} size={30} />
        </View>
        <View style={{borderColor: 'white', borderWidth: 2, borderRadius: 50}}>
          <Pressable
            onLongPress={() => setcolor('red')}
            onPressOut={() => setcolor('white')}
            onPress={() => takePicture()}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 50,
                backgroundColor: color,
                margin: 5,
              }}
            />
          </Pressable>
        </View>
        <View>
          <Ionicons
            name={'ios-camera-reverse-outline'}
            onPress={() => setfront(!front)}
            color={'white'}
            size={30}
          />
        </View>
      </View>
      <BottomSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={height - 100}
        customStyles={{
          container: {backgroundColor: '#eeeeee'},
        }}>
        <View style={{flex: 1}}>
          <ScrollView>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                flexWrap: 'wrap',
                padding: 10,
              }}>
              {photos.map((p, i) => {
                return (
                  <Image
                    key={i}
                    style={{
                      width: 100,
                      height: 100,
                      margin: 5,
                    }}
                    source={{uri: p.node.image.uri}}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      </BottomSheet>
    </View>
  );
};

export default Camera;
