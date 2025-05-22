import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import styles from './Priem.styles';

const months = [
  'января', 'февраля', 'марта', 'апреля', 'мая',
  'июня', 'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря',
];

const formatDateToRussian = (dateString) => {
  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month, 10) - 1];
  return `${parseInt(day, 10)} ${monthName}`;
};

const Priem = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [freeDates, setFreeDates] = useState([]);

  const exampleFreeDates = [
    { id: '1', date: '2025-05-25', time: '9:00' },
    { id: '2', date: '2025-05-25', time: '10:00' },
    { id: '3', date: '2025-05-25', time: '11:00' },
    { id: '4', date: '2025-05-25', time: '12:00' },
    { id: '5', date: '2025-05-25', time: '13:00' },
    { id: '6', date: '2025-05-25', time: '14:00' },
    { id: '7', date: '2025-05-26', time: '10:00' },
  ];

  const onDateSelect = (day) => {
    const dateString = day.dateString;
    setSelectedDate(dateString);

    const filteredFreeDates = exampleFreeDates.filter(
      (item) => item.date === dateString
    );

    setFreeDates(filteredFreeDates);
  };

  const bookFreeDate = (date, time) => {
    Alert.alert('Запись', `Вы записаны на ${formatDateToRussian(date)}, ${time}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Выберите дату для записи:</Text>

      <Calendar
        style={styles.calendar}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#4a90e2' },
        }}
        onDayPress={onDateSelect}
      />

      {freeDates.length > 0 ? (
        <ScrollView style={styles.freeContainerScroll} nestedScrollEnabled>
          <Text style={[styles.title, { fontSize: 18, marginTop: 20, marginBottom: 10 }]}>
            Свободные даты для записи:
          </Text>
          {freeDates.map(({ id, date, time }) => (
            <View key={id} style={styles.freeDateRow}>
              <Text style={styles.freeDateText}>{`${formatDateToRussian(date)}, ${time}`}</Text>
              <TouchableOpacity style={styles.button} onPress={() => bookFreeDate(date, time)}>
                <Text style={styles.buttonText}>Записаться</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      ) : (
        selectedDate && (
          <Text style={{ marginTop: 25, fontSize:14, textAlign: 'center'}}>
            Нет свободных времён для выбранной даты.
          </Text>
        )
      )}

      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.returnButtonText}>← Вернуться на главную</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Priem;
