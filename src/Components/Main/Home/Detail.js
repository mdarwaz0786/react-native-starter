import React, { useEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView, Dimensions, Pressable } from 'react-native';
import personImage from "../../../Assets/Images/frame2.jpg";
import chatIcon from "../../../Assets/Icons/chat.png";
import { Button } from 'react-native-paper';

const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  useEffect(() => {
    navigation.setOptions({
      headerTitle: item.title,
      headerTitleAlign: 'start',
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontSize: 16,
        fontWeight: '500',
      },
    });
  }, [navigation, item.title]);

  const screenHeight = Dimensions.get('window').height;

  const handleDone = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={item.source} style={[styles.image, { height: screenHeight * 0.33 }]} />

      <View style={styles.middleContainer}>
        <View style={styles.hostedBy}>
          <View style={styles.hostedByContainer}>
            <Text style={styles.hostedByText}>Hosted By</Text>
            <Image style={styles.hostedByImage} source={personImage} />
          </View>
          <Image style={styles.hostedByIcon} source={chatIcon} />
        </View>

        <View style={styles.horizontalLine} />

        <View style={styles.circleSection}>
          <View style={styles.circle}>
            <View style={styles.circleContainer}>
              <Text style={[styles.circleText, { backgroundColor: '#D9D9D9' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#8E3131' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#6E9368' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#FFFFFF' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#CC7208' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#F90B0B' }]}>+1</Text>
            </View>
            <View>
              <Text style={styles.circleBottomText}>Going</Text>
            </View>
          </View>

          <View style={styles.circle}>
            <View style={styles.circleContainer}>
              <Text style={[styles.circleText, { backgroundColor: '#D9D9D9' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#8E3131' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#6E9368' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#FFFFFF' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#CC7208' }]}></Text>
              <Text style={[styles.circleText, { backgroundColor: '#F90B0B', textAlign: "center" }]}>+7</Text>
            </View>
            <View>
              <Text style={styles.circleBottomText}>May Be Going</Text>
            </View>
          </View>

          <View>
            <Button style={styles.circleButton} labelStyle={styles.inviteButtonText}>
              Invite Friend
            </Button>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.headingContainer}>
          <Text style={styles.paraHeading}>Details</Text>
          <Text style={styles.paraHeading}>Photos</Text>
          <Text style={styles.paraHeading}>Facilities</Text>
        </View>

        <Text style={styles.paragraph}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum at venenatis nunc.
          Mauris fringilla auctor nulla, et faucibus justo dictum vel. Vivamus eget risus id purus
          facilisis commodo. Nulla facilisi. Sed nec semper libero. Sed et massa venenatis,
          tincidunt quam eu, facilisis mi. Phasellus nec sapien vel nulla dignissim suscipit.
          Proin id risus at velit varius blandit. Quisque vel nisi nulla. Etiam at ligula euismod,
          euismod nisl nec, porttitor sapien. Nunc convallis elit a nunc volutpat, vitae pharetra
          erat convallis.
        </Text>

        <Pressable style={styles.doneButton} onPress={handleDone}>
          <Text style={styles.doneButtonText}>Done</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 0,
  },
  image: {
    width: '100%',
    resizeMode: 'cover',
  },
  middleContainer: {
    backgroundColor: "#a63ed3",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    marginTop: -10,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
  },
  hostedBy: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  hostedByContainer: {
    flexDirection: "row",
    columnGap: 10,
  },
  hostedByText: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 25,
    letterSpacing: 0.5,
    color: "#fff",
  },
  hostedByImage: {
    width: 25,
    height: 25,
    borderRadius: 10,
  },
  hostedByIcon: {
    width: 25,
    height: 25,
  },
  horizontalLine: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    marginVertical: 15,
  },
  circleSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  circle: {
    alignItems: "center",
  },
  circleContainer: {
    flexDirection: 'row',
  },
  circleText: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginLeft: -10,
    border: "none",
    color: "#fff",
  },
  circleBottomText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "500",
    marginVertical: 2,
  },
  circleButton: {
    backgroundColor: '#fff',
  },
  inviteButtonText: {
    color: '#A63ED3',
    fontWeight: "500",
    fontSize: 12,
  },
  bottomContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#fff",
    marginTop: -15,
  },
  headingContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  paraHeading: {
    color: "#A63ED3",
    fontSize: 16,
    fontWeight: "500",
  },
  paragraph: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    paddingHorizontal: 20,
  },
  doneButton: {
    backgroundColor: '#A63ED3',
    padding: 6,
    borderRadius: 15,
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 120,
  },
  doneButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '400',
  },
});

export default Detail;
