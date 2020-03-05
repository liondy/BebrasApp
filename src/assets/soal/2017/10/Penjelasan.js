import React from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

function Penjelasan(){
    return(
        <Text style={styles.txIsiPenjelasan}>
            If you put the cross in 1st, 3rd or 4th position, 
            your friend will have the possibility to put a circle
            in the 2nd position, which will lead to their victory.
            However, if you put a cross in 2nd position, two possible
            alignments of crosses will be possible (by putting one in
            1st position or one in 4th position). If your friend puts 
            their circle in 1st position, you can put the cross in 4th 
            and win; if your friend puts their circle in 4th position,
            you can put the cross in 1st and win; if your friend puts
            its circle in 3rd position you will win no matter where you put the cross.
            The only way of being sure of a possible win is by putting 
            the cross in position 2. However you are not guaranteed 
            to win as there will still be a very silly move available 
            to you which ends in a draw.
        </Text>
    )
}

const styles = StyleSheet.create({
    txIsiPenjelasan:{
        color : '#FF5733',
        fontWeight: 'bold',
        fontSize: 15,
        lineHeight: 40,
        includeFontPadding: true,
        padding: 15,
        marginTop: 50
    },
})

export default Penjelasan;