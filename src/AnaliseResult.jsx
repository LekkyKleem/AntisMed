import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Linking, Image } from 'react-native';
import styles from './AnaliseResult.styles';
import CustomText from './CustomText'

const analysisData = [
  { id: '1', name: 'Общий анализ крови', date: '2025-05-10', result: 'В пределах нормы', link: 'https://example.com/result1.pdf' },
  { id: '2', name: 'Моча', date: '2025-05-12', result: 'Незначительные отклонения', link: 'https://example.com/result2.pdf' },
  { id: '3', name: 'Глюкоза', date: '2025-05-15', result: 'Повышена', link: 'https://example.com/result3.pdf' },
];

const AnaliseResult = ({ navigation, route }) => {
  const { iin } = route.params || {};
  const [visibleResults, setVisibleResults] = useState([]);

  const toggleResult = (id) => {
    setVisibleResults((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('ProfileScreen', { iin })}>
          <Image source={require('../assets/profileicon.png')} style={styles.profileIicon} />
          <CustomText style={styles.profileBtnText}>Профиль</CustomText>
        </TouchableOpacity>
      </View>

      <CustomText style={styles.title}>Результаты анализов</CustomText>

      <ScrollView style={styles.scroll}>
        {analysisData.map((item) => (
          <View key={item.id} style={styles.analysisItem}>
            <CustomText style={styles.analysisName}>{item.name}</CustomText>
            <CustomText style={styles.analysisDate}>Дата: {item.date}</CustomText>

            <TouchableOpacity
              style={styles.resultButton}
              onPress={() => toggleResult(item.id)}
            >
              <CustomText style={styles.resultButtonText}>
                {visibleResults.includes(item.id) ? 'Скрыть результат' : 'Показать результат'}
              </CustomText>
            </TouchableOpacity>

            {visibleResults.includes(item.id) && (
              <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                <CustomText style={[styles.analysisResult, { color: 'blue', textDecorationLine: 'none' }]}>
                  📎 Скачать PDF-Файл
                </CustomText>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.NextButtonContainer}>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('PriemScreen')}>
          <CustomText style={styles.NextButtonText}>📅 Записаться на приём</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('CallDoctorScreen')}>
          <CustomText style={styles.NextButtonText}>🏠 Вызвать врача на дом</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnaliseResult;
