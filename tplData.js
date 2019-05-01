let tplData = {
    pageTitle: 'Oleg Voloshyn CV',
    me: 'Oleg Voloshyn',
    title: 'PHP backend developer',
    location: 'Kiev, Ukraine',
    phone: '+38073 042 68 13',
    email: 'vololeg93@gmail.com',

    skills: {
        title: 'Skills',
        list: [
            { lang: 'PHP7', percent: 90 },
            { lang: 'JavaScript', percent: 90 },
            { lang: 'Symfony', percent: 95 },
            { lang: 'Yii2', percent: 70 },
            { lang: 'MySQL', percent: 90 },
            { lang: 'JAVA', percent: 50 },
            { lang: 'Linux', percent: 80 },
            { lang: 'English', percent: 70 },
        ]
    },

    education: {
        title: 'Education',
        list: [
            {
                period: '2007 – 2011 year',
                name: '(KTEP/КТЕП) Kiev College of electronic devices. Specialty "Programming for computer facilities and the automated systems"'
            },
            {
                period: '2011 – 2014 years',
                name: '(ISTU/МНТУ) Academician Yuriy Bugay International Scientific and Technical University'
            },
        ]
    },
};
module.exports = tplData;