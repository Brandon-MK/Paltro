const data = [
  {
    id: '1',
    username: 'MickJohn',
    name: 'Mick John',
    profileImage:
      'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80',
    posts: [
      {
        type: 'Image',
        source:
          'https://images.unsplash.com/photo-1503066211613-c17ebc9daef0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        timestamp: new Date('July 06, 2021 03:24:00'),
        key: '1',
        text: 'The power the tiger two similar things but powerful subjects!',
        comments: [
          {
            id: '1',
            username: 'johnbangre',
            name: 'John Bangre',
            profileImage:
              'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Wow!🍫, You deserve a treat for that.',
            timestamp: new Date('July 06, 2021 05:00:00'),
          },
          {
            id: '2',
            username: 'that__guy',
            name: 'Daniel Rue',
            profileImage:
              'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Nice image',
            timestamp: new Date('July 06, 2021 06:04:00'),
          },
          {
            id: '3',
            username: 'home',
            name: 'Sean Mckay',
            profileImage:
              'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'True saying',
            timestamp: new Date('July 06, 2021 07:20:00'),
          },
          {
            id: '4',
            username: 'done',
            name: 'Neil Glover',
            profileImage:
              'https://images.unsplash.com/photo-1610560454932-5209addcf8cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Lovely',
            timestamp: new Date('July 06, 2021 07:59:00'),
          },
        ],
      },
      {
        type: 'Text',
        text: 'Just finished seven burgers 🍔 so full! Oh well time for 🍗',
        timestamp: new Date('June 7, 2020 04:04:00'),
        key: '6',
        comments: [],
      },
      {
        type: 'Image',
        source: [
          {
            key: '1',
            type: 'Image',
            image:
              'https://images.unsplash.com/photo-1581285025904-e7f1a94c330b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXIlMjBiYWNrZ3JvdW5kfGVufDB8MHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            key: '2',
            type: 'Image',
            image:
              'https://images.unsplash.com/photo-1521819342394-5f3dd1b43ba1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=784&q=80',
          },
          {
            key: '3',
            type: 'Image',
            image:
              'https://images.unsplash.com/photo-1616033481409-1bc22a923483?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdhdGVyJTIwYmFja2dyb3VuZHxlbnwwfDB8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
          },
          {
            key: '4',
            type: 'Video',
            video:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
          },
          {
            key: 5,
            type: 'Video',
            video:
              'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
          },
        ],
        timestamp: new Date('November 15, 2012 05:08:00'),
        key: '2',
        text: 'Children bring joy and happiness.',
        comments: [],
      },
      {
        type: 'Text',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce viverra nunc neque, ut eleifend tortor faucibus id. Vivamus at ligula quis lectus hendrerit porta. Aenean ac nunc eu arcu egestas tincidunt. Vestibulum non rutrum libero. Aenean a laoreet ante. Suspendisse non ornare justo, eu lobortis ante. Cras sagittis sem nec est molestie fermentum. Curabitur at eros eu urna pulvinar facilisis sed sit amet felis. Pellentesque sit amet risus odio.',
        timestamp: new Date('October 17, 2013 03:24:00'),
        key: '3',
        comments: [],
      },
      {
        type: 'Text',
        text: 'Consequat laboris nulla deserunt non amet ad quis ea. Nostrud anim non cupidatat eu commodo fugiat commodo enim est ipsum. Esse anim enim fugiat sunt aute duis ea mollit aliquip do. Et officia excepteur eu reprehenderit consequat enim excepteur nostrud excepteur amet eu cillum Lorem sit.',
        timestamp: new Date('October 07, 2015 03:24:00'),
        key: '4',
        comments: [
          {
            id: '1',
            username: 'johnbangre',
            name: 'John Bangre',
            profileImage:
              'https://images.unsplash.com/photo-1611485988300-b7530defb8e2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Wow!🍫, You deserve a treat for that.',
            timestamp: new Date('July 06, 2021 05:00:00'),
          },
          {
            id: '2',
            username: 'that__guy',
            name: 'Daniel Rue',
            profileImage:
              'https://images.unsplash.com/photo-1591258739299-5b65d5cbb235?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Nice image',
            timestamp: new Date('July 06, 2021 06:04:00'),
          },
          {
            id: '3',
            username: 'home',
            name: 'Sean Mckay',
            profileImage:
              'https://images.unsplash.com/photo-1605462863863-10d9e47e15ee?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bWFuJTIwZmFjZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'True saying',
            timestamp: new Date('July 06, 2021 07:20:00'),
          },
          {
            id: '4',
            username: 'done',
            name: 'Neil Glover',
            profileImage:
              'https://images.unsplash.com/photo-1610560454932-5209addcf8cc?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fG1hbiUyMGZhY2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
            comment: 'Lovely',
            timestamp: new Date('July 06, 2021 07:59:00'),
          },
        ],
      },
    ],
  },
  {
    id: '2',
    username: 'SheliaWoods',
    name: 'Shelia Woods',
    profileImage:
      'https://images.unsplash.com/photo-1563132305-24784f57eeea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
    posts: [
      {
        type: 'Image',
        source:
          'https://images.unsplash.com/photo-1615412704911-55d589229864?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=847&q=80',
        timestamp: new Date('December 17, 1995 03:24:00'),
        key: '4',
        text: 'Mother nature said wow, ❤️!',
        comments: [],
      },
      {
        type: 'Image',
        source:
          'https://images.unsplash.com/photo-1526726538690-5cbf956ae2fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        timestamp: new Date('December 17, 1995 03:24:00'),
        key: '5',
        text: 'Lets move with the wind and not forget the wind.',
        comments: [],
      },
      {
        type: 'Text',
        text: 'Wow, today i had a great photoshoot.',
        timestamp: new Date('December 17, 1995 03:24:00'),
        key: '6',
        comments: [],
      },
    ],
  },
];

export default data;
