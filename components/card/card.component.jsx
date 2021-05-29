import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';


const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task, background}) => {
const [likeButton, setLikebutton] = useState("play");  
const handleLike = () => {
    if (likeButton === "play") {
        setLikebutton("math-norm")
    } else {
        setLikebutton("play")
    }
}  

    return (
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
                <Paragraph>{task}</Paragraph>
            <Card.Content style={styles.content}>
            </Card.Content>
            <Card.Actions>
                <Button onPress={handleLike}
                icon={likeButton}
                labelStyle={{fontSize: 70}}
                />
                
            </Card.Actions>
        </Card>
    )
}

export default CardQuote;
