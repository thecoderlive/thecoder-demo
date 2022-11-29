import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const newSongsItem = ({ item }) => (
<View style={styles.new_songs_item}>
<Image
    style={styles.song_cover}
    source={{uri: item.song_cover}}
    />
<Text style={styles.song_name}>{item.song_name}</Text>
<Text style={styles.singer}>{item.singer}</Text>
</View>
  );

const NewSongs = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.new_songs}
    data={item}
    renderItem={newSongsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default NewSongs;

const styles = StyleSheet.create({
    'song_cover': {
        'width': '40vw',
        'height': '40vw',
        'marginHorizontal': 8,
        'marginVertical': 20,
        'borderRadius': 10
    },
    'song_name': {
        'color': '#050505',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10
    },
    'singer': {
        'color': '#707070',
        'fontSize': 16,
        'fontWeight': '400',
        'paddingHorizontal': 10,
        'paddingTop': 5
    }
});