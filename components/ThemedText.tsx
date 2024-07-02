import { Text, type TextProps, StyleSheet } from 'react-native';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'heading'| 'description' | 'buttonTitle' | 'questionarieHead' | 'questionarieTitle' | 'checkbox';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {

  return (
    <Text
      style={[
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'heading' ? styles.heading : undefined,
        type === 'description' ? styles.description : undefined,
        type === 'buttonTitle' ? styles.buttonTitle : undefined,
        type === 'questionarieHead' ? styles.questionarieHead : undefined,
        type === 'questionarieTitle' ? styles.questionarieTitle : undefined,
        type === 'checkbox' ? styles.checkbox : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 24,
    fontWeight:'bold'
  },
  defaultSemiBold: {
    fontSize: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: 12,
    color:'gray'
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  buttonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  questionarieHead:{
    fontSize: 14,
    color:'purple',
    fontWeight:'600'
  },
  questionarieTitle:{
    fontSize: 24,
    color:'black',
    fontWeight:'bold'
  },
  checkbox:{
    fontSize: 18,
    color:'purple',
    fontWeight:'500'
  }
});
