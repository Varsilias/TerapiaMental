import {useField} from 'formik';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import {Colors, Fonts} from '../utils/constants';

interface Props {
  name: string;
  label: string;
  icon?: ImageSourcePropType;
  onIconClick?: () => void;
  onPress?: () => void;
  labelStyles?: Record<string, any>;
  inputStyles?: Record<string, any>;
  iconStyles?: Record<string, any>;
}
export const FormikTextInput = ({
  name,
  icon,
  onIconClick,
  onPress,
  onChange,
  ...props
}: TextInputProps & Props) => {
  const [field, meta] = useField(name as string);

  return (
    <View style={styles.container} onTouchStart={onPress}>
      <Text style={[styles.label, props.labelStyles]}>{props.label}</Text>
      <TextInput
        style={[
          styles.input,
          meta.touched && meta.error
            ? {borderColor: Colors.DANGER, backgroundColor: Colors.INPUT_DANGER}
            : {
                borderColor: Colors.INPUT_BORDER_GREY,
                backgroundColor: Colors.INPUT_GREY,
                ...props.inputStyles,
              },
        ]}
        onChangeText={() => onChange ?? field.onChange(name)}
        onBlur={field.onBlur(name)}
        value={field.value}
        {...props}
      />
      <TouchableOpacity
        activeOpacity={1}
        style={styles.icon}
        onPress={onIconClick}>
        {icon ? (
          <Image
            source={icon}
            style={[
              meta.error && meta.touched
                ? {tintColor: Colors.DANGER}
                : {...props.iconStyles},
            ]}
          />
        ) : null}
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
