import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, ActivityIndicator, Alert, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { BarcodeScanningResult, CameraView, useCameraPermissions } from 'expo-camera';
import icons from '../assets/assets';
import { qrStyles } from './styles/qr.style';
import FloatingWindow from '@/components/floating-window/floating-window';

export default function QRScreen() {
  const router = useRouter();

  const [permission, requestPermission] = useCameraPermissions();
  const [scanningEnabled, setScanningEnabled] = useState(true);

  if (!permission) {
    return (
      <View style={qrStyles.loadingContainer}>
        <View style={qrStyles.container}>
          <ActivityIndicator size="large" />
        </View>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={qrStyles.container}>
        <Pressable onPress={requestPermission} style={qrStyles.allowCameraTextContainer}>
          <Text style={qrStyles.allowCameraText}>Allow Camera Access</Text>
        </Pressable>
        <View style={qrStyles.floatingWindow}>
          <TouchableOpacity style={qrStyles.iconButton} onPress={() => router.navigate('/home')}>
            <Image source={icons.Home} style={qrStyles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity style={qrStyles.iconButton} onPress={() => router.navigate('/card')}>
            <Image source={icons.CardGray} style={qrStyles.iconButton} />
          </TouchableOpacity>
          <TouchableOpacity style={qrStyles.iconButton} onPress={() => router.navigate('/qr')}>
            <Image source={icons.ScannerGray} style={qrStyles.iconButton} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  async function onBarcodeScanned({ data }: BarcodeScanningResult) {
    if (!scanningEnabled) return;

    setScanningEnabled(false);

    // Show the alert
    Alert.alert('Scanned Data', data, [
      {
        text: 'OK',
        onPress: () => setScanningEnabled(true),
      },
    ]);
  }

  return (
    <View style={qrStyles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        style={qrStyles.cameraViewContainer}
      >
        <CameraView
          style={qrStyles.camera}
          facing="back"
          onBarcodeScanned={scanningEnabled ? onBarcodeScanned : undefined}
          barcodeScannerSettings={{
            barcodeTypes: ["qr"],
          }}
        />
      </ScrollView>

      <FloatingWindow />
    </View>
  );
}

