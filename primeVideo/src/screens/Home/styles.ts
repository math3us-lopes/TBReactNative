import { StyleSheet } from "react-native";


 export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#232F3E",
      alignItems: "flex-start",
    },
    header: {
      width: "100%",
      paddingTop: 80,
      alignItems: "center",
      justifyContent: "center",
    },
    amazonLogoImg: {
      marginTop: -32,
      marginLeft: 30,
    },
    category: {
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-evenly",
      marginTop: 30,
      marginBottom: 15,
    },
    categoryText: {
      fontSize: 14,
      fontWeight: "700",
      color: "#fff",
    },
    contentList: {
      paddingLeft: 18,
      paddingRight: 30,
    },
    contentMovies: {},
    movieImageThumbnail: {
      width: "100%",
      alignItems: "center",
    },
    movieText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "700",
      padding: 15,
    },
  });
  