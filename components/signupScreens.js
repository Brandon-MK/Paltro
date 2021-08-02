import React, {useState} from 'react';
import {View, Dimensions, ScrollView, Pressable, FlatList} from 'react-native';
import {Text, Input as TextInput} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Auth from '@react-native-firebase/auth';
import {Button, CheckBox, Input} from 'react-native-elements';
import {Formik} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {ThemeContext} from '../../MainContext/MainContext';

const width = Dimensions.get('window').width;

var email = '';
var username = '';
var name = '';
var phonenumber = '';
var password = '';
var gender = '';
var insterests = [];
var dateofbirth = '';
var agreetos = null;

const FirstScreenSchema = yup.object({
  name: yup.string().required().min(4),
  username: yup.string().required().min(3).lowercase('Must be lowercased'),
  email: yup.string().required().min(5).email(),
  phoneNumber: yup.string().notRequired().min(4),
});

const FirstScreen = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: 'teal',
        width: width,
        height: '100%',
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{padding: 15}}>
            <Text
              style={{
                fontSize: 30,
                fontFamily: 'Roboto-Medium',
                color: 'white',
              }}>
              Hey, come join the family!
            </Text>
          </View>
          <Formik
            validationSchema={FirstScreenSchema}
            initialValues={{name: '', username: '', phoneNumber: '', email: ''}}
            onSubmit={(values, actions) => {
              email = values.email;
              username = values.username;
              phonenumber = values.phoneNumber;
              name = values.name;
              onPress();
            }}>
            {props => (
              <View style={{marginTop: width / 10}}>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Email'}
                    placeholderTextColor={'white'}
                    onChangeText={props.handleChange('email')}
                    value={props.values.email}
                    keyboardType={'email-address'}
                    autoCapitalize={'none'}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.email && props.errors.email}
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Phone number (optional)'}
                    placeholderTextColor={'white'}
                    keyboardType={'decimal-pad'}
                    onChangeText={props.handleChange('phoneNumber')}
                    value={props.values.phoneNumber}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.phoneNumber && props.errors.phoneNumber}
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Name'}
                    placeholderTextColor={'white'}
                    onChangeText={props.handleChange('name')}
                    value={props.values.name}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.name && props.errors.name}
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Username'}
                    placeholderTextColor={'white'}
                    onChangeText={props.handleChange('username')}
                    value={props.values.username}
                    autoCapitalize={'none'}
                  />
                  <Text
                    style={{
                      marginBottom: -5,
                      fontSize: 10,
                      color: 'red',
                      marginLeft: 10,
                      marginTop: -20,
                    }}>
                    {props.touched.username && props.errors.username}
                  </Text>
                </View>
                <View
                  style={{
                    width: 100,
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    paddingBottom: 5,
                  }}>
                  <Button title={'Next'} onPress={props.handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

const secondScreenSchema = yup.object({
  password: yup
    .string()
    .required('Must enter your password')
    .min(6, 'Must be more than 6 letters or symbols'),
  repassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Both password need to be the same')
    .required('Must re-type your password'),
  checked: yup.string().required('Must select one'),
});

const SecondScreen = ({onPress}) => {
  const [visible, setVisible] = useState(false);
  const [visibleAgain, setVisibleAgain] = useState(false);

  return (
    <View
      style={{
        backgroundColor: 'orange',
        width: width,
        height: '100%',
        flex: 1,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <View style={{padding: 15}}>
            <Text
              style={{
                fontSize: 30,
                color: 'white',
                fontFamily: 'Roboto-Medium',
              }}>
              Alot awaits you inside!
            </Text>
          </View>
          <Formik
            validationSchema={secondScreenSchema}
            initialValues={{
              checked: '',
              password: '',
              repassword: '',
            }}
            onSubmit={(values, actions) => {
              gender = values.checked;
              password = values.password;
              onPress();
            }}>
            {props => (
              <View style={{marginTop: width / 10}}>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Enter your password'}
                    placeholderTextColor={'white'}
                    onChangeText={props.handleChange('password')}
                    secureTextEntry={visible}
                    value={props.values.password}
                    leftIcon={<Ionicons name="lock-closed-outline" size={20} />}
                    rightIcon={
                      <Ionicons
                        name={visible ? 'ios-eye-off-sharp' : 'eye-outline'}
                        size={25}
                        onPress={() => setVisible(!visible)}
                      />
                    }
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: -15,
                      color: 'red',
                      fontSize: 10,
                    }}>
                    {props.touched && props.errors.password}
                  </Text>
                </View>
                <View style={{marginHorizontal: 10, marginVertical: 5}}>
                  <Input
                    placeholder={'Retype your password'}
                    placeholderTextColor={'white'}
                    onChangeText={props.handleChange('repassword')}
                    secureTextEntry={visibleAgain}
                    value={props.values.repassword}
                    leftIcon={<Ionicons name="lock-closed-outline" size={20} />}
                    rightIcon={
                      <Ionicons
                        name={
                          visibleAgain ? 'ios-eye-off-sharp' : 'eye-outline'
                        }
                        size={25}
                        onPress={() => setVisibleAgain(!visibleAgain)}
                      />
                    }
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      marginTop: -15,
                      color: 'red',
                      fontSize: 10,
                    }}>
                    {props.touched && props.errors.repassword}
                  </Text>
                </View>
                <View
                  style={{
                    marginHorizontal: 10,
                    marginVertical: 5,
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginBottom: 50,
                  }}>
                  <View>
                    <CheckBox
                      title={'Male'}
                      checked={props.values.checked === 'Male' ? true : false}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      onPress={() => props.setFieldValue('checked', 'Male')}
                    />
                  </View>
                  <View>
                    <CheckBox
                      title={'Female'}
                      checked={props.values.checked === 'Female' ? true : false}
                      containerStyle={{
                        backgroundColor: 'transparent',
                        borderColor: 'transparent',
                      }}
                      onPress={() => props.setFieldValue('checked', 'Female')}
                    />
                  </View>
                </View>
                <Text
                  style={{
                    marginTop: -50,
                    fontSize: 10,
                    color: 'red',
                    marginLeft: 15,
                  }}>
                  {props.touched && props.errors.checked}
                </Text>
                <View
                  style={{
                    width: 100,
                    alignSelf: 'flex-end',
                    marginRight: 10,
                    paddingBottom: 5,
                  }}>
                  <Button title={'Next'} onPress={props.handleSubmit} />
                </View>
              </View>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
};

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const ThirdScreenSchema = yup.object({
  day: yup.number().required('Fill in the day').min(1).max(31),
  month: yup
    .string()
    .required('Fill in the month')
    .min(3)
    .max(9)
    .oneOf(months, 'Should be an actual month'),
  year: yup.string().required('Fill in the year').max(4).min(4),
});

const ThirdScreen = ({onPress}) => {
  return (
    <View
      style={{
        backgroundColor: '#AD21FF',
        width: width,
        height: '100%',
        flex: 1,
      }}>
      <View>
        <View style={{padding: 15}}>
          <Text
            style={{
              fontSize: 30,
              color: 'white',
              fontFamily: 'Roboto-Medium',
            }}>
            But wait when's your birthday
          </Text>
          <Text style={{color: 'black'}}>
            This will not be shown publically
          </Text>
        </View>
        <Formik
          initialValues={{day: '', month: '', year: ''}}
          validationSchema={ThirdScreenSchema}
          onSubmit={(values, action) => {
            dateofbirth = `${values.day} ${values.month} ${values.year}`;

            onPress();
          }}>
          {({values, handleSubmit, errors, handleChange, touched}) => (
            <View
              style={{
                padding: 10,
                marginVertical: width / 10,
              }}>
              <View style={{marginVertical: 5}}>
                <TextInput
                  placeholder={'Enter your day'}
                  value={values.day}
                  onChangeText={handleChange('day')}
                  variant={'filled'}
                />
                <Text style={{fontSize: 10, color: 'red', marginLeft: 10}}>
                  {touched && errors.day}
                </Text>
              </View>
              <View style={{marginVertical: 5}}>
                <TextInput
                  placeholder={'Enter your month'}
                  value={values.month}
                  onChangeText={handleChange('month')}
                  variant={'filled'}
                />
                <Text style={{fontSize: 10, color: 'red', marginLeft: 10}}>
                  {touched && errors.month}
                </Text>
              </View>
              <View style={{marginVertical: 5}}>
                <TextInput
                  placeholder={'Enter your year'}
                  value={values.year}
                  onChangeText={handleChange('year')}
                  variant={'filled'}
                />
                <Text style={{fontSize: 10, color: 'red', marginLeft: 10}}>
                  {touched && errors.year}
                </Text>
              </View>
              <View
                style={{
                  width: 100,
                  alignSelf: 'flex-end',
                  marginRight: 10,
                }}>
                <Button title={'Next'} onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </View>
  );
};

const FourthScreenSchema = yup.object({
  interests: yup.array().required('Please what your interested in').min(5),
});

const FourthScreen = ({onPress}) => {
  const interests = [
    '3D printing',
    'Amateur radio',
    'Acting',
    'Baton twirling',
    'Board games',
    'Book restoration',
    'Cabaret',
    'Calligraphy',
    'Candle making',
    'Computer programming',
    'Coffee roasting',
    'Cooking',
    'Colouring',
    'Cosplaying',
    'Couponing',
    'Creative writing',
    'Crocheting',
    'Cryptography',
    'Dance',
    'Digital arts',
    'Drama',
    'Drawing',
    'Do it yourself',
    'Electronics',
    'Embroidery',
    'Fashion',
    'Flower arranging',
    'Foreign language learning',
    'Gaming',
    'Tabletop games',
    'Role-playing games',
    'Gambling',
    'Genealogy',
    'Glassblowing',
    'Gunsmithing',
    'Homebrewing',
    'Ice skating',
    'Jewelry making',
    'Jigsaw puzzles',
    'Juggling',
    'Knapping',
    'Knitting',
    'Kabaddi',
    'Knife making',
    'Lacemaking',
    'Lapidary',
    'Leather crafting',
    'Lego building',
    'Lockpicking',
    'Machining',
    'Macrame',
    'Metalworking',
    'Magic',
    'Model building',
    'Listening to music',
    'Origami',
    'Painting',
    'Playing musical instruments',
    'Pet',
    'Poi',
    'Pottery',
    'Puzzles',
    'Quilting',
    'Reading',
    'Scrapbooking',
    'Sculpting',
    'Sewing',
    'Singing',
    'Sketching',
    'Soapmaking',
    'Sports',
    'Stand-up comedy',
    'Sudoku',
    'Table tennis',
    'Taxidermy',
    'Video gaming',
    'Watching movies',
    'Web surfing',
    'Whittling',
    'Wood carving',
    'Woodworking',
    'World Building',
    'Writing',
    'Yoga',
    'Yo-yoing',
    'Air sports',
    'Archery',
    'Astronomy',
    'Backpacking',
    'Base jumping',
    'Baseball',
    'Basketball',
    'Beekeeping',
    'Bird watching',
    'Blacksmithing',
    'Board sports',
    'Bodybuilding',
    'Brazilian jiu-jitsu',
    'Community',
    'Cycling',
    'Dowsing',
    'Driving',
    'Fishing',
    'Football',
    'Flying',
    'Flying disc',
    'Foraging',
    'Gardening',
    'Geocaching',
    'Ghost hunting',
    'Graffiti',
    'Handball',
    'Hiking',
    'Hooping',
    'Horseback riding',
    'Hunting',
    'Inline skating',
    'Jogging',
    'Kayaking',
    'Kite flying',
    'Kitesurfing',
    'Larping',
    'Letterboxing',
    'Metal detecting',
    'Motor sports',
    'Mountain biking',
    'Mountaineering',
    'Mushroom hunting',
    'Mycology',
    'Netball',
    'Nordic skating',
    'Orienteering',
    'Paintball',
    'Parkour',
    'Photography',
    'Polo',
    'Rafting',
    'Rappelling',
    'Rock climbing',
    'Roller skating',
    'Rugby',
    'Running',
    'Sailing',
    'Sand art',
    'Scouting',
    'Scuba diving',
    'Sculling',
    'Rowing',
    'Shooting',
    'Shopping',
    'Skateboarding',
    'Skiing',
    'Skim Boarding',
    'Skydiving',
    'Slacklining',
    'Snowboarding',
    'Stone skipping',
    'Surfing',
    'Swimming',
    'Taekwondo',
    'Tai chi',
    'Urban exploration',
    'Vacation',
    'Vehicle restoration',
    'Water sports',
  ];
  return (
    <View
      style={{
        backgroundColor: 'white',
        width: width,
        height: '100%',
        flex: 1,
      }}>
      <Formik
        initialValues={{interests: []}}
        validationSchema={FourthScreenSchema}
        onSubmit={(values, action) => {
          action.resetForm();
          insterests.push(...values.interests);
          onPress();
        }}>
        {({handleSubmit, errors, values, setFieldValue, unregisterField}) => (
          <View>
            <View>
              <FlatList
                data={interests}
                initialNumToRender={10}
                keyExtractor={(i, index) => index}
                ListHeaderComponent={
                  <View style={{padding: 10}}>
                    <Text style={{fontSize: 30, fontFamily: 'Roboto-Medium'}}>
                      What are your interests?
                    </Text>
                  </View>
                }
                renderItem={({item, index}) => (
                  <Pressable
                    key={index}
                    onPress={() => {
                      if (values.interests.includes(item)) {
                        var carIndex = values.interests.indexOf(item);
                        values.interests.splice(carIndex, 1);
                      } else {
                        setFieldValue('interests', [...values.interests, item]);
                      }
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        backgroundColor: values.interests.includes(item)
                          ? 'lime'
                          : 'rgba(65,205,255,0.8)',
                        borderRadius: 10,
                        padding: 5,
                        margin: 3,
                        justifyContent: 'center',
                      }}>
                      <Ionicons
                        name={
                          values.interests.includes(item)
                            ? 'ios-checkmark-outline'
                            : 'add'
                        }
                        size={18}
                      />
                      <Text>{item}</Text>
                    </View>
                  </Pressable>
                )}
              />
              {/* <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                  paddingBottom: 50,
                }}></View> */}
            </View>

            <View
              style={{
                position: 'absolute',
                bottom: 5,
                width: '90%',
                alignSelf: 'center',
              }}>
              <Button title={'Next'} onPress={handleSubmit} />
            </View>
          </View>
        )}
      </Formik>
    </View>
  );
};

const FifthScreenSchema = yup.object({
  agree: yup
    .boolean()
    .required('Must agree with our terms and services')
    .oneOf([true], 'Please check the agreement'),
});

const FifthScreen = ({onPress}) => {
  const [loading, setLoading] = useState(false);
  return (
    <Formik
      initialValues={{agree: false}}
      validationSchema={FifthScreenSchema}
      onSubmit={async (values, actions) => {
        setLoading(true);
        agreetos = values.agree;
        await Auth()
          .createUserWithEmailAndPassword(email, password)
          .then(res => {
            console.log(res);
          });
        axios
          .post(
            `http://192.168.0.101:5000/paltroServer/v1/createAccount/${email}`,
            {
              Name: name,
              Username: username,
              Email: email,
              PhoneNumber: phonenumber,
              Gender: gender,
              Interests: insterests,
              DateofBirth: dateofbirth,
              AgreeToTermsAndConditions: agreetos,
              JoinedOn: new Date().toDateString(),
              Biography: '',
              ProfileImage: '',
            },
          )
          .then(() => onPress())
          .catch(err => console.log(err));
      }}>
      {props => (
        <View
          style={{
            backgroundColor: '#444444',
            width: width,
            height: '100%',
            flex: 1,
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View style={{padding: 10}}>
              <Text
                style={{
                  fontSize: 30,
                  fontFamily: 'Roboto-Medium',
                  color: 'white',
                }}>
                One more step to the door
              </Text>
            </View>
            <View style={{padding: 10, paddingBottom: 135}}>
              <Text style={{fontWeight: 'bold', color: 'white'}}>
                Our terms of service
              </Text>
              <Text style={{color: 'white'}}>
                {`We strive to create a dialogue with users of our Community and encourage you to share content via the Community by these Rules (Contribution). \n If in our opinion an individual makes use of the Community in breach of these Rules, we reserve the right to remove, or to disable access to, any Contribution, and to terminate, suspend or change the conditions of their access to the Community without prior warning. We also reserve the right to bring legal proceedings against any individual for a breach of the Rules or take such other action as we reasonably deem appropriate.`}
              </Text>
              <Text style={{color: 'white'}}>
                {`\nBasic Terms \n 1. You must be at least 13 years of age. \n 2. Harassment, bullying, threatening, and abusing other Paltro users, is strictly prohibited. \n 3. You must include the original author of any post if any.\n 4. Discrimination based on sex, religion, belief, disability, and age shall not be allowed.\n 5. You are responsible for what happens to your account.\n 6. You must never use or access Paltros's private API, only through the Paltro.\n 7. The Paltro account will follow back people occasionally but this does not mean endorsement.\n 8. You must never post hacking malware or try to perform crawling, scraping, and caching of content on Paltro.\n 9. You must not post any nude, harmful, and defamatory content.\n 10. You must not impersonate someone or a company if you are not them.\n 11. By submitting, posting, or displaying Content on or through the Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) to use, copy, reproduce, process, adapt, modify, publish, transmit, display and distribute such Content in any media or distribution methods now known or later developed (for clarity, these rights include, for example, curating, transforming, and translating). This license authorizes us to make your Content available to the rest of the world and to let others do the same, except content not shared publicly ("private") will not be distributed outside the PaltroServices.\n 12. You may not use the Paltro service for any illegal or unauthorized purpose. \n 13. You also agree not to misuse our Services, for example, by interfering with them or accessing them using a method other than the interface and the instructions that we provide. You may not do any of the following while accessing or using the Services:\n  - Access, tamper with, or use non-public areas of the Services, Paltro’s computer systems, or the technical delivery systems of Paltro’s providers;\n  - Probe, scan, or test the vulnerability of any system or network or breach or circumvent any security or authentication measures\n  - Access or search or attempt to access or search the Services by any means (automated or otherwise) other than through our currently available, published interfaces that are provided by Paltro (and only according to the applicable terms and conditions) unless you have been specifically allowed to do so in a separate agreement with Paltro (NOTE: crawling the Services is permissible if done following the provisions of the robots.txt file, however, scraping the Services without the prior consent of Paltro is expressly prohibited).\n  - Forge any TCP/IP packet header or any part of the header information in any email or posting, or in any way use the Services to send altered, deceptive, or false source-identifying information or interfere with, or disrupt, (or attempt to do so), the access of any user, host or network, including, without limitation, sending a virus, overloading, flooding, spamming, mail-bombing the Services, or by scripting the creation of Content in such a manner as to interfere with or create an undue burden on the Services. We also reserve the right to access, read, preserve, and disclose any information as we reasonably believe is necessary to\n  - Satisfy any applicable law, regulation, legal process, or governmental request. \n  - Enforce the Terms, including investigation of potential violations hereof. \n  - Detect, prevent, or otherwise address fraud, security, or technical issues.\n  - Respond to user support requests, or protect the rights, property, or safety of Paltro, its users, and the public.`}
              </Text>
              <Text
                style={{
                  color: 'white',
                }}>{`\nRights of Paltro \n 1. We hold the right to remove content that violates the user agreement. \n 2. We reserve the right to force forfeiture of any username that becomes inactive, violates trademark, or may mislead other users.\n 3. We reserve the right to refuse service to anyone for any reason at any time.\n 4. We reserve the right to reclaim usernames on behalf of businesses or individuals that hold legal claims or trademarks on those usernames.\n 5. Paltro does NOT claim ANY ownership rights in the text, files, images, photos, video, sounds, musical works, works of authorship, applications, or any other materials that you post\n 6. Some of the Paltro Services are supported by advertising revenue and may display advertisements and promotions, and you hereby agree that we may place such advertising and promotions in conjunction with your Content. The manner, mode, and extent of such advertising and promotions are subject to change without specific notice to you.\n 7. And we reserve the right to delete any Content for any reason, without prior notice. Deleted content may be stored by Paltro to comply with certain legal obligations and is not retrievable without a valid court order. Consequently, Paltro encourages you to maintain the backup of your Content. In other words, Paltro is not a backup service. Paltro will not be liable to you for any modification, suspension, or discontinuation of the Paltro Services, or the loss of any Content.`}</Text>
              <Text style={{fontWeight: 'bold', color: 'white', marginTop: 10}}>
                {`Breaking these terms and conditions of Paltro shall result into deactivation of your account or even legall actions. `}
              </Text>
            </View>
          </ScrollView>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'rgba(52, 52, 52, 0.8)',
              height: 130,
            }}>
            <CheckBox
              title={'Accept and agree to terms and conditions'}
              checkedTitle={'Agreed to terms and conditions'}
              containerStyle={{
                backgroundColor: 'transparent',
                width: '94%',
              }}
              checked={props.values.agree}
              textStyle={{color: 'white'}}
              onPress={() => props.setFieldValue('agree', !props.values.agree)}
            />
            <Text
              style={{
                fontSize: 10,
                color: 'red',
                marginLeft: 10,
                width: '50%',
              }}>
              {props.touched && props.errors.agree}
            </Text>
            <View
              style={{
                marginTop: 5,
                paddingBottom: 5,
                width: 100,
                alignSelf: 'flex-end',
                right: 5,
              }}>
              <Button
                title="Finish"
                onPress={props.handleSubmit}
                loading={loading}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
};

export {FirstScreen, SecondScreen, ThirdScreen, FourthScreen, FifthScreen};
