import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Linking  } from 'react-native';
import styles from './AnaliseResult.styles';

const analysisData = [
  { id: '1', name: 'Общий анализ крови', date: '2025-05-10', result: 'В пределах нормы', link: 'https://example.com/result1.pdf' },
  { id: '2', name: 'Моча', date: '2025-05-12', result: 'Незначительные отклонения', link: 'https://example.com/result2.pdf' },
  { id: '3', name: 'Глюкоза', date: '2025-05-15', result: 'Повышена', link: 'https://example.com/result3.pdf' },
];

const AnaliseResult = ({ navigation }) => {
  const [visibleResults, setVisibleResults] = useState([]);

  const toggleResult = (id) => {
    setVisibleResults((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Результаты анализов</Text>

      <ScrollView style={styles.scroll}>
        {analysisData.map((item) => (
          <View key={item.id} style={styles.analysisItem}>
            <Text style={styles.analysisName}>{item.name}</Text>
            <Text style={styles.analysisDate}>Дата: {item.date}</Text>

            <TouchableOpacity
              style={styles.resultButton}
              onPress={() => toggleResult(item.id)}
            >
              <Text style={styles.resultButtonText}>
                {visibleResults.includes(item.id) ? 'Скрыть результат' : 'Показать результат'}
              </Text>
            </TouchableOpacity>

            {visibleResults.includes(item.id) && (
            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
              <Text style={[styles.analysisResult, { color: 'blue', textDecorationLine: 'none' }]}>
                📎 Скачать PDF-Файл
              </Text>
            </TouchableOpacity>
          )}
          </View>
        ))}
      </ScrollView>

      <View style={styles.NextButtonContainer} >
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('PriemScreen')}>
          <Text style={styles.NextButtonText}>📅 Записаться на приём</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('CallDoctorScreen')}>
          <Text style={styles.NextButtonText}>🏠 Вызвать врача на дом</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AnaliseResult;
