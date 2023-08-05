// @packages
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
	Main: undefined;
	Help: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export interface userState {
  name: string;
  lastName: string;
}