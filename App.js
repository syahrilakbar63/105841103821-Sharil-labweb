import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import ImageSlider from 'react-native-image-slider'

class App extends Component {
    render() {
        const images = [
            'https://simakad.unismuh.ac.id/upload/mahasiswa/105841103821.jpg',
            'https://simakad.unismuh.ac.id/upload/mahasiswa/105841103621.jpg',
            'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105321.jpg',
            'https://simakad.unismuh.ac.id/upload/mahasiswa/105841105721.jpg',
            'https://simakad.unismuh.ac.id/upload/mahasiswa/105841103721.jpg',
        ];

        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Manusia Tamvan</Text>
                </View>
                <ImageSlider
                    loopBothSides
                    autoPlayWithInterval={3000}
                    images={images}
                    customSlide={({ index, item, style }) => (
                        <View key={index} style={[style, styles.customSlide]}>
                            <Image source={{ uri: item }} style={styles.customImage} />
                        </View>
                    )}
                    customButtons={(position, move) => (
                        <View style={styles.buttons}>
                            {images.map((_, index) => {
                                return (
                                    <TouchableOpacity
                                        key={index}
                                        onPress={() => move(index)}
                                        style={[
                                            styles.button,
                                            position === index && styles.buttonSelected
                                        ]}
                                    >
                                        <Text style={styles.buttonText}>
                                            {index + 1}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </View>
                    )}
                />
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Produksi by UNISMUH</Text>
                </View>
            </SafeAreaView>
        );
    }
}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f0',
    },
    header: {
        padding: 20,
        backgroundColor: '#6200ea',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
    },
    customSlide: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderRadius: 10,
        marginVertical: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    customImage: {
        width: 300,
        height: 300,
        borderRadius: 10,
    },
    buttons: {
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    button: {
        margin: 3,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSelected: {
        backgroundColor: '#6200ea',
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
    },
    footer: {
        padding: 20,
        backgroundColor: '#6200ea',
        alignItems: 'center',
    },
    footerText: {
        fontSize: 16,
        color: 'white',
    },
});
