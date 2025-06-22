import { View, Text, StyleSheet, ImageComponent } from "react-native";

// import { View01, View02, Text01, Text02, Image01, Image02, Image03, TextInput1, CuonVanBan, List1, List2, List3 } from "./Components";
// import { BasicView } from "./hinh_01";
// import { FlexBox, FlexBox2, FlexBox3, FlexBox4, FlexBox5 } from "./hinh_02_flexbox";
// import { CalculatorBMI } from "./hinh_03_TinhBMI";
// import { StopwatchApp } from "./hinh_04_StopwatchApp";
// import { Movie } from "./hinh_06_Movie";
import { DetailMovie } from "./hinh_07_DetailMovie";

// import { Movie } from "./Movie";

export default function Index() {
  return (
    <View style={{ flex: 1 }}>
      {<DetailMovie />}
    </View>

  );
}
