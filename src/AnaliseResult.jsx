import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import styles from './AnaliseResult.styles';

const analysisData = [
  { id: '1', name: 'Общий анализ крови', date: '2025-05-10', result: 'В пределах нормы' },
  { id: '2', name: 'Моча', date: '2025-05-12', result: 'Незначительные отклонения' },
  { id: '3', name: 'Глюкоза', date: '2025-05-15', result: 'Повышена' },
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
              <Text style={styles.analysisResult}>Результат: {item.result}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Вернуться на главную</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AnaliseResult;
