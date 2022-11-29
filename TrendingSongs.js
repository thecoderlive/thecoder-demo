import React from 'react'
import { Image, View, FlatList, StyleSheet } from 'react-native'



const trendingSongsItem = ({ item }) => (
<View style={styles.trending_songs_item}>
<Image
    style={styles.trending_song_cover}
    source={{uri: item.trending_song_cover}}
    />
</View>
  );

const TrendingSongs = ({ item }) => (
<FlatList
    horizontal={true}
    style={styles.trending_songs}
    data={item}
    renderItem={trendingSongsItem}
    keyExtractor={item => item.id}
    showsHorizontalScrollIndicator={false}
    pagingEnabled={true}
    />
);

export default TrendingSongs;

const styles = StyleSheet.create({
    'trending_song_cover': {
        'width': '95vw',
        'height': '55vw',
        'marginTop': 5,
        'borderRadius': 10,
        'marginHorizontal': 8
    }
});