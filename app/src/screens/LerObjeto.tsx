import { Camera, useCameraDevice } from 'react-native-vision-camera';
import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function CameraScreen() {
  const router = useRouter();
  const [hasPermission, setHasPermission] = useState(false);
  const [detectedText, setDetectedText] = useState('No text detected yet...');
  const device = useCameraDevice('back');

  useEffect(() => {
    Camera.requestCameraPermission().then(permission => {
      setHasPermission(permission === 'granted');
    });
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Need camera permission</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!device) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No camera found</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
      />
      
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.closeButton} onPress={() => router.back()}>
          <Text style={styles.closeButtonText}>✕ Close</Text>
        </TouchableOpacity>
        
        <View style={styles.scanArea}>
          <View style={styles.scanBox}>
            <Text style={styles.scanText}>Point camera at text</Text>
          </View>
        </View>
        
        {/* OCR RESULT DISPLAY */}
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>OCR Result:</Text>
          <ScrollView style={styles.resultScroll}>
            <Text style={styles.resultText}>{detectedText}</Text>
          </ScrollView>
          
          {/* Test button to simulate OCR result */}
          <TouchableOpacity 
            style={styles.testButton}
            onPress={() => setDetectedText('Test OCR Result: 12345\nDetected at: ' + new Date().toLocaleTimeString())}
          >
            <Text style={styles.testButtonText}>Simulate OCR Detection</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    padding: 20,
    justifyContent: 'space-between',
  },
  closeButton: {
    marginTop: 40,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
  scanArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scanBox: {
    width: 250,
    height: 100,
    borderWidth: 2,
    borderColor: '#00FF00',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,255,0,0.1)',
  },
  scanText: {
    color: '#00FF00',
    fontSize: 14,
  },
  resultContainer: {
    backgroundColor: 'rgba(0,0,0,0.8)',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  resultTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultScroll: {
    maxHeight: 150,
    marginBottom: 10,
  },
  resultText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 20,
  },
  testButton: {
    padding: 10,
    backgroundColor: '#3B82F6',
    borderRadius: 5,
    alignItems: 'center',
  },
  testButtonText: {
    color: 'white',
    fontSize: 14,
  },
  text: {
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#3B82F6',
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});