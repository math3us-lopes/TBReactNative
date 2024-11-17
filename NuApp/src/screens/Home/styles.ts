import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#820AD1",
      justifyContent: "center",
    },
    content: {
      paddingHorizontal: 30,
      paddingLeft: 20,
    },
    header: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 40,
    },
  
    card: {
      width: "100%",
      height: 190,
      backgroundColor: "#9500F6",
      borderRadius: 21,
      elevation: 5,
      marginBottom: 20,
      padding: 20,
      justifyContent: "space-between",
    },
    cardDetails: {
      width: "100%",
      height: 120,
      backgroundColor: "#9500F6",
      borderRadius: 21,
      elevation: 5,
      padding: 20,
      justifyContent: "space-between",
    },
    cardHeader: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cardText: {
      color: "#fff",
      fontSize: 24,
      lineHeight: 36,
      fontWeight: "600",
    },
    cardDetailsHeader: {
      justifyContent: "space-between",
      flexDirection: "row",
    },
    cardDetailsText: {
      color: "#fff",
      fontSize: 34,
      lineHeight: 36,
      fontWeight: "600",
    },
    cardDetailsHeaderText: {
      color: "#fff",
    },
    footer: {
      padding: 30,
    },
    footerText: {
      marginHorizontal: 20,
      paddingBottom: 30,
      color: "#fff",
      fontWeight: "600",
      fontSize: 16,
    },
    footerCard: {
      width: 100,
      height: 127,
      backgroundColor: "#9500F6",
      elevation: 5,
      borderRadius: 21,
      marginLeft: 10,
      padding: 20,
      justifyContent: "space-between",
    },
    footerCardText: {
      color: "#fff",
      fontSize: 12,
      fontWeight: "600",
      lineHeight: 18,
    },
    footerContentScrollview: {
      height: 400,
    },
  });
  