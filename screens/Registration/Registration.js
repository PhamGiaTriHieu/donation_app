import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import {globalStyle} from '../../assets/styles/globalStyle';
import Input from '../../components/Input/Input';
import {style} from './style';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import BackButton from '../../components/BackButton/BackButton';
import {createUser} from '../../api/user';

const Registration = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}>
        <View style={[globalStyle.marginBottom24]}>
          <Header title="Hello and Welcome !" />
        </View>

        {/* First & Last Name  */}
        <View style={[globalStyle.marginBottom24]}>
          <Input
            label="First & Last Name"
            placeholder="Enter your full name..."
            onChangeText={value => setFullName(value)}
            keyboardType="text"
          />
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
        {success.length > 0 && <Text style={style.success}>{success}</Text>}
        {/* Button */}
        <View style={[globalStyle.marginBottom24]}>
          <Button
            isDisabled={
              fullName.length <= 2 || email.length <= 5 || password.length <= 8
            }
            isLoading={isLoading}
            title="Registration"
            onPress={async () => {
              setIsLoading(true);
              let user = await createUser(fullName, email, password);
              if (user.error) {
                setError(user.error);
                setIsLoading(false);
              } else {
                setError('');
                setSuccess('Registration successful. You can now login.');
                setIsLoading(false);
                setTimeout(() => navigation.goBack(), 3000);
              }
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
