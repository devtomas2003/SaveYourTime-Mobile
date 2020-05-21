import React from 'react';
import { View, TextInput, StyleSheet, Image, Text } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Region(){
    return(
        <View style={style.mainBox}>
            <View style={style.searchBox}>
                <TextInput style={style.searchInput} placeholder="Pesquise um estabelecimento"/>
                <Image/>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEn5Lq-j446x5GFbbGOHIncDf1ALdPUWYIcLkI_d-Tghd0Mdwk&usqp=CAU',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>SportZone - Tondela</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 4</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: 5 minutos</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://lh6.ggpht.com/0wBX0Ratmce5flh5OoUv8qfaEv-shuWm41ArY8neUz8L_AQJ-o-tRI5MCjrMQ-XBN3k=h300',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>Continente - Viseu</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 25</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: 35 minutos</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://www.lidl.pt/bundles/retail/images/meta/og_default_600_600.png',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>Lidl - Tondela</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 0</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: Nenhum</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://lh3.googleusercontent.com/proxy/6JpIMa34zbnrmcSpMlx1fiQA1IKRgSBU34MEnMIERAqeWZQW0p6IbUXEh8UCdFYxfCksdMbU-rTFETVua0yuDfRXNGjB',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>Joaninha - Campo de Besteiros</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 2</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: 3 minutos</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'data:image/png;base64,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',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>Decathlon - Viseu</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 10</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: 25 minutos</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://img2.gratispng.com/20180904/vkz/kisspng-vodafone-new-zealand-logo-company-mobile-phones-yeni-voda-logo-faturasz-hattan-faturalya-gei-5b8f4451bc1b10.6064683315361157937705.jpg',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>Vodafone - Palacio do Gelo Viseu</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 0</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: Nenhum</Text>
                </View>
            </View>
            <View style={style.store}>
                <Image source={{
                    uri: 'https://lh3.googleusercontent.com/proxy/k_Nqqcd8Kc-7BvyHR4QVx_kpmERnTLISEyXJPtM2NFVzogmzOdQDydgoJutz9rVdjwSi6p9Y2w6Rau2HGCkwlP8WNOo6A8ECp89lSRS06mONM3hSkg',
                }} style={style.imgstore} />
                <View style={style.infoData}>
                    <Text style={style.storeName}>MEO - Tondela</Text>
                    <Text style={style.storePeWait}>Pessoas a espera: 7</Text>
                    <Text style={style.storeWaitTime}>Tempo medio de espera: 30 minutos</Text>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    mainBox:{
        flex: 1,
    },
    store: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: 10,
        width: '97%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    storePeWait: {
        color: '#aaa'
    },
    storeWaitTime: {
        color: '#aaa'
    },
    infoData:{
        flexDirection: 'column',
        marginLeft: 3
    },
    searchBox: {
        alignContent: 'center',
        alignItems: 'center',
    },
    imgstore: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginLeft: 2,
        borderRadius: 100
    },
    searchInput: {
        backgroundColor: '#FFF',
        width: '97%',
        borderColor: '#CCC',
        borderWidth: 1,
        marginTop: 5,
        borderRadius: 5,
        padding: 10
    }
});