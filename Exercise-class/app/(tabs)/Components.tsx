// import { View, Text, StyleSheet, Image, TextInput, Button, TouchableOpacity, ScrollView, FlatList } from "react-native";
// import React, { useState } from 'react';

// /* ====================================================
//   1. CÁC COMPONENT CƠ BẢN: VIEW, TEXT, IMAGE
//   ==================================================== */

// /**
//  * View01: Demo căn giữa màn hình với flexbox
//  * - flex: 1 → Chiếm toàn bộ không gian cha
//  * - justifyContent + alignItems → Căn giữa cả hai chiều
//  */
// export function View01() {
//     return (
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//             <View style={styles.box}>
//                 <Text style={styles.text}>Xin Chào</Text>
//             </View>
//         </View>
//     )
// }

// /**
//  * View02: Demo flexDirection row với tỉ lệ width linh hoạt
//  * - flex:1 (xanh) vs flex:2 (đỏ) → Tỉ lệ chiều rộng 1:2
//  */
// export function View02() {
//     return (
//         <View style={{ height: 100, flexDirection: 'row', backgroundColor: '#0f0' }}>
//             <View style={{ backgroundColor: 'blue', flex: 1 }}></View>
//             <View style={{ backgroundColor: 'red', flex: 2 }}></View>
//             <Text>Hello, World</Text>
//         </View>
//     )
// }

// /**
//  * Text01: Demo Text với nhiều thuộc tính nâng cao
//  * - selectable: Cho phép bôi đen văn bản
//  * - selectionColor: Màu highlight khi chọn (#f0f = hồng)
//  */
// export function Text01() {
//     return (
//         <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: 10, width: 300 }}>
//             <Text style={{ fontSize: 25, color: 'red', fontWeight: 'bold', textAlign: 'center' }}
//                 selectable={true}
//                 selectionColor={'#f0f'}>
//                 Hello, Welcome to my Website
//             </Text>
//         </View>
//     );
// }

// /**
//  * Text02: Sử dụng style từ StyleSheet
//  */
// export function Text02() {
//     return (
//         <View>
//             <Text style={styles.chu}>Hello, World</Text>
//         </View>
//     );
// }

// /**
//  * Image01: Load ảnh từ URL với cache control
//  * - cache: 'reload' → Luôn tải ảnh mới, bỏ qua cache
//  * - blurRadius: Hiệu ứng làm mờ (5px)
//  */
// export function Image01() {
//     return (
//         <View>
//             <Image source={{ uri: 'https://example.com/image.jpg', cache: 'reload' }}
//                 style={{ width: 500, height: 200 }}
//                 resizeMode="cover"
//                 blurRadius={5} />
//         </View>
//     );
// }

// /**
//  * Image02: Load ảnh từ local assets
//  */
// export function Image02() {
//     return (
//         <View>
//             <Image source={require('../assets/images/react-logo.png')}
//                 style={{ width: 300, height: 300 }} />
//         </View>
//     );
// }

// /**
//  * Image03: Demo resizeMode="stretch" → Ảnh bị kéo giãn
//  */
// export function Image03() {
//     return (
//         <View>
//             <Image source={{ uri: 'https://example.com/image.jpg' }}
//                 style={{ width: 200, height: 200 }}
//                 resizeMode="stretch" />
//         </View>
//     );
// }
// // *****************************************************************
// // -------------------------------- UI ------------------------------
// // *****************************************************************

// /**
//  * TextInput1: Demo đầy đủ các props của TextInput
//  * - multiline: Cho phép nhập nhiều dòng
//  * - autoCapitalize: Tự động viết hoa đầu từ
//  * - clearButtonMode: Hiện nút xóa khi nhập
//  */
// export function TextInput1() {
//     const [text, setText] = useState('Hello World');
//     return (
//         <View>
//             <TextInput
//                 placeholder="Nhập tên của bạn"
//                 style={{ borderColor: 'gray', borderWidth: 2, height: 100, backgroundColor: '#ccc' }}
//                 value={text}
//                 onChangeText={setText}
//                 multiline={true}
//                 autoCapitalize="words"
//                 clearButtonMode="while-editing"
//             />
//         </View>
//     );
// }

// /* ====================================================
//   4. SCROLLVIEW & FLATLIST
//   ==================================================== */

// /**
//  * CuonVanBan: Demo ScrollView với nội dung dài
//  * - showsVerticalScrollIndicator: Ẩn thanh cuộn dọc
//  */
// export const CuonVanBan = () => {
//     return (
//         <ScrollView style={{ backgroundColor: 'pink' }} showsVerticalScrollIndicator={false}>
//             <Text style={{ fontSize: 50 }}> Nhà giáo được xếp lương cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp
//                 Sáng 16/6, Quốc hội thông qua Luật Nhà giáo với nhiều quy định ưu đãi về lương, phụ cấp, nhà ở và trao quyền chủ động tuyển dụng cho ngành giáo dục.

//                 Theo đó, nhà giáo được xếp lương cao nhất trong hệ thống thang bậc lương hành chính sự nghiệp. Họ cũng được hưởng phụ cấp ưu đãi nghề và các khoản phụ cấp khác tùy theo tính chất công việc và điều kiện vùng miền, theo quy định pháp luật.

//                 Diện được hưởng chính sách lương và phụ cấp cao hơn gồm: nhà giáo cấp học mầm non; công tác tại vùng đồng bào dân tộc thiểu số, miền núi, biên giới, hải đảo; vùng có điều kiện đặc biệt khó khăn; dạy tại trường chuyên biệt; thực hiện giáo dục hòa nhập; hoặc giảng dạy trong một số ngành, nghề đặc thù.

//                 Nhà giáo làm việc ở ngành, nghề có chế độ đặc thù sẽ được hưởng mức cao nhất trong các chính sách đang áp dụng, nếu các chế độ trùng nhau.

//                 Giải trình trước Quốc hội, Chủ nhiệm Ủy ban Văn hóa - Xã hội Nguyễn Đắc Vinh cho biết việc quy định lương, phụ cấp cao nhất cho nhà giáo là để thể chế hóa chủ trương của Đảng về chính sách đối với giáo viên. Ông nhấn mạnh điều này không trái với tinh thần cải cách chính sách tiền lương. Với nhà giáo làm việc ở khu vực ngoài công lập, việc trả lương thực hiện theo nguyên tắc thỏa thuận, căn cứ pháp luật lao động.</Text>
//         </ScrollView>
//     );
// }

// // Dữ liệu mẫu cho các List
// const products = [
//     { id: '1', name: 'Sữa', image: 'https://example.com/sua.jpg' },
//     { id: '2', name: 'Bánh', image: 'https://example.com/banh.jpg' },
// ];

// /**
//  * List1: Render list bằng map() thông thường
//  * - Không tối ưu với danh sách lớn
//  */
// export function List1() {
//     return (
//         <ScrollView>
//             {products.map((item) => (
//                 <View key={item.id} style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
//                     <Text>{item.name}</Text>
//                     <Image source={{ uri: item.image }} style={{ width: 300, height: 200, borderRadius: 12 }} />
//                 </View>
//             ))}
//         </ScrollView>
//     );
// }

// /**
//  * List2: Render bằng FlatList (tối ưu hiệu năng)
//  * - keyExtractor: Chỉ định trường id làm key
//  * - renderItem: Cách hiển thị mỗi item
//  */
// export function List2() {
//     return (
//         <FlatList
//             data={products}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 30 }}>
//                     <Text>{item.name}</Text>
//                     <Image source={{ uri: item.image }} style={{ width: 300, height: 200, borderRadius: 12 }} />
//                 </View>
//             )}
//         />
//     );
// }

// /**
//  * List3: FlatList với layout 2 cột (numColumns)
//  */
// export function List3() {
//     return (
//         <FlatList
//             data={products}
//             keyExtractor={(item) => item.id}
//             renderItem={({ item }) => (
//                 <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
//                     <Text>{item.name}</Text>
//                     <Image source={{ uri: item.image }} style={{ width: 150, height: 150, borderRadius: 12 }} />
//                 </View>
//             )}
//             numColumns={2}
//         />
//     );
// }

// /* ====================================================
//   STYLE SHEET - Tái sử dụng cho toàn bộ component
//   ==================================================== */
// const styles = StyleSheet.create({
//     box: {
//         backgroundColor: '#007aff',
//         padding: 15,
//         borderRadius: 10
//     },
//     text: {
//         color: '#fff'
//     },
//     chu: {
//         fontSize: 20,
//         color: 'red',
//         fontWeight: 'bold',
//         textAlign: 'center'
//     },
//     vien: {
//         borderWidth: 3,
//         borderColor: '#000',
//         padding: 10,
//         margin: 10,
//         borderRadius: 25,
//         backgroundColor: '#ccc'
//     },
//     border: {
//         borderWidth: 1,
//         borderColor: '#000',
//         padding: 10,
//         margin: 10
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#000',
//         padding: 16,
//         margin: 10
//     },
//     label: {
//         marginRight: 100,
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',
//         marginLeft: 10,
//         marginTop: 10
//     },
//     result: {
//         textAlign: 'center',
//         fontSize: 20,
//         fontWeight: 'bold',
//         color: '#000',
//         marginTop: 10,
//         marginBottom: 10
//     },
// });

import React from "react";
import { View, Button, Alert, Text, TouchableOpacity, TouchableHighlight, Pressable, Modal } from "react-native";
// export function Button1() {
//     return (
//         <View>
//             <Button
//                 title='click me'
//                 onPress={() => Alert.alert('click')}
//                 color={'red'}
//                 disabled={true}
//             ></Button>
//         </View>
//     )
// }
// export function TouchableOpacity01() {
//     return (
//         <View>
//             <TouchableOpacity
//                 style={{ margin: 66 }}
//                 delayLongPress={4000}
//                 onPress={() => console.log('hihi')}
//                 onLongPress={() => console.log('long check')}
//                 onPressIn={() => console.log('click in')}
//                 onPressOut={() => console.log('click out')}
//                 activeOpacity={0.5} // xét độ mờ của view; default :0.2
//                 hitSlop={{ bottom: 50 }}  // mở rộng vùng chạm 


//             >
//                 <Text style={{ color: 'black', fontSize: 26, backgroundColor: 'red', textAlign: 'center', padding: 26, fontWeight: 'bold', borderRadius: 25, margin: 26 }}
//                 >
//                     Click nhaaaa
//                 </Text>

//             </TouchableOpacity>
//         </View>
//     )

// }

// export function TouchableHighlight01() {
//     return (
//         <View>
//             <TouchableHighlight
//                 style={{ margin: 66, backgroundColor: 'green', padding: 26 }}
//                 delayLongPress={4000}
//                 onPress={() => console.log('hihi')}
//                 onLongPress={() => console.log('long highlight')}
//                 onPressIn={() => console.log('click in highlight')}
//                 onPressOut={() => console.log('click out highlight')}
//                 // activeOpacity={0.1} // xét độ mờ của view; default :0.2
//                 hitSlop={{ bottom: 50 }}  // mở rộng vùng chạm 
//                 underlayColor={'blue'}
//                 onShowUnderlay={() => console.log('Show underlay')}
//                 onHideUnderlay={() => console.log('ngonnnn')}
//             >

//                 <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Highlight</Text>
//             </TouchableHighlight>
//         </View>
//     )
// }

// export function Pressable01() {
//     return (
//         <View>
//             <Pressable

//                 style={({ pressed }) => ({ margin: 0, padding: 26 })}
//                 delayLongPress={4000}
//                 onPress={() => console.log('checkk')}
//                 onLongPress={() => console.log('long checkvar')}
//                 onPressIn={() => console.log('press varrrr in')}
//                 onPressOut={() => console.log('pres varrrr out')}
//                 // activeOpacity={0.1} // xét độ mờ của view; default :0.2
//                 // hitSlop={{ bottom: 50 }}  // mở rộng vùng chạm
//                 unstable_pressDelay={2000}
//                 pressRetentionOffset={150}
//             >
//                 {({ pressed }) => (<Text style={{ textAlign: 'center', fontWeight: 'bold', backgroundColor: 'yellow', padding: 26, margin: 20, borderRadius: 26, color: pressed ? 'black' : 'green' }}>{pressed ? 'press' : 'Da nhan nhaaa'}</Text>)}
//             </Pressable>
//         </View >
//     )
// }

export function Modal01() {
    const [open, setOpen] = React.useState(false);
    return (
        <>
            <Button title='Sign in' onPress={() => setOpen(true)}></Button>
            <Modal
                visible={open}
                style={{ margin: 100 }}
                animationType="slide"
                backdropColor={'pink'}
                //onDismiss={() => Alert.alert('closed')}
                transparent={false}
                onOrientationChange={() => Alert.alert('changeeee')}
                onRequestClose={() => Alert.alert('closeddddd')}
                presentationStyle='pageSheet'
                onShow={() => Alert.alert('openeddd')}
            >

                <View style={{ margin: 50 }}>
                    <Text>Sign in</Text>
                    <Button title='return' onPress={() => setOpen(false)}></Button>
                </View>
            </Modal>
        </>
    )
}