import React from 'react';
import { View, TextInput, StyleSheet, Image, Text, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const data = [
    {
        id: '1',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTEn5Lq-j446x5GFbbGOHIncDf1ALdPUWYIcLkI_d-Tghd0Mdwk&usqp=CAU',
        storeName: 'SportZone - Tondela',
        storePeWait: 'Pessoas a espera: 4',
        storeWaitTime: 'Tempo medio de espera: 5 minutos'
    },
    {
        id: '2',
        image: 'https://lh6.ggpht.com/0wBX0Ratmce5flh5OoUv8qfaEv-shuWm41ArY8neUz8L_AQJ-o-tRI5MCjrMQ-XBN3k=h300',
        storeName: 'Continente - Viseu',
        storePeWait: 'Pessoas a espera: 25',
        storeWaitTime: 'Tempo medio de espera: 35 minutos'
    },
    {
        id: '3',
        image: 'https://www.lidl.pt/bundles/retail/images/meta/og_default_600_600.png',
        storeName: 'Lidl - Tondela',
        storePeWait: 'Pessoas a espera: 0',
        storeWaitTime: 'Tempo medio de espera: Nenhum'
    },
    {
        id: '4',
        image: 'https://lh3.googleusercontent.com/proxy/6JpIMa34zbnrmcSpMlx1fiQA1IKRgSBU34MEnMIERAqeWZQW0p6IbUXEh8UCdFYxfCksdMbU-rTFETVua0yuDfRXNGjB',
        storeName: 'Joaninha - Campo de Besteiros',
        storePeWait: 'Pessoas a espera: 2',
        storeWaitTime: 'Tempo medio de espera: 3 minutos'
    },
    {
        id: '5',
        image: 'data:image/png;base64,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',
        storeName: 'Decathlon - Viseu',
        storePeWait: 'Pessoas a espera: 10',
        storeWaitTime: 'Tempo medio de espera: 25 minutos'   
    },
    {
        id: '6',
        image: 'https://img2.gratispng.com/20180904/vkz/kisspng-vodafone-new-zealand-logo-company-mobile-phones-yeni-voda-logo-faturasz-hattan-faturalya-gei-5b8f4451bc1b10.6064683315361157937705.jpg',
        storeName: 'Vodafone - Palacio do Gelo Viseu',
        storePeWait: 'Pessoas a espera: 0',
        storeWaitTime: 'Tempo medio de espera: Nenhum'    
    },
    {
        id: '7',
        image: 'https://lh3.googleusercontent.com/proxy/k_Nqqcd8Kc-7BvyHR4QVx_kpmERnTLISEyXJPtM2NFVzogmzOdQDydgoJutz9rVdjwSi6p9Y2w6Rau2HGCkwlP8WNOo6A8ECp89lSRS06mONM3hSkg',
        storeName: 'MEO - Tondela',
        storePeWait: 'Pessoas a espera: 7',
        storeWaitTime: 'Tempo medio de espera: 30 minutos'  
    },
    {
        id: '8',
        image: 'https://lh3.googleusercontent.com/proxy/k_Nqqcd8Kc-7BvyHR4QVx_kpmERnTLISEyXJPtM2NFVzogmzOdQDydgoJutz9rVdjwSi6p9Y2w6Rau2HGCkwlP8WNOo6A8ECp89lSRS06mONM3hSkg',
        storeName: 'MEO - Tondela',
        storePeWait: 'Pessoas a espera: 7',
        storeWaitTime: 'Tempo medio de espera: 30 minutos'  
    },
    {
        id: '9',
        image: 'https://lh3.googleusercontent.com/proxy/k_Nqqcd8Kc-7BvyHR4QVx_kpmERnTLISEyXJPtM2NFVzogmzOdQDydgoJutz9rVdjwSi6p9Y2w6Rau2HGCkwlP8WNOo6A8ECp89lSRS06mONM3hSkg',
        storeName: 'MEO - Tondela',
        storePeWait: 'Pessoas a espera: 7',
        storeWaitTime: 'Tempo medio de espera: 30 minutos'  
    },
    {
        id: '10',
        image: 'https://lh3.googleusercontent.com/proxy/k_Nqqcd8Kc-7BvyHR4QVx_kpmERnTLISEyXJPtM2NFVzogmzOdQDydgoJutz9rVdjwSi6p9Y2w6Rau2HGCkwlP8WNOo6A8ECp89lSRS06mONM3hSkg',
        storeName: 'MEO - Tondela',
        storePeWait: 'Pessoas a espera: 7',
        storeWaitTime: 'Tempo medio de espera: 30 minutos',
        isLast: false
    }
];

export default function Region(){
    return(
        <View style={style.mainBox}>
            <View style={style.searchBox}>
                <TextInput style={style.searchInput} placeholder="Pesquise um estabelecimento" maxLength={20} />
                <FontAwesomeIcon size={22} style={style.searchImg} icon={ faSearch } />
            </View>
            <FlatList
                data={data}
                style={style.list}
                keyExtractor={store => store.id}
                renderItem={({ item, index }) => (
                    <View style={index == 0 ? style.storeFirst : style.store}>
                        { item.isLast ? <Text style={style.endList}>Não temos mais nada a apresentar!</Text> : <><Image source={{
                            uri: item.image,
                        }} style={style.imgstore} />
                        <View style={style.infoData}>
                            <Text style={style.storeName}>{item.storeName}</Text>
                            <Text style={style.storePeWait}>{item.storePeWait}</Text>
                            <Text style={style.storeWaitTime}>{item.storeWaitTime}</Text>
                        </View></> }
                    </View>
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    mainBox:{
        flex: 1,
    },
    list: {
        marginTop: 5
    },
    searchImg: {
        marginTop: 18,
        position: 'absolute',
        right: 16,
        color: '#ccc',
    },
    endList: {
        width: '100%',
        textAlign: 'center'
    },
    store: {
        marginTop: 10,
        backgroundColor: '#FFF',
        padding: 10,
        width: '97%',
        alignSelf: 'center',
        flexDirection: 'row',
    },
    storeFirst: {
        marginTop: 2,
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