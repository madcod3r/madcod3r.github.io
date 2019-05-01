module.exports = {
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

    experience: {
        title: 'Experience',
        list: [
            {
                period: '2010-2011 years',
                type: 'Freelance',
                name: 'MegaMarket',
                description: 'E-shop of electronic equipment',
                link: 'megamarket.lg.ua',
                list: [
                    'Adding new functionality to the online store to synchronize with stock quantity of goods',
                    'The stretch the new design in the online store',
                    'Parse product price from different shops (to compare)',
                ]
            },
            {
                period: '2011-2012 years',
                type: 'Company (office)',
                name: 'ProdecoTextiles',
                description: 'Online store for selling textiles',
                link: 'prodecotextiles.com',
                list: [
                    'Development of a multilingual e-shop on the Opencart (MVC) engine',
                    'Developing attribute selection module product with automatic change of prices (with many of using JS)',
                    'Creation design and PSD to HTML template for this shop',
                    'Performance optimization (APC, file cache, browser cache, sql optimization)',
                ]
            },
            {
                period: '2019 year',
                type: 'Company (office)',
                name: 'Big Digitals Ukraine',
                description: 'Outsource development',
                link: 'bigdig.com.ua',
                projects: [
                    {
                        name: 'Ello Music',
                        link: 'ello.tv',
                        desc: 'project on Symfony 2',
                        tasks: [
                            'Creating new features/support old code',
                            'Updated REST API'
                        ]
                    },
                    {
                        name: 'Lunchpoint',
                        link: 'lunchpoint.com',
                        desc: 'project on Yii2',
                        tasks: [
                            'Fixed many bugs',
                            'Added new featured: geolocation, selecting countries and cities',
                            'Updated search bar',
                        ]
                    },
                    {
                        name: 'Insfero',
                        link: 'insfero.com',
                        desc: 'project on Symfony 3 (Redis, Commet server, React, Bitrix24 API, Codeception, Jenkins)',
                        tasks: [
                            'Fixed Jenkins CI/CD',
                            'Fixed few bugs, added new features',
                        ]
                    },
                    {
                        name: 'FarmSoyuz',
                        link: 'fs.com.ua',
                        desc: 'project on Custom Framework',
                        tasks: [
                            'Updated sync with 1C stock',
                            'Fixed search',
                            'sitemap.xml generation',
                            'Implemented city recognition, updating bunch of photos feature and creating of banners',
                        ]
                    },
                ],
            },
        ]
    },
};