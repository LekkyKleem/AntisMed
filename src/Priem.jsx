import React, { useState } from 'react';
import { View, TouchableOpacity, Alert, Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import styles from './Priem.styles';
import CustomText from './CustomText';

LocaleConfig.locales['ru'] = {
  monthNames: ['Январь','Февраль','Март','Апрель',
    'Май','Июнь','Июль','Август',
    'Сентябрь','Октябрь','Ноябрь','Декабрь',
  ],
  monthNamesShort: ['Янв.','Февр.','Март','Апр.','Май','Июнь','Июль','Авг.','Сент.','Окт.','Нояб.','Дек.'],
  dayNames: [
    'Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота',
  ],
  dayNamesShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  today: 'Сегодня',
};

LocaleConfig.defaultLocale = 'ru';

const months = [
  'января', 'февраля', 'марта', 'апреля', 'мая',
  'июня', 'июля', 'августа', 'сентября',
  'октября', 'ноября', 'декабря',
];

const formatDateToRussian = (dateString) => {
  if (!dateString || typeof dateString !== 'string') return '';
  const [year, month, day] = dateString.split('-');
  const monthName = months[parseInt(month, 10) - 1];
  return `${parseInt(day, 10)} ${monthName}`;
};

const Priem = ({ navigation, route }) => {
  const { iin } = route.params || {};

  const [selectedDate, setSelectedDate] = useState(null);
  const [freeDates, setFreeDates] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

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
    setSelectedTime(null);

    const filteredFreeDates = exampleFreeDates.filter(
      (item) => item.date === dateString
    );

    setFreeDates(filteredFreeDates);
  };

  const bookFreeDate = (date, time) => {
    if (!date || !time) {
      Alert.alert('Ошибка', 'Пожалуйста, выберите дату и время.');
      return;
    }

    Alert.alert('Запись', `Вы записаны на ${formatDateToRussian(date)}, ${time}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <TouchableOpacity style={styles.profileBtn} onPress={() => navigation.navigate('ProfileScreen', { iin })}>
          <Image source={require('../assets/profileicon.png')} style={styles.profileIicon} />
          <CustomText style={styles.profileBtnText}>Профиль</CustomText>
        </TouchableOpacity>
      </View>

      <CustomText style={styles.title}>Выберите дату для записи:</CustomText>

      <Calendar
        style={styles.calendar}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#4a90e2' },
        }}
        onDayPress={onDateSelect}
      />

      {freeDates.length > 0 ? (
        <>
          <CustomText style={[styles.title, { fontSize: 18 }]}>Доступное время:</CustomText>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
            {freeDates.map(({ id, time }) => (
              <TouchableOpacity
                key={id}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.timeSlotSelected,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <CustomText style={styles.timeSlotText}>{time}</CustomText>
              </TouchableOpacity>
            ))}
          </View>
        </>
      ) : (
        selectedDate && (
          <CustomText style={{ marginTop: 25, fontSize: 14, textAlign: 'center' }}>
            Нет свободных времён для выбранной даты.
          </CustomText>
        )
      )}

      {freeDates.length > 0 && (
        <TouchableOpacity
          style={styles.bookButton}
          onPress={() => bookFreeDate(selectedDate, selectedTime)}
        >
          <CustomText style={styles.buttonText}>Записаться</CustomText>
        </TouchableOpacity>
      )}

      <View style={styles.NextButtonContainer}>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('CallDoctorScreen', { iin })}>
          <CustomText style={styles.NextButtonText}>🏠 Вызвать врача на дом</CustomText>
        </TouchableOpacity>
        <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate('AnaliseResultScreen', { iin })}>
          <CustomText style={styles.NextButtonText}>📋 Результаты анализов</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Priem;
