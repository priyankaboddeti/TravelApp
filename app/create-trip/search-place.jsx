import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '@/constants/Colors'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import 'react-native-get-random-values';
import { CreateTripContext } from '../../context/CreateTripContext'


export default function SearchPlace() {
    const router=useRouter()
    const {tripData,setTripData}=useContext(CreateTripContext)
    const navigation = useNavigation()

    useEffect(() => {
      console.log(tripData);
      
    }, [tripData])
    

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search',
            headerBackTitleVisible: false,
            // headerTintColor:Colors.PRIMARY,
            // headerTitleAlign:'left'
        })
    }, [])

    return (
        <View style={{ padding: 20, paddingTop: 120, backgroundColor: Colors.WHITE, height: "100%" }}>
            <GooglePlacesAutocomplete
                placeholder='Search Place'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setTripData({
                        locationinfo:{
                            name:data.description,
                            coordinates:details?.geometry.location,
                            photoRef:details?.photos[0]?.photo_reference,
                            url:details?.url
                        }
                    });
                    router.push('/create-trip/select-traveler')
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: {
                        borderWidth:1,
                        borderRadius:5,
                        marginTop:25,
                      },
                }}
            />
        </View>
    )
}