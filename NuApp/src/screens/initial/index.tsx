import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import logo from "../../assets/logo.png";
export function HomeOne() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={logo} style={styles.logo} />
        </View>

        <Text style={styles.title}>Bem-vindo a Nubank </Text>

        <TextInput
          style={styles.input}
          placeholder="Usuário"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.buttonContainer}>
          <Button title="Cadastrar" onPress={() => {}} color="#6200EE" />
          <Button title="Login" onPress={() => {}} color="#03DAC6" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#820AD1",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "80%",
    alignItems: "center",
  },
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    color: "#FFF",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderColor: "#DDD",
    borderWidth: 1,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 15,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});
