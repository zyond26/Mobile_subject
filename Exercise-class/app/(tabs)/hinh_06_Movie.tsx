/* ====================================================
 5. Movie - basic wweb
  ==================================================== */


import { Text, View, Image, StyleSheet, ScrollView } from "react-native";

export function Movie() {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2024%2F06%2Fnguoi-doi-va-sieu-nhan-anh-sang-cong-ly-52695-thumbnail.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman v SuperMan: Dawn of Justice (2016)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fbatman-136455.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman (1989)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHqW-1y4fpu8uWmN3c1wxdX7wtwkCCiCi5g&s' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Return (1992)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2F64fd91bcf778c87f16eb051ee429db7f.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Forever (1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2Fb110a11148ad60b8000878b859f023e4.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman & Robin (1997)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://i.ebayimg.com/images/g/Ya0AAOSw9j1mkRoD/s-l1200.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman: The Animated Series (1992 - 1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2024%2F06%2Fnguoi-doi-va-sieu-nhan-anh-sang-cong-ly-52695-thumbnail.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman v SuperMan: Dawn of Justice (2016)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fbatman-136455.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman (1989)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHqW-1y4fpu8uWmN3c1wxdX7wtwkCCiCi5g&s' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Return (1992)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2F64fd91bcf778c87f16eb051ee429db7f.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Forever (1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2Fb110a11148ad60b8000878b859f023e4.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman & Robin (1997)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://i.ebayimg.com/images/g/Ya0AAOSw9j1mkRoD/s-l1200.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman: The Animated Series (1992 - 1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2024%2F06%2Fnguoi-doi-va-sieu-nhan-anh-sang-cong-ly-52695-thumbnail.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman v SuperMan: Dawn of Justice (2016)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fphimmoi11.net%2Fwp-content%2Fuploads%2F2023%2F07%2Fbatman-136455.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman (1989)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrHqW-1y4fpu8uWmN3c1wxdX7wtwkCCiCi5g&s' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Return (1992)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2F64fd91bcf778c87f16eb051ee429db7f.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman Forever (1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://vimages.coccoc.com/vimage?ns=movies&url=https%3A%2F%2Fstatic.nutscdn.com%2Fvimg%2F300-0%2Fb110a11148ad60b8000878b859f023e4.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman & Robin (1997)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
            <View style={styles.item}>
                <Image source={{ uri: 'https://i.ebayimg.com/images/g/Ya0AAOSw9j1mkRoD/s-l1200.jpg' }} style={styles.image} />
                <View style={styles.textContainer}>
                    <Text style={styles.title}>Batman: The Animated Series (1992 - 1995)</Text>
                </View>
                <Text style={styles.arrow}>{'>'}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        backgroundColor: '#f9f9f9',
    },
    image: {
        width: 90,
        height: 125,
        borderRadius: 4,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: '500',
    },
    arrow: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#555',
    },
});
