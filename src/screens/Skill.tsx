import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Divider } from '@rneui/themed';
import PhotoUser from '../components/photo';
import ButtonApp from '../components/button';
import RatingApp from '../components/rating';

type RatingsComponentProps = {};
const SkillScreen: React.FunctionComponent<RatingsComponentProps> = ({ navigation }: any) => {
    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>
                <PhotoUser />
                <RatingApp />
                <Divider style={{ backgroundColor: '#ccc', height: 1, marginVertical: 10 }} />
                <ButtonApp titulo="Fale Comigo !" onPress={() => navigation.goBack()} iconName='envelope' iconColor='#fff' backgroundColor='#a610dc' />
                <ButtonApp titulo='Voltar' iconName='chevron-left' iconColor='#fff' backgroundColor='#3a3a3a' onPress={() => navigation.goBack()} />
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    text: {
        fontStyle: 'italic',
        fontWeight: '700',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: 40,
    },
    scrollView: {
        backgroundColor: 'write',
        
    },
});

export default SkillScreen;