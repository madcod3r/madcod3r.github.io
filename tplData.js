// @TODO: Invert experience
//@TODO: added used technologies to experience
//@TODO: Fix "Quantum Projects" and "Interactivity" experience
//@TODO: Check typos

const common = {
    type: {
        freelance: 'Freelance',
        remote: 'Company (remote)',
        office: 'Company (office)'
    }
};

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
                type: common.type.freelance,
                comp: 'MegaMarket',
                link: 'megamarket.lg.ua',
                desc: 'E-shop of electronic equipment',
                projects: [
                    {
                        name: 'MegaMarket',
                        resp: 'Development & support of an online hardware store',
                        link: 'megamarket.lg.ua',
                        tasks: [
                            'Adding new functionality to the online store to synchronize with stock quantity of goods',
                            'The stretch the new design in the online store',
                            'Parse product price from different shops (to compare)',
                        ]
                    },
                ],
            },
            {
                period: '2011-2012 years',
                type: common.type.office,
                comp: 'Leon van der Heijden',
                desc: 'Web solutions for business',
                projects: [
                    {
                        period: '2011-2012 years',
                        name: 'ProDecoTextiles',
                        resp: 'Development & support of an online store selling textiles',
                        link: 'prodecotextiles.com',
                        tasks: [
                            'Development of a multilingual e-shop on the Opencart (MVC) engine',
                            'Developing attribute selection module product with automatic change of prices (with many of using JS)',
                            'Creation design and PSD to HTML template for this shop',
                            'Performance optimization (APC, file cache, browser cache, sql optimization)',
                        ],
                    },
                    {
                        period: '2012 year',
                        name: 'SundaysKiev',
                        resp: 'Website development for organizing business meetings',
                        link: 'sundayskiev.com',
                        tasks: [
                            'The site is written in the framework, CodeIgniter, with multilingual',
                            'Create registration / authentication of users',
                            'Creating a News site and the module "The upcoming event" on the website and FB app',
                        ]
                    },
                    {
                        period: '2012-2013 years',
                        name: 'Ticket2Mobile',
                        resp: 'Development of an online store for selling online tickets to events',
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
                        period: '2014-2015 years',
                        name: 'Kiev Business Consulting',
                        resp: 'Website development for business consulting',
                        link: 'kievbusinessconsulting.com.ua',
                        tasks: [
                            'The site was developed using CMS Wordpress',
                            'Using HTML + CSS + JS template to make an adaptive template for the client needs',
                            'Using PHP to customize some Wordpress plugins are responsible for the appearance of the site',
                        ]
                    }
                ],
            },
            {
                period: '2013 year',
                type: common.type.remote,
                comp: 'Marc Van Oldenborgh',
                desc: 'Web solutions for business',
                projects: [
                    {
                        name: 'IniGrams',
                        resp: 'Development of an online store selling copyright phone wallpapers',
                        link: 'inigrams.com',
                        tasks: [
                            'The site was developed using Symfony 2 framework, ORM Doctrine',
                            'Integration with PayPal',
                            'Using Ajax to get all needed data',
                            'Sending email messages with image archive after purchase',
                            'Using animation pictures on Javascript',
                        ],
                    },
                    {
                        name: 'TicketsYourSelf',
                        resp: 'The development of online electronic ticket sales for the store',
                        link: 'ticketsyourself.com',
                        tasks: [
                            'The site was developed using Symfony 2 framework, ORM Doctrine',
                            'Using Glassfish server (in Java) for data processing',
                            'Using Ajax to fetch data from the Glassfish',
                        ]
                    }
                ],
            },
            {
                period: '2015 year',
                type: common.type.remote,
                comp: 'MadCoders',
                link: 'madcoders.pl',
                desc: 'Poland development company',
                projects: [
                    {
                        period: '2015 year',
                        name: 'Eco Ready House',
                        resp: 'Assistance in the development of site designer homes',
                        link: 'ecoreadyhouse.pl',
                        tasks: [
                            'The site was developed using a proper framework Symfony 2',
                            'Used VM VirtualBox technology (Vagrant) development server',
                            'Using PHP fixes for the REST API, the admin panel',
                            'Using HTML + CSS + JS template to modify the adaptive needs of the client. Used GULP technology to generate CSS with SASS files',
                            'Using AJAX technology to edit and create some AJAX requests',
                            'Using MySQL: the creation / modification of tables and fields, depending on the task. All modifications are implemented via ORM Doctrine and migrations',
                            'Edits (HTML + CSS + JS) as the front part of the site admin + and the creation of new modules in the frontend of the site',
                            'Creation of new modules, such as invoices, etc ... used PHP to create invoices and their generation in HTML + PDF with Symfony modules',
                        ]
                    },
                    {
                        period: '2015 year',
                        resp: 'I\'ve been participated in the development / stretch layout on the online store',
                        tasks: [
                            'The store is designed with the help of Magento engine',
                            'Used VM VirtualBox technology (Vagrant) dev server',
                            'I have used PHP to modify both the frontend and the backend part of the Magento',
                            'Used XML + PHP + HTML + CSS + JS to stretch / modify template to adaptive (mobile) template for a client needs. Used GULP technology to generate CSS file from SASS',
                        ]
                    }
                ],
            },
            {
                period: '2015 year',
                type: common.type.freelance,
                projects: [
                    {
                        name: 'Place View',
                        resp: 'Website development for storing documentation for the main project',
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
                    }
                ],
            },
            {
                period: '2015-2016 years',
                type: common.type.freelance,
                comp: 'Up Work',
                projects: [
                    {
                        name: 'Change Dynamix',
                        resp: 'Do remember',
                        link: 'changedynamix.io',
                        tasks: [
                            'Supporting/updating the website in Wordpress',
                        ]
                    },
                    {
                        name: 'Shop OK',
                        resp: 'Do remember',
                        link: 'shopok.in.ua',
                        tasks: [
                            'Reduced the checkout page in shopok.in.ua (Opencart CMS)',
                            'Created PSD2HTML adaptive (for mobile/tablets) template',
                        ]
                    },
                    {
                        name: 'Moda Express',
                        link: 'modaexpress.com.ua',
                        tasks: [
                            'Development and maintenance of web shop in Opencart engine',
                        ]
                    },
                    {
                        name: 'GiftUA',
                        link: 'giftua.com',
                        tasks: [
                            'Development and maintenance of web shop in Opencart engine',
                        ]
                    },
                ],
            },
            {
                period: '2016 year (1 month)',
                type: common.type.office,
                comp: 'Domik',
                desc: 'Website rental homes / apartments',
                link: 'domik.ua',
                projects: [
                    {
                        name: 'Domik.ua',
                        resp: 'Website development and maintenance of rental homes / apartments',
                        link: 'domik.ua',
                        tasks: [
                            'Support old, legacy code',
                            'Fix thousands in bugs with web server/mail server',
                            'Develop new functionality on top of old legacy PHP code',
                        ]
                    }
                ],
            },
            {
                period: '2017 year',
                type: common.type.office,
                comp: 'Quantum Projects',
                desc: 'Web solutions development company',
                projects: [
                    {
                        name: 'Company website',
                        resp: 'Development of one page website',
                        link: 'quantum-projects.com',
                        tasks: [
                            'Create simple HTML website',
                        ]
                    },
                    {
                        name: 'FXProfitCode',
                        resp: 'Creation and support of a platform for lead generation',
                        links: ['fxprofitcode.com', 'fxprofitcode.net'],
                        tasks: [
                            'The web application based on Symfony 3',
                            'Used many modules (the Symfony bundles)',
                            'Created database',
                            'Different templates for different domains',
                            'Created web application for admin panel',
                            'Sending data to partners API',
                        ]
                    },
                ],
            },
            {
                period: '2018-2019 year',
                type: common.type.office,
                comp: 'Interactivity',
                desc: 'Development company',
                link: 'interactivity.com.ua',
                projects: [
                    {
                        name: 'Robert Kaufman',
                        resp: 'Development and maintenance of old legacy PHP code',
                        link: 'robertkaufman.com',
                        tasks: [
                            'The web application based on Symfony 3/Native PHP 7.0',
                            'Making new functionality',
                            'Moving from legacy PHP code to Symfony 3',
                            'Moving from Symfony 3 to Symfony 4 (fix deprecations, use flex, DI)',
                        ]
                    },
                    {
                        name: 'IEEE TV',
                        resp: 'Development of module for Drupal',
                        link: 'ieeetv.ieee.org',
                        tasks: [
                            'Creating AWS uploading file progress bar',
                        ]
                    },
                ],

            },
            {
                period: '2019 year',
                type: common.type.office,
                comp: 'Big Digitals Ukraine',
                desc: 'Outsource development company',
                link: 'bigdig.com.ua',
                projects: [
                    {
                        name: 'Ello Music',
                        link: 'ello.tv',
                        resp: 'Development and maintenance of barely living old project',
                        tasks: [
                            'Creating new features/support old code',
                            'Updated REST API',
                            'Maintenance of database',
                            'Creating console commands for generating music playlists',
                        ]
                    },
                    {
                        name: 'Lunch Point',
                        link: 'lunchpoint.com',
                        resp: 'Development and maintenance of shit written code',
                        tasks: [
                            'Fixed many bugs',
                            'Added new featured: geolocation, selecting countries and cities',
                            'Updated search bar',
                            'Updated database for i18n entities'
                        ]
                    },
                    {
                        name: 'Insfero',
                        link: 'insfero.com',
                        resp: 'Install project locally, fix Jenkins',
                        tech: [
                            'Symfony 3',
                            'Redis',
                            'Commet server',
                            'React',
                            'Bitrix24 API',
                            'Codeception',
                            'Jenkins',
                            'RESTful web API',
                        ],
                        tasks: [
                            'Fixed Jenkins CI/CD',
                            'Fixed login with social networks',
                            'Integration with Bitrix 24 CRM',
                        ]
                    },
                    {
                        name: 'FarmSoyuz',
                        link: 'fs.com.ua',
                        resp: 'New functions/fixes',
                        tasks: [
                            'Fixed/updated/improved synchronization with 1C',
                            'Fixed searching module',
                            'Added /sitemap.xml generation for search engine',
                            'Implemented city recognition',
                            'Other new functionality for automation of work with products in pharmacies',
                        ]
                    },
                ],
            },
        ]
    },
};