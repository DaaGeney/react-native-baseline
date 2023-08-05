// @packages
import { Text, View, Button } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useTranslation } from 'react-i18next';

// @scripts
import routes from '../../navigation/routes';

// @types
import { Props, RootStackParamList } from '../../utils/interfaces';

const Main = ({ navigation }: Props) => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ backgroundColor: theme.colors.primary }}>{t('thisIsMainPage')}</Text>
      <Button
        title={t('goToHelp')}
        onPress={() => navigation.navigate(routes.help.name as keyof RootStackParamList)}
      />
    </View>
  );
};

export default Main;
