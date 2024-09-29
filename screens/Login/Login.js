import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import {style} from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import {Routes} from '../../navigation/Routes';
import {loginUser} from '../../api/user';
import {resetToInitialState, logIn} from '../../redux/reducers/User';
import {useDispatch} from 'react-redux';

const Login = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  dispatch(resetToInitialState());
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={[globalStyle.marginBottom24]}>
          <Header title="Welcome Back" />
        </View>

        {/* Email */}
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label="Email"
            placeholder="Enter your email..."
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
        </View>

        {/* Password */}
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label="Password"
            placeholder="Enter your password"
            onChangeText={value => setPassword(value)}
            keyboardType="password"
            secureTextEntry={true}
          />
        </View>

        {error.length > 0 && <Text style={style.error}>{error}</Text>}
        {/* Button */}
        <View style={[globalStyle.marginBottom24]}>
          <Button
            title="Login"
            isDisabled={email.length <= 5 || password.length <= 8}
            isLoading={isLoading}
            onPress={async () => {
              setIsLoading(true);
              let login = await loginUser(email, password);
              if (login.status) {
                setError('');
                dispatch(logIn(login.data));
                navigation.navigate(Routes.Home);
              } else {
                setError(login?.error);
                setIsLoading(false);
              }
            }}
          />
        </View>
        <Pressable
          style={style.registrationButton}
          onPress={() => navigation.navigate(Routes.Registration)}>
          <Header title="Don’t have an account?" color="#156CF7" types={3} />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
