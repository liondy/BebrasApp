import React from 'react';
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Modal from 'react-native-modal';
import { correct } from '../../../../pages/TantanganSoal';
import { wrong } from '../../../../pages/TantanganSoal';

function Jawaban(){
    const[isVisible,toggle]=React.useState(false);
    return(
        <View>
            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> correct.play()}
                onPress={()=> {toggle(currentIsOpen => !currentIsOpen); this.Gambar(1)}}>
                <Text style={styles.txPilihan}>Kotalima</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotasatu</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotadua</Text>
            </TouchableHighlight>

            <TouchableHighlight
                underlayColor='#d9eb36'
                style={styles.btnPilihan}
                onPressIn={()=> wrong.play()}
                onPress={()=>  {toggle(currentIsOpen => !currentIsOpen); temp=0}}>
                <Text style={styles.txPilihan}>Kotatiga</Text>
            </TouchableHighlight>

            <View style={styles.modalCont}>
                <Modal
                style={styles.modal}
                visible={isVisible}
                backdropColor="white"
                backdropOpacity={0.8}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                animationInTiming={600}
                animationOutTiming={600}
                backdropTransitionInTiming={600}
                backdropTransitionOutTiming={600}>
                    <View style={{marginTop: 22}}>
                        <View style={{width: '100%',height: '100%'}}>
                            <Text style={styles.jawaban}>Jawaban : </Text>
                            <Text style={styles.penjelasan}>Jawaban yang benar adalah Kotalima!</Text>
                            <Gambar/>
                            
                            
                        <TouchableHighlight>
                                <Button title="Close" onPress={() => 
                                toggle(currentIsOpen => !currentIsOpen)}/>
                        </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    btnPilihan:{
        borderRadius: 50,
        marginBottom: 10,
        paddingVertical: 15,
        backgroundColor: '#fff'
    },
})

export default Jawaban;