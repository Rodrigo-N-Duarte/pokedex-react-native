import {Box, Input, Button} from "native-base";
import {Keyboard} from "react-native";
import {useState} from "react";
export default function FormPokemon({findPokemon, clear}) {
    const [inputPokemon, setInputPokemon] = useState()
    const clickFindPokemon = () => {
        if (!inputPokemon) {
            return
        }
        findPokemon(inputPokemon)
        Keyboard.dismiss()
        setInputPokemon()
    }
    return (
        <Box>
            <Box flexDir="row" justifyContent="space-around">
                <Input w="200" value={inputPokemon} onChangeText={setInputPokemon} placeholder="Nome"></Input>
                <Button onPress={clickFindPokemon}>Buscar pokémon</Button>
            </Box>
            <Box flexDir="row" justifyContent="flex-end">
                <Button onPress={clear} bg="error.400" mt={5} marginRight={5} width={100}>Limpar</Button>
            </Box>
        </Box>
    )
}