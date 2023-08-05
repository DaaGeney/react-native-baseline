// @packages
import { Text, View, Button } from 'react-native';
import { useTranslation } from 'react-i18next';

// @types
import { Props } from '../../utils/interfaces';

const Help = ({ navigation }: Props) => {
  const { t } = useTranslation();

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{t('helpPage')}</Text>
      <Button
        title={t('goBack')}
        onPress={() => navigation.goBack()}
      />
    </View>
  );};

export default Help;
