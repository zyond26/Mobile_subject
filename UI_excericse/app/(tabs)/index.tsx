import { View } from "react-native";
import { StopwatchApp } from "./UI";

export default function Index() {
  return (
    <>
      <View style={{ flex: 1 }}>
        {/* {<Btap1 />} */}
        {/* {
          <>
            <FlexBox />
            <FlexBox2 />
            <FlexBox3 />
            <FlexBox4 />
            <FlexBox5 />
          </> */}
        {/* {<Caculator />} */}
        {<StopwatchApp />}
      </View>
    </>
  )
}