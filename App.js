import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useState} from "react";
import { NativeBaseProvider, Box, VStack, Divider, ScrollView } from "native-base";
import FormPokemon from "./src/components/FormPokemon";
import PokemonInfo from "./src/components/PokemonInfo";
export default function App() {
    const [pokemon, setPokemon] = useState()
    const findPokemon = async (pokemon) => {
        const p = pokemon.toString().toLowerCase()
        fetch(`https://pokeapi.co/api/v2/pokemon-form/${p}/`)
            .then(async (res) => {
                setPokemon(await res.json())
            })
    }
    const clear = () => {
        setPokemon()
    }
  return (
      <NativeBaseProvider>
        <Box safeArea safeAreaTop={20}>
          <ScrollView>
              <FormPokemon findPokemon={findPokemon} clear={clear}></FormPokemon>
              {pokemon && <PokemonInfo pokemon={pokemon}></PokemonInfo>}
          </ScrollView>
        </Box>
      </NativeBaseProvider>
  );
}

