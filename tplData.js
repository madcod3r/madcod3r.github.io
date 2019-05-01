//@TODO: create some common string object
//@TODO: create project tasks "main responsibilities" description
//@TODO: refactor experience to per-project tasks
//@TODO: added used technologies to experience
//@TODO: Fix "Quantum Projects" and "Interactivity" experience
//@TODO: Check typos
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
                tasks: [
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
                tasks: [
                    'Development of a multilingual e-shop on the Opencart (MVC) engine',
                    'Developing attribute selection module product with automatic change of prices (with many of using JS)',
                    'Creation design and PSD to HTML template for this shop',
                    'Performance optimization (APC, file cache, browser cache, sql optimization)',
                ]
            },
            {
                period: '2012 year',
                type: 'Company (office)',
                name: 'SundaysKiev',
                description: 'Website development for the organization of business meetings foreigners',
                link: 'sundayskiev.com',
                tasks: [
                    'The site is written in the framework, CodeIgniter, with multilingual',
                    'Create registration / authentication of users',
                    'Creating a News site and the module "The upcoming event" on the website and FB app',
                ]
            },
            {
                period: '2012-2013 years',
                type: 'Company (office)',
                name: 'Ticket2Mobile',
                description: 'The development of online electronic ticket sales for the store',
                links: ['ticket2mobile.com', 't2m.com'],
                tasks: [
                    'The site was developed using the framework Symfony 1.4, ORM Doctrine',
                    'Using Solr for search on the site, multilingual',
                    'Create different search filters tickets: by genre, by the first letter, on the date of the event at the venue, the city',
                    'Using the twitter API to display tweets about the event',
                    'Integration liqpay payment system',
                ]
            },
            {
                period: '2013 year',
                type: 'Company (remote)',
                name: 'Inigrams',
                description: 'Online store for selling pictures',
                responsibility: 'Development of online store for selling pictures',
                link: 'inigrams.com',
                tasks: [
                    'The site was developed using Symfony 2 framework, ORM Doctrine',
                    'Integration with Paypal',
                    'Using Ajax to get all needed data',
                    'Sending email messages with image archive after purchase',
                    'Using animation pictures on Javascript',
                ]
            },
            {
                period: '2013-2014 years',
                type: 'Company (remote)',
                name: 'TicketsYourSelf',
                description: 'Online electronic ticket sales',
                responsibility: 'The development of online electronic ticket sales for the store',
                link: 'ticketsyourself.com',
                tasks: [
                    'The site was developed using Symfony 2 framework, ORM Doctrine',
                    'Using Glassfish server (in Java) for data processing',
                    'Using Ajax to fetch data from the Glassfish',
                ]
            },
            {
                period: '2014-2015 years',
                type: 'Freelance',
                name: 'Kiev Business Consulting',
                description: 'Website development for the consulting company',
                responsibility: '',
                link: 'kievbusinessconsulting.com.ua',
                tasks: [
                    'The site was developed using CMS Wordpress',
                    'Using HTML + CSS + JS template to make an adaptive template for the client needs',
                    'Using PHP to customize some Wordpress plugins are responsible for the appearance of the site',
                ]
            },
            {
                period: '2015 year',
                type: 'Freelance',
                name: 'MadCoders',
                description: 'Site-plan the constructor of houses',
                responsibility: 'Help in the development of site-plan the constructor of houses',
                link: 'ecoreadyhouse.pl',
                tasks: [
                    'The site was developed using a proper framework Symfony 2',
                    'Used VM Virtualbox technology (Vagrant) development server',
                    'Using PHP fixes for the REST API, the admin panel',
                    'Using HTML + CSS + JS template to modify the adaptive needs of the client. Used GULP technology to generate CSS with SASS files',
                    'Using AJAX technology to edit and create some AJAX requests',
                    'Using MySQL: the creation \\ modification of tables and fields, depending on the task. All modifications are implemented via ORM Doctrine and migrations',
                    'Edits (HTML + CSS + JS) as the front part of the site admin + and the creation of new modules in the frontend of the site',
                    'Creation of new modules, such as invoices, etc ... used PHP to create invoices and their generation in HTML + PDF with Symfony modules',
                ]
            },
            {
                period: '2015 year',
                type: 'Freelance',
                name: 'MadCoders',
                description: '',
                responsibility: 'I\'ve been participated in the development / stretch layout on the online store',
                link: '',
                tasks: [
                    'The store is designed with the help of Magento engine',
                    'Used VM VirtualBox technology (Vagrant) dev server',
                    'I have used PHP to modify both the frontend and the backend part of the Magento',
                    'Used XML + PHP + HTML + CSS + JS to stretch / modify template to adaptive (mobile) template for a client needs. Used GULP technology to generate CSS file from SASS',
                ]
            },
            {
                period: '2015 year',
                type: 'Freelance',
                name: 'Placeview',
                description: 'A site for the documentation',
                responsibility: 'A site for the documentation',
                link: 'info.placeview.in',
                tasks: [
                    'This site is built using a framework Phalcon',
                    'Did the frontend using Twitter Bootstrap',
                    'Created admin panel (CRUD) with auth module without the use of ready-made options',
                    'Established images loading module (with caching and all the stuff)',
                    'Installed the module of text editor + added to it a file manager to upload pictures',
                    'Created DB architecture and used MySQL to create and manage database',
                    'Created multi language module used default Phalcon system and MySQL database',
                ]
            },
            {
                period: '2015-2016 years',
                type: 'Freelance',
                name: 'UpWork',
                description: 'Quick tasks for some amount of projects',
                responsibility: 'Quick tasks for some amount of projects',
                links: ['shopok.in.ua', 'modaexpress.com.ua', 'giftua.com', 'changedynamix.io'],
                tasks: [
                    'Created many websites, most likely on Opencart and WordPress',
                    'Reduced the checkout page in shopok.in.ua (Opencart CMS)',
                    'Created few websites in Opencart (modaexpress.com.ua, giftua.com)',
                    'Supporting/updating the website in Wordpress (changedynamix.io)',
                    'Created PSD2HTML adaptive (for mobile/tablets) template',
                ]
            },
            {
                period: '2016 year',
                type: 'Company (office)',
                name: 'Domik.ua',
                description: 'Online project for domiks',
                responsibility: 'Online project for domiks',
                links: ['domik.ua'],
                tasks: [
                    'Need to remember....',
                    'Need to remember....',
                    'Need to remember....',
                    'Need to remember....',
                    'Need to remember....',
                ]
            },
            {
                period: '2017 year',
                type: 'Company (office)',
                name: 'Quantum Projects',
                description: 'Web-dev product company',
                responsibility: 'Creating landings platform',
                links: ['quantum-projects.com', 'fxprofitcode.com', 'fxprofitcode.net'],
                tasks: [
                    'The web application based on Symfony 3',
                    'Used many modules (the Symfony bundles)',
                    'Created database',
                    'Different templates for different domains (fxprofitcode.com , fxprofitcode.net)',
                    'Created web application for admin panel',
                    'Sending data to partners API',
                ]
            },
            {
                period: '2018-2019 year',
                type: 'Company (office)',
                name: 'Interactivity',
                description: 'Web-dev outsource company',
                responsibility: 'Support legacy code PHP written project / ',
                links: ['interactivity.com.ua', 'robertkaufman.com', 'ieeetv.ieee.org'],
                tasks: [
                    'Project is RobertKaufman',
                    'The web application based on Symfony 3/Native PHP 7.0',
                    'Making new functionality',
                    'Moving from legacy PHP code to Symfony 3',
                    'Moving from Symfony 3 to Symfony 4 (fix deprecations, use flex, DI)',
                    'Working on IEEE TV:',
                    'Creating AWS uploading file progress bar',
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