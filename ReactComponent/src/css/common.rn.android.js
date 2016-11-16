import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh),
    w = global.my_rem?global.my_rem:(width/750);

export default StyleSheet.create({
    "nav": {
        "height": 105 * w
    },
    "nav_title": {
        "marginTop": 50 * w,
        "marginLeft": 160 * w,
        "fontSize": 34 * w,
        "fontWeight": "bold"
    },
    "container": {
        "marginTop": 105 * w
    },
    "red": {
        "backgroundColor": "rgba(255, 0, 0, 0.5)"
    },
    "hide": {
        "backfaceVisibility": "hidden"
    },
    "icon_back": {
        "width": 17 * w,
        "height": 32 * w,
        "marginTop": 40 * w,
        "marginLeft": 15 * w
    },
    "d": {
        "position": "relative"
    }
});