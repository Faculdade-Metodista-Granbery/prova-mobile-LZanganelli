import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button } from 'react-native-paper';
import { ProgressBar } from 'react-native-paper';
import {colors} from '../../utils/colors';



const styles = StyleSheet.create({
    card: {
        // backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        width: '100%', 
        alignItems: 'center',
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task, background, bgColor, txtColor}) => {
    const [likeButton, setLikebutton] = useState("play");
    const [progress, setProgress] = useState(0)
    
    const handleLike = () => {
        
        if (likeButton === "play") {
            setLikebutton("math-norm")
            setProgress(1)
        } else {
            setLikebutton("play")
            setProgress(0)
        }
    }  

    return (
        <Card style={[{backgroundColor: bgColor}, styles.card]}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} 
            />
            <Card.Content 
                style={styles.content}
            >
                <Paragraph 
                    style={{color: txtColor}}
                >
                    {task}
                </Paragraph>

                <Card.Actions>
                    <Button 
                        onPress={handleLike}
                        icon={likeButton}
                        labelStyle={{fontSize: 50}}
                    />                    
                </Card.Actions>
            </Card.Content>
            <ProgressBar
                progress={progress}
                color={colors.txtColor}
                style={{ height: 10, width: '100%'}}
                borderRadius={50}>
            </ProgressBar>
        </Card>
            
    )
}

export default CardQuote;
