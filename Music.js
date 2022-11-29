import React from 'react'
import {  ScrollView, StyleSheet } from 'react-native'

import { item } from './DATA'
import TrendingSongs from './TrendingSongs'
import NewSongs from './NewSongs'
import SuggestedArtists from './SuggestedArtists'

const Music = () => (
<ScrollView style={styles.music} showsVerticalScrollIndicator={false}>
<TrendingSongs item={item.trending_songs}/>
<NewSongs item={item.new_songs}/>
<SuggestedArtists item={item.suggested_artists}/>
</ScrollView>
)

export default Music;

const styles = StyleSheet.create({
    
});