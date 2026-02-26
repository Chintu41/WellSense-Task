const express = require('express');
const { register, login } = require('../controllers/authController');
const { protect, authorizeRoles } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Protected routes for demo
router.get('/user/health-status', protect, authorizeRoles('user'), (req, res) => {
    res.json({
        success: true,
        data: {
            status: 'Healthy',
            lastCheckup: '2026-02-20',
            nextCheckup: '2026-03-20',
            reports: ['Blood Test', 'Sugar Level']
        }
    });
});

router.get('/trainer/dashboard', protect, authorizeRoles('trainer'), (req, res) => {
    res.json({
        success: true,
        data: {
            assignedUsers: 12,
            pendingConsultations: 3,
            todaySchedule: ['Morning Yoga', 'Nutrition Webinar']
        }
    });
});

module.exports = router;
