import React from 'react';
import {ActivityIndicator} from 'react-native';
import {Colors, Metrics} from '../../themes';

function FooterFlatList() {
  return (
    <ActivityIndicator
      size="small"
      color={Colors.grey.lighter}
      style={{
        marginVertical: Metrics.mediumMargin,
      }}
    />
  );
}

export default FooterFlatList;
