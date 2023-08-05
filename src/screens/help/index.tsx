// @packages
import { Text, View, Button } from 'react-native';

// @types
import { Props } from '../../utils/interfaces';

const Help = ({ navigation }: Props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>This is the help page</Text>
      <Button
        title="Go back"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

export default Help;
