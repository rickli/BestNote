import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh),
    w = global.my_rem?global.my_rem:(width/750);

export default StyleSheet.create({
    "header": {
        "width": 750 * w,
        "height": 563 * w,
        "backgroundColor": "#2A98FF",
        "flex": 1
    },
    "badge": {
        "marginTop": 34 * w,
        "width": 142 * w,
        "height": 191 * w,
        "alignSelf": "center"
    },
    "name": {
        "textAlign": "center",
        "fontSize": 30 * w,
        "color": "#fff",
        "marginTop": 20 * w
    },
    "desc": {
        "fontSize": 24 * w,
        "color": "#fff",
        "textAlign": "center",
        "marginTop": 5 * w
    },
    "tips": {
        "width": 750 * w,
        "height": 60 * w,
        "position": "absolute",
        "bottom": 0,
        "backgroundColor": "#5DB1FF",
        "flex": 0,
        "flexDirection": "row"
    },
    "tips_p": {
        "width": 750 * w,
        "alignSelf": "center",
        "textAlign": "center",
        "fontSize": 24 * w,
        "color": "#fff"
    },
    "label": {
        "width": 750 * w,
        "height": 70 * w,
        "backgroundColor": "#F7F9FA",
        "paddingTop": 0,
        "paddingRight": 30 * w,
        "paddingBottom": 0,
        "paddingLeft": 30 * w,
        "flex": 1,
        "flexDirection": "row",
        "justifyContent": "space-between"
    },
    "p": {
        "alignSelf": "center",
        "color": "#ACACAC",
        "fontSize": 26 * w
    },
    "o": {
        "color": "#FFA839"
    },
    "right": {
        "alignSelf": "center",
        "color": "#ACACAC",
        "fontSize": 20 * w
    },
    "lists": {
        "paddingTop": 0,
        "paddingRight": 30 * w,
        "paddingBottom": 0,
        "paddingLeft": 30 * w,
        "width": 750 * w,
        "borderTopWidth": 1,
        "borderTopColor": "#E7E7E7",
        "backgroundColor": "#fff"
    },
    "item": {
        "height": 120 * w,
        "flex": 0,
        "flexDirection": "row",
        "justifyContent": "flex-start",
        "alignItems": "center",
        "borderBottomWidth": 1,
        "borderBottomColor": "#E7E7E7"
    },
    "item_nob": {
        "borderBottomWidth": 0
    },
    "img": {
        "width": 48 * w,
        "height": 48 * w,
        "marginRight": 30 * w
    },
    "icon_right": {
        "position": "absolute",
        "width": 14 * w,
        "height": 25 * w,
        "right": 5 * w,
        "top": 46 * w
    },
    "l_t": {
        "fontSize": 30 * w,
        "color": "#5C6166",
        "marginBottom": 10 * w
    },
    "l_d": {
        "fontSize": 24 * w,
        "color": "#ACACAC"
    },
    "progress": {
        "flexDirection": "row",
        "justifyContent": "space-around",
        "marginTop": 50 * w
    },
    "p_img": {
        "width": 62 * w,
        "height": 62 * w,
        "alignSelf": "center"
    },
    "p_text": {
        "fontSize": 20 * w,
        "marginTop": 15 * w,
        "textAlign": "center",
        "color": "#fff"
    },
    "dashed": {
        "position": "absolute",
        "width": 750 * w,
        "height": 4 * w,
        "left": 0,
        "top": 31 * w
    },
    "avater": {
        "position": "absolute",
        "width": 62 * w,
        "height": 62 * w,
        "zIndex": 1
    },
    "bw": {
        "width": 62 * w,
        "height": 62 * w,
        "borderRadius": 50,
        "borderWidth": 1,
        "borderColor": "#fff",
        "position": "absolute"
    }
});