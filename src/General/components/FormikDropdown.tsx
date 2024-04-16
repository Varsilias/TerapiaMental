import {useField} from 'formik';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../utils/constants';
import {Picker} from '@react-native-picker/picker';

interface Props {
  name: string;
  label: string;
  icon?: ImageSourcePropType;
  onIconClick?: () => void;
  items: {label: string; value: string}[];
}

export const FormikDropdown = ({
  name,
  label,
  icon,
  onIconClick,
  items,
}: Props) => {
  const [field, meta] = useField(name as string);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <Picker
          style={[
            styles.input,
            meta.touched && meta.error
              ? {
                  borderColor: Colors.DANGER,
                  backgroundColor: Colors.INPUT_DANGER,
                }
              : {
                  borderColor: Colors.INPUT_BORDER_GREY,
                  backgroundColor: Colors.INPUT_GREY,
                },
          ]}
          selectedValue={field.value}
          onValueChange={value => field.onChange(name)(value)}>
          {items.map((item, index) => (
            <Picker.Item key={index} label={item.label} value={item.value} />
          ))}
        </Picker>
      </View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.icon}
        onPress={onIconClick}>
        {icon ? <Image source={icon} /> : null}
      </TouchableOpacity>
      {meta.touched && meta.error ? (
        <Text style={styles.error}>{meta.error}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 14,
    position: 'relative',
  },
  label: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    letterSpacing: 0.1,
    color: Colors.LIGHT_GREY,
    paddingBottom: 4,
  },

  input: {
    height: 55,
    borderRadius: 8,
    borderWidth: 1,
    fontSize: 16,
    fontFamily: Fonts.REGULAR,
    color: Colors.PRIMARY_BLACK,
    paddingHorizontal: 10,
  },

  inputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.INPUT_GREY,
  },
  error: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    letterSpacing: 0.1,
    color: Colors.DANGER,
    paddingBottom: 4,
  },
  icon: {
    position: 'absolute',
    top: 35,
    right: 10,
    width: 23,
    height: 24,
  },
});
