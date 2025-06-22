import cron from 'node-cron';
import axios from 'axios';

const url = 'https://timnasa-txmd-1-296a.onrender.comVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJhSXBjNW5UVjA1Vkl0RjExOW4wRkhXeC9FQ1g2TjFkM3JJb2JrT1hwR2lBPSIsImFjY291bnRTaWduYXR1cmUiOiI5Vkd3WUxxM2JBWno1M2lBenlRY1NJMzBCS0NDNHBicENFbzNaSitiV3R6bHFwdU9DMkxZTFloWWJzOGpwbDlaanMrTEZaMndJZ2c1VHA5aVZiN0JCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiS2NLWkxEUCt4UndERUUzYzdiZ0doeUZnV1pJMElUc0l2MlZ2Vm9ya0RxbjMzRFNrNkZFYkpHRTBkUVphWWl3NU5XamxjRXVSOGc5Z2NRalF6SnhFZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3NTcxMDM2NzE6NEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJXaUtYT1owMWRPVlNMUmRkZlo5QlIxc2Z4QWwramRYZDZ5S0c1RGw2Um9nIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJRWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTA1ODM5MDEsImxhc3RQcm9wSGFzaCI6Im5tM0JiIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDQzQifQ==';

cron.schedule('*/14 * * * *', async () => {
  try {
    await axios.get(url);
    console.log('Service pinged successfully');
  } catch (error) {
    console.error('Error pinging service:', error);
  }
});
