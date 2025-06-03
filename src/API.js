import { Buffer } from 'buffer';
import base64 from 'react-native-base64';

if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
}

const BASE_URL = 'http://192.168.10.62/passbase/hs/patientAPI';
const USERNAME = 'webBackPatient';
const PASSWORD = 'ubPpWDiYMwW';

function getAuthHeaders() {
  const token = `${USERNAME}:${PASSWORD}`;
  const encodedToken = base64.encode(token);
  return {
    Authorization: `Basic ${encodedToken}`,
    'Content-Type': 'application/json',
  };
}

async function post(endpoint, body = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: getAuthHeaders(),
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
  }

  const data = await response.json();

  if (data.error && data.error !== '') {
    throw new Error(`Ошибка API: ${data.error}`);
  }

  return data;
}

export async function startAuthorization(IIN, phoneNumber, confirmation = '') {
  return post('/startAuthorization', { IIN, phoneNumber, confirmation });
}

export async function completeAuthorization(phoneNumber, verificationCode) {
  const result = await post('/completeAuthorization', { phoneNumber, verificationCode });
  return result.token;
}

export async function refreshToken(IIN, phoneNumber) {
  const result = await post('/refreshToken', { IIN, phoneNumber });
  return result.token;
}

export async function getPersonInfo(IIN, phoneNumber, token) {
  return post('/GetPersonByFIOIIN', { IIN, phoneNumber, token });
}

export async function getOrganOfAttachment(patientId) {
  const response = await fetch(`${BASE_URL}/GetOrganOfAttachment?patientId=${patientId}`, {
    method: 'POST',
    headers: getAuthHeaders(),
  });

  if (!response.ok) {
    throw new Error(`Ошибка сети: ${response.status}`);
  }

  const data = await response.json();

  if (data.error && data.error !== '') {
    throw new Error(`Ошибка API: ${data.error}`);
  }

  return data;
}

export function checkTokenErrors(code) {
  switch (code) {
    case 2108:
      return 'Неавторизованный пользователь. Пройдите авторизацию.';
    case 2109:
      return 'Неверный токен. Попробуйте авторизоваться заново.';
    case 2110:
      return 'Срок действия токена истёк. Обновляем...';
    default:
      return null;
  }
}
