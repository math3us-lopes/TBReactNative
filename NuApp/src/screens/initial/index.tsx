import React, { useState } from "react";
import { styles } from "./styles";
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
