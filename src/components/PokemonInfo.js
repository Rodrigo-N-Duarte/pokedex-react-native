import {Box, Image, Text} from "native-base";
import {Dimensions, StyleSheet} from "react-native";
import { Icon } from 'react-native-elements'

export default function PokemonInfo({pokemon}) {
    const width = Dimensions.width
    const height = Dimensions.height
    return (
        <Box mt={10} width={width} height="100%" bg="gray.100" borderRadius={20} flexDir="column">
            <Box safeAreaX={5} zIndex={1}>
                <Text mt={10} style={styles.pokemonName}>{pokemon.name} #{pokemon.id}</Text>
                <Image source={{
                    uri: pokemon.sprites.front_default
                }} alt="Alternate Text" size="2xl" marginX={100} style={styles.imgPokemon}/>
            </Box>
            <Box mt={200} height="100%" bg="white" width={width} paddingX={5} pt={20} borderRadius={20}>
                <Text fontWeight="bold" fontSize={20}>Sobre: </Text>
                <Box flexDir="row">
                    <Icon name='apps' style={styles.icon}></Icon>
                    <Text style={styles.pokemonDescription}>Tipo: {pokemon.types[0].type.name}</Text>
                </Box>
                <Box flexDir="row">
                    <Icon name='tag' style={styles.icon}></Icon>
                    <Text style={styles.pokemonDescription}>
                        Número na pokedéx: {pokemon.id}</Text>
                </Box>
                <Box flexDir="row">
                    <Icon name='send' style={styles.icon}></Icon>
                    <Text style={styles.pokemonDescription}>Primeira aparição: {pokemon.version_group.name}</Text>
                </Box>
                <Text style={styles.pokemonDescription}>Versão shiny:</Text>
                <Image source={{
                    uri: pokemon.sprites.front_shiny
                }} alt="Alternate Text" size="xl"/>
            </Box>
        </Box>
    )
}

const styles = StyleSheet.create({
    pokemonName: {
        fontSize: 30,
        paddingTop: 10,
        textTransform: "capitalize",
        fontWeight: "bold"
    },
    icon: {
        marginTop: 12,
        marginRight: 10
    },
    pokemonDescription: {
      fontSize: 18,
        marginTop: 12,
        textTransform: "capitalize"
    },
    imgPokemon: {
        marginTop: 100,
        marginLeft: '20%',
        zIndex: 1,
        position: "absolute"
    }
})