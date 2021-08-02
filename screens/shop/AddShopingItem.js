import React, {useState} from 'react';
import {
  View,
  ScrollView,
  TextInput,
  Text,
  Image,
  Pressable,
  Platform,
} from 'react-native';
import {ThemeProvider, ThemeContext} from '../../MainContext/MainContext';
import Feather from 'react-native-vector-icons/Feather';
import {Icon, Select} from 'native-base';
import currencyCodes from '../../components/currency';
import {Button} from 'react-native';
import {UploadItem} from '../../Api/shopApi';
import {Formik} from 'formik';
import * as yup from 'yup';
import DocumentPicker from 'react-native-document-picker';

const AddShoppingItem = () => {
  const {styles} = React.useContext(ThemeContext);
  const [ImageData, setImageData] = useState([]);
  const categories = [
    'Electronic',
    'Home appliance',
    'Clothing',
    'Gaming',
    'Foot wear',
    'Jewellery',
    'Accessories',
    'Bags',
    'Books',
    'Covid19 Supplies',
    'Decorations',
    'Furniture',
    'Haircare',
    'Skincare',
    'Laptops',
    'Phones',
    'Shoes',
    'Tablets',
    'Televisions',
    'Utensils',
    'Watches',
  ];

  const ValidationScheme = yup.object({
    title: yup.string().min(2).max(15),
    description: yup.string().min(2).max(100),
    location: yup.string().min(2),
    offers: yup.string(),
    Price: yup.string(),
    currency: yup.string(),
    Category: yup.string(),
  });

  return (
    <View style={{backgroundColor: styles.Background, flex: 1}}>
      <ScrollView>
        <View style={{padding: 10}}>
          <Text style={{fontSize: 20, color: styles.textColor}}>
            Add an item
          </Text>
        </View>

        <Formik
          validationSchema={ValidationScheme}
          enableReinitialize
          initialValues={{
            title: '',
            currency: '',
            offers: '',
            description: '',
            location: '',
            Price: '',
            Category: '',
          }}
          onSubmit={handleUploadPhoto}>
          {props => (
            <View style={{padding: 10}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: -10,
                  marginBottom: 10,
                }}>
                {ImageData
                  ? ImageData.map((item, index) => (
                      <View
                        key={index}
                        style={{
                          width: 30,
                          height: 30,
                          borderRadius: 5,
                          borderWidth: 1,
                          borderColor: styles.textColor,
                          overflow: 'hidden',
                          marginHorizontal: 5,
                        }}>
                        <Image
                          source={{uri: item.uri}}
                          style={{height: '100%', width: '100%'}}
                        />
                      </View>
                    ))
                  : null}
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                {ImageData.length > 0 ? (
                  <Pressable onPress={() => ImagePicker()}>
                    <View
                      style={{
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={{uri: ImageData[0].uri}}
                        style={{width: 100, height: 100}}
                      />
                    </View>
                  </Pressable>
                ) : (
                  <Pressable onPress={() => ImagePicker()}>
                    <View
                      style={{
                        borderColor: '#D3D3D3',
                        borderWidth: 1,
                        width: 100,
                        height: 100,
                        borderRadius: 10,
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: styles.textColor,
                      }}>
                      <Feather name={'plus'} size={25} color={'grey'} />
                    </View>
                  </Pressable>
                )}

                <View style={{width: '65%', marginLeft: 20}}>
                  <TextInput
                    style={{
                      borderColor: 'grey',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      width: '100%',
                      paddingLeft: 10,
                      color: styles.textColor,
                      borderRadius: 10,
                    }}
                    value={props.values.title}
                    onChangeText={props.handleChange('title')}
                    enablesReturnKeyAutomatically
                    placeholder={'Name of the item'}
                    placeholderTextColor={'#ccc'}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.title && props.errors.title}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginTop: 20,
                      justifyContent: 'space-between',
                    }}>
                    <Select
                      placeholder="Category"
                      selectedValue={props.values.Category}
                      width={220}
                      color={styles.textColor}
                      _actionSheetContent={{
                        style: {backgroundColor: styles.Background},
                      }}
                      _item={{style: {color: styles.textColor}}}
                      onValueChange={value =>
                        props.setFieldValue('Category', value)
                      }>
                      {categories.map((item, index) => (
                        <Select.Item
                          label={item}
                          value={index}
                          key={`${item}-${index}`}
                          style={{color: styles.textColor}}
                        />
                      ))}
                    </Select>
                    <Text
                      style={{
                        marginBottom: -5,
                        fontSize: 10,
                        color: 'red',
                        marginLeft: 10,
                        marginTop: -20,
                      }}>
                      {props.touched.Category && props.errors.Category}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginTop: 17}}>
                <TextInput
                  style={{
                    borderColor: 'grey',
                    borderWidth: 1,
                    borderColor: '#ccc',
                    width: '100%',
                    maxHeight: 150,
                    borderRadius: 10,
                    paddingLeft: 10,
                    color: styles.textColor,
                  }}
                  enablesReturnKeyAutomatically
                  multiline
                  placeholder={'Description'}
                  placeholderTextColor={'#ccc'}
                  onChangeText={props.handleChange('description')}
                  value={props.values.description}
                />
                <Text
                  style={{
                    marginBottom: -5,
                    fontSize: 10,
                    color: 'red',
                    marginLeft: 10,
                    marginTop: -20,
                  }}>
                  {props.touched.description && props.errors.description}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    marginTop: 15,
                    justifyContent: 'space-between',
                  }}>
                  <TextInput
                    style={{
                      borderColor: 'grey',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      width: '58%',
                      paddingLeft: 10,
                      color: styles.textColor,
                      borderRadius: 5,
                      height: 55,
                    }}
                    enablesReturnKeyAutomatically
                    placeholder={'Price of the product'}
                    placeholderTextColor={'#ccc'}
                    onChangeText={props.handleChange('Price')}
                    value={props.values.Price}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.Price && props.errors.Price}
                  </Text>
                  <Select
                    placeholder="Currency"
                    selectedValue={props.values.currency}
                    width={130}
                    color={styles.textColor}
                    style={{backgroundColor: styles.Background}}
                    _actionSheetContent={{
                      style: {backgroundColor: styles.Background},
                    }}
                    onValueChange={value =>
                      props.setFieldValue('currency', value)
                    }>
                    {currencyCodes.map((item, index) => (
                      <Select.Item
                        label={item}
                        value={index}
                        key={`${item}-${index}`}
                      />
                    ))}
                  </Select>
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.currency && props.errors.currency}
                  </Text>
                </View>
                <View
                  style={{
                    marginTop: 15,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                  }}>
                  <TextInput
                    style={{
                      borderColor: 'grey',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      width: '100%',
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: styles.textColor,
                    }}
                    onChangeText={props.handleChange('location')}
                    value={props.values.location}
                    enablesReturnKeyAutomatically
                    placeholder={'Location'}
                    placeholderTextColor={'#ccc'}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.location && props.errors.location}
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <TextInput
                    style={{
                      borderColor: 'grey',
                      borderWidth: 1,
                      borderColor: '#ccc',
                      width: '100%',
                      maxHeight: 80,
                      borderRadius: 10,
                      paddingLeft: 10,
                      color: styles.textColor,
                    }}
                    onChangeText={props.handleChange('offers')}
                    value={props.values.offers}
                    enablesReturnKeyAutomatically
                    placeholder={'Offers (Optional)'}
                    placeholderTextColor={'#ccc'}
                  />
                </View>
                <View
                  style={{
                    marginTop: 20,
                  }}>
                  <Button
                    title="Submit"
                    color="teal"
                    onPress={props.handleSubmit}
                  />
                </View>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default AddShoppingItem;
