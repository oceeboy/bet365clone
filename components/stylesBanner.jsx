import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  bannerContainer: {
    width: "100%",
    height: 190,
    backgroundColor: "#282828",
    flexDirection: "row",
    position: "relative",
  },
  rightContent: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    width: "100%",
    // backgroundColor: "black",
    flexDirection: "column",
    gap: 10,

    height: "100%",
    zIndex: 1,
  },
  categoryNameContainer: {
    backgroundColor: "#2EC194",
    borderRadius: 2,
    justifyContent: "center",
    height: 17,
    paddingHorizontal: 2,
    width: "30%",
    alignItems: "center",
  },
  categoryName: {
    // textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  categoryBodyContainer: {
    width: "55%",
  },
  categoryBodyText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  categoryButtonContainer: {
    borderColor: "#279474",
    width: 100,
    height: 25,
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryButtonText: {
    fontSize: 12,
    color: "#26FEBD",
    textAlign: "center",
    fontWeight: "bold",
  },
  categoryTermsContainer: {
    paddingVertical: 1,
  },
  categoryTermsText: { color: "#9D9D9D", fontSize: 10 },
  //   left content
  leftContent: {
    backgroundColor: "#282828",
    flexDirection: "column",
    height: "100%",
    position: "absolute",
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "flex-start",
  },
  bannerImage: { width: 250, height: 118 },

  //    text head and container
  categoryNameContainer1: {
    width: "50%",
  },
  categoryName1: {
    fontSize: 15,
    color: "#23FFBA",
    fontWeight: "bold",
  },
  categoryNameContainer2: {
    backgroundColor: "#2EC194",
    borderRadius: 2,
    justifyContent: "center",
    height: 17,
    paddingHorizontal: 2,
    width: "20%",
    alignItems: "center",
  },
  categoryName2: {
    // textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  categoryNameContainer3: {
    backgroundColor: "#2EC194",
    borderRadius: 2,
    justifyContent: "center",
    height: 17,
    paddingHorizontal: 2,
    width: "35%",
    alignContent: "flex-end",
  },
  categoryName3: {
    // textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  categoryNameContainer4: {
    backgroundColor: "#2EC194",
    borderRadius: 2,
    justifyContent: "center",
    height: 17,
    paddingHorizontal: 2,
    width: "30%",
    alignItems: "center",
  },
  categoryName4: {
    // textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
  categoryNameContainer5: {
    backgroundColor: "#2EC194",
    borderRadius: 2,
    justifyContent: "center",
    height: 17,
    paddingHorizontal: 2,
    width: "35%",
    alignItems: "center",
  },
  categoryName5: {
    // textAlign: "center",
    fontSize: 10,
    fontWeight: "bold",
  },
});

export default styles;
