import { router } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput , View} from "react-native";

export default function Square(){
    // พท.สี่เหลี่ยม = กว้าง * ยาว
    // output = input * input
    //    50  =  5 * 10
    const [F, setF] = useState(0) // wwidth = 20, selwidth(20)
    const [C, setC] = useState(0)
    

    function calC(){
        let result =  5/9 * (F - 32)
        setC(result)
    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.mainTite}>ฟาเรนไฮต์เป็นเซลเซียส</Text>
            {/*<Button title="กลับหน้าแรก" /> */}

            <Text>F {F} C {C} </Text>

            <TextInput 
                style={styles.TextInput} 
                placeholder="กรอกความกว้าง" 
                value={F.toString()}
                onChangeText={(w) => setF(Number(w))}
            />

            <Button title="คำนวณ" onPress={() => calC()}/>
                <Button title="ไปหน้าที่ 2" onPress={() => router.navigate('/square')}/>
                <Button title="กลับหน้าหลัก" onPress={() => router.navigate('/')}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1 ,
        backgroundColor:"skyblue",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    mainTite:{
        fontSize:20,
        fontWeight:"700"
    },
    TextInput:{
        borderWidth: 1,
        width: "80%",
        borderColor:"green"
    }
})