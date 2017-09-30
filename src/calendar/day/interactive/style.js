import {StyleSheet, Dimensions} from 'react-native';
import * as defaultStyle from '../../../style';

const FILLER_HEIGHT = 34;
const { width: deviceWidth } = Dimensions.get('window');
const dayWidth = deviceWidth / 7;

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    wrapper: {
      width: dayWidth + 1,
      alignItems: 'center',
      alignSelf: 'stretch',
      marginLeft: -1
    },
    wrapperFirstDay: {
      flex: 1,
      alignItems: 'flex-end',
    },
    wrapperLastDay: {
      flex: 1,
      alignItems: 'flex-start',
    },
    base: {
      //borderWidth: 1,
      width: dayWidth - 8,
      height: FILLER_HEIGHT,
      alignItems: 'center'
    },
    fillers: {
      position: 'absolute',
      height: FILLER_HEIGHT,
      flexDirection: 'row',
      left: 0,
      right: 0
    },
    leftFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    rightFiller: {
      height: FILLER_HEIGHT,
      flex: 1
    },
    text: {
      marginTop: 7,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: '300',
      color: appStyle.dayTextColor || '#2d4150',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    todayText: {
      fontWeight: '500',
      color: theme.todayTextColor || appStyle.dayTextColor,
      //color: appStyle.textLinkColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    quickAction: {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#c1e4fe'
    },
    quickActionText: {
      marginTop: 6,
      color: appStyle.textColor
    },
    firstQuickAction: {
      backgroundColor: appStyle.textLinkColor
    },
    firstQuickActionText: {
      color: 'white'
    },
    naText: {
      color: '#b6c1cd'
    }
  });
}
