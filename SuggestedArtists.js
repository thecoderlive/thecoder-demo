import React from 'react'
import { Image, Text, View, FlatList, StyleSheet } from 'react-native'



const suggestedArtistsItem = ({ item }) => (
<View style={styles.suggested_artists_item}>
<Image
    style={styles.artist_profile_img}
    source={{uri: item.artist_profile_img}}
    />
<Text style={styles.artist_name}>{item.artist_name}</Text>
</View>
  );

const SuggestedArtists = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.suggested_artists}
    data={item}
    renderItem={suggestedArtistsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default SuggestedArtists;

const styles = StyleSheet.create({
    'artist_profile_img': {
        'width': '25vw',
        'height': '25vw',
        'marginTop': 10,
        'alignSelf': 'center',
        'borderRadius': 50,
        'marginHorizontal': 8
    },
    'artist_name': {
        'color': '#080707',
        'fontSize': 15,
        'fontWeight': '600',
        'paddingHorizontal': 10,
        'paddingTop': 5,
        'alignSelf': 'center'
    }
});