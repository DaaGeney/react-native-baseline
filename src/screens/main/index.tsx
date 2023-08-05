// @packages
import { Text, View, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

// @scripts
import routes from '../../navigation/routes';

// @types
import { Props, RootStackParamList } from '../../utils/interfaces';

const Main = ({ navigation }: Props) => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ backgroundColor: theme.colors.primary }}>This is the main page</Text>
      <Button
        title="Go to help page"
        onPress={() => navigation.navigate(routes.help.name as keyof RootStackParamList)}
      />
    </View>
  );
};

export default Main;
