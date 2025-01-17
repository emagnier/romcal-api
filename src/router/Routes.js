import express from 'express';
import config from '../../config/config';
import CalendarController from '../controllers/Calendar';
import LocaleController from '../controllers/Locale';

const router = express.Router();

// router
router.get(`${config.baseUrl}/:calendar/:country/:locale/:year?/:month?/:day?`, CalendarController.getCalendar);
router.get(`${config.baseUrl}/calendars`, CalendarController.getAllCalendars);
router.get(`${config.baseUrl}/locales`, LocaleController.getAllLocales);

export default router;
