import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  data = [
    {
      id: 1,
      firstName: 'Belia',
      lastName: 'Guly',
      email: 'bguly0@51.la',
      gender: 'Female',
      birthday: '1983-06-01T20:36:22Z',
      salary: 9693,
      phone: '285-641-2889'
    },
    {
      id: 2,
      firstName: 'Rosalynd',
      lastName: 'Gerrelts',
      email: 'rgerrelts1@weibo.com',
      gender: 'Female',
      birthday: '1964-03-31T16:24:27Z',
      salary: 8951,
      phone: '142-282-1117'
    },
    {
      id: 3,
      firstName: 'Khalil',
      lastName: 'Joppich',
      email: 'kjoppich2@marketwatch.com',
      gender: 'Male',
      birthday: '1987-06-30T01:55:33Z',
      salary: 7627,
      phone: '207-413-0416'
    },
    {
      id: 4,
      firstName: 'Eric',
      lastName: 'Cobbled',
      email: 'ecobbled3@last.fm',
      gender: 'Male',
      birthday: '1989-11-06T10:39:32Z',
      salary: 6994,
      phone: '829-513-8650'
    },
    {
      id: 5,
      firstName: 'Jerry',
      lastName: 'Hucks',
      email: 'jhucks4@acquirethisname.com',
      gender: 'Male',
      birthday: '1978-10-21T00:04:06Z',
      salary: 6691,
      phone: '259-408-2766'
    },
    {
      id: 6,
      firstName: 'Terra',
      lastName: 'Brandassi',
      email: 'tbrandassi5@msn.com',
      gender: 'Female',
      birthday: '1994-04-28T11:41:35Z',
      salary: 8850,
      phone: '976-752-3381'
    },
    {
      id: 7,
      firstName: 'Sherline',
      lastName: 'Witherup',
      email: 'switherup6@army.mil',
      gender: 'Female',
      birthday: '1982-08-14T13:44:05Z',
      salary: 7493,
      phone: '586-222-5835'
    },
    {
      id: 8,
      firstName: 'Roseanna',
      lastName: 'Tayt',
      email: 'rtayt7@prweb.com',
      gender: 'Female',
      birthday: '1958-04-26T04:56:47Z',
      salary: 6301,
      phone: '469-888-7595'
    },
    {
      id: 9,
      firstName: 'Elyse',
      lastName: 'Pashan',
      email: 'epashan8@ca.gov',
      gender: 'Female',
      birthday: '1977-09-13T03:57:16Z',
      salary: 7027,
      phone: '815-749-3433'
    },
    {
      id: 10,
      firstName: 'Vincents',
      lastName: 'Fosken',
      email: 'vfosken9@hugedomains.com',
      gender: 'Male',
      birthday: '1994-04-02T09:29:13Z',
      salary: 9268,
      phone: '372-650-9874'
    },
    {
      id: 11,
      firstName: 'Maisey',
      lastName: 'Glassard',
      email: 'mglassarda@craigslist.org',
      gender: 'Female',
      birthday: '1973-05-04T19:40:37Z',
      salary: 8571,
      phone: '785-651-1686'
    },
    {
      id: 12,
      firstName: 'Minette',
      lastName: 'Curry',
      email: 'mcurryb@wufoo.com',
      gender: 'Female',
      birthday: '1964-12-28T23:43:42Z',
      salary: 8637,
      phone: '398-752-4294'
    },
    {
      id: 13,
      firstName: 'Kaleb',
      lastName: 'Warrilow',
      email: 'kwarrilowc@guardian.co.uk',
      gender: 'Male',
      birthday: '1961-12-10T01:48:51Z',
      salary: 6488,
      phone: '753-528-0132'
    },
    {
      id: 14,
      firstName: 'Stanley',
      lastName: 'McClements',
      email: 'smcclementsd@vimeo.com',
      gender: 'Male',
      birthday: '1997-12-31T19:59:50Z',
      salary: 7252,
      phone: '294-757-6011'
    },
    {
      id: 15,
      firstName: 'Sashenka',
      lastName: 'Dagnall',
      email: 'sdagnalle@linkedin.com',
      gender: 'Female',
      birthday: '1959-08-24T10:57:50Z',
      salary: 8851,
      phone: '112-677-0450'
    },
    {
      id: 16,
      firstName: 'Alfons',
      lastName: 'Trayes',
      email: 'atrayesf@china.com.cn',
      gender: 'Male',
      birthday: '1962-09-19T11:23:50Z',
      salary: 9269,
      phone: '150-426-6985'
    },
    {
      id: 17,
      firstName: 'Casey',
      lastName: 'Hains',
      email: 'chainsg@hibu.com',
      gender: 'Male',
      birthday: '1998-05-16T22:59:27Z',
      salary: 9677,
      phone: '590-834-3200'
    },
    {
      id: 18,
      firstName: 'Dimitry',
      lastName: 'Whytock',
      email: 'dwhytockh@answers.com',
      gender: 'Male',
      birthday: '1958-07-15T12:06:16Z',
      salary: 7970,
      phone: '239-273-9268'
    },
    {
      id: 19,
      firstName: 'Prudence',
      lastName: 'Ellph',
      email: 'pellphi@etsy.com',
      gender: 'Female',
      birthday: '1960-12-29T16:30:38Z',
      salary: 9028,
      phone: '187-492-0597'
    },
    {
      id: 20,
      firstName: 'Marshal',
      lastName: 'Sergison',
      email: 'msergisonj@ovh.net',
      gender: 'Male',
      birthday: '1974-05-26T07:10:46Z',
      salary: 7248,
      phone: '516-498-1941'
    },
    {
      id: 21,
      firstName: 'Talya',
      lastName: 'Mayhou',
      email: 'tmayhouk@moonfruit.com',
      gender: 'Female',
      birthday: '1999-11-02T20:36:05Z',
      salary: 9703,
      phone: '720-980-2752'
    },
    {
      id: 22,
      firstName: 'Denice',
      lastName: 'Tamblingson',
      email: 'dtamblingsonl@mac.com',
      gender: 'Female',
      birthday: '1991-10-24T09:34:18Z',
      salary: 6789,
      phone: '505-604-1194'
    },
    {
      id: 23,
      firstName: 'Gordan',
      lastName: 'Simon',
      email: 'gsimonm@nydailynews.com',
      gender: 'Male',
      birthday: '1972-10-28T00:52:37Z',
      salary: 6110,
      phone: '779-193-9171'
    },
    {
      id: 24,
      firstName: 'Holly-anne',
      lastName: 'Pargeter',
      email: 'hpargetern@ask.com',
      gender: 'Female',
      birthday: '1991-12-04T17:30:29Z',
      salary: 5720,
      phone: '376-704-3840'
    },
    {
      id: 25,
      firstName: 'Annis',
      lastName: 'Spera',
      email: 'asperao@mozilla.com',
      gender: 'Female',
      birthday: '1980-03-03T06:34:19Z',
      salary: 7318,
      phone: '735-494-0590'
    },
    {
      id: 26,
      firstName: 'Martguerita',
      lastName: 'Armsden',
      email: 'marmsdenp@blog.com',
      gender: 'Female',
      birthday: '1980-05-08T02:13:31Z',
      salary: 5505,
      phone: '289-589-1664'
    },
    {
      id: 27,
      firstName: 'Aile',
      lastName: 'Mounter',
      email: 'amounterq@topsy.com',
      gender: 'Female',
      birthday: '1991-11-19T01:54:12Z',
      salary: 7219,
      phone: '326-979-9351'
    },
    {
      id: 28,
      firstName: 'Marj',
      lastName: 'Evetts',
      email: 'mevettsr@china.com.cn',
      gender: 'Female',
      birthday: '1980-02-08T07:00:09Z',
      salary: 7691,
      phone: '936-316-8977'
    },
    {
      id: 29,
      firstName: 'Joan',
      lastName: 'Murney',
      email: 'jmurneys@sciencedirect.com',
      gender: 'Female',
      birthday: '1979-01-11T09:36:03Z',
      salary: 8461,
      phone: '504-931-9938'
    },
    {
      id: 30,
      firstName: 'Grove',
      lastName: 'Nano',
      email: 'gnanot@examiner.com',
      gender: 'Male',
      birthday: '1959-03-01T12:35:06Z',
      salary: 9853,
      phone: '390-257-4458'
    },
    {
      id: 31,
      firstName: 'Grannie',
      lastName: 'Mossop',
      email: 'gmossopu@t-online.de',
      gender: 'Male',
      birthday: '1960-10-29T16:58:42Z',
      salary: 9533,
      phone: '928-681-6683'
    },
    {
      id: 32,
      firstName: 'Emmi',
      lastName: 'Varfolomeev',
      email: 'evarfolomeevv@disqus.com',
      gender: 'Female',
      birthday: '1982-07-02T16:33:49Z',
      salary: 6503,
      phone: '894-309-9710'
    },
    {
      id: 33,
      firstName: 'Ulrike',
      lastName: 'Reihm',
      email: 'ureihmw@adobe.com',
      gender: 'Female',
      birthday: '1996-04-21T05:56:49Z',
      salary: 7715,
      phone: '300-393-3859'
    },
    {
      id: 34,
      firstName: 'Brnaby',
      lastName: 'Hanney',
      email: 'bhanneyx@mac.com',
      gender: 'Male',
      birthday: '1974-09-30T14:00:26Z',
      salary: 8521,
      phone: '165-360-5294'
    },
    {
      id: 35,
      firstName: 'Harlin',
      lastName: 'McKinie',
      email: 'hmckiniey@go.com',
      gender: 'Male',
      birthday: '1976-12-01T21:47:07Z',
      salary: 7044,
      phone: '899-435-7695'
    },
    {
      id: 36,
      firstName: 'Hermia',
      lastName: 'Sowden',
      email: 'hsowdenz@webeden.co.uk',
      gender: 'Female',
      birthday: '1959-02-17T01:38:44Z',
      salary: 6525,
      phone: '913-171-1273'
    },
    {
      id: 37,
      firstName: 'Christiano',
      lastName: 'Abela',
      email: 'cabela10@tiny.cc',
      gender: 'Male',
      birthday: '1984-06-16T23:23:35Z',
      salary: 7412,
      phone: '326-949-8659'
    },
    {
      id: 38,
      firstName: 'Kermy',
      lastName: 'Keefe',
      email: 'kkeefe11@ted.com',
      gender: 'Male',
      birthday: '1997-09-03T14:10:58Z',
      salary: 6571,
      phone: '290-944-5874'
    },
    {
      id: 39,
      firstName: 'Ninetta',
      lastName: 'Durtnel',
      email: 'ndurtnel12@slashdot.org',
      gender: 'Female',
      birthday: '1984-07-02T00:27:13Z',
      salary: 5293,
      phone: '632-598-7069'
    },
    {
      id: 40,
      firstName: 'Tarrah',
      lastName: 'Coysh',
      email: 'tcoysh13@webmd.com',
      gender: 'Female',
      birthday: '1994-11-17T15:02:37Z',
      salary: 6966,
      phone: '414-347-7674'
    },
    {
      id: 41,
      firstName: 'Tessi',
      lastName: 'Piletic',
      email: 'tpiletic14@salon.com',
      gender: 'Female',
      birthday: '1977-01-07T23:25:28Z',
      salary: 7882,
      phone: '255-713-9858'
    },
    {
      id: 42,
      firstName: 'Deane',
      lastName: 'Getley',
      email: 'dgetley15@technorati.com',
      gender: 'Female',
      birthday: '1971-01-12T17:51:15Z',
      salary: 6757,
      phone: '213-762-6023'
    },
    {
      id: 43,
      firstName: 'Jen',
      lastName: 'Scopham',
      email: 'jscopham16@meetup.com',
      gender: 'Female',
      birthday: '1968-03-21T20:56:06Z',
      salary: 6149,
      phone: '649-182-3197'
    },
    {
      id: 44,
      firstName: 'Konrad',
      lastName: 'Bourchier',
      email: 'kbourchier17@storify.com',
      gender: 'Male',
      birthday: '1981-03-31T00:21:52Z',
      salary: 9214,
      phone: '843-171-4744'
    },
    {
      id: 45,
      firstName: 'Shirley',
      lastName: 'Gudgen',
      email: 'sgudgen18@telegraph.co.uk',
      gender: 'Female',
      birthday: '1966-08-08T18:33:31Z',
      salary: 7911,
      phone: '750-504-8551'
    },
    {
      id: 46,
      firstName: 'Gerardo',
      lastName: 'Ossenna',
      email: 'gossenna19@goodreads.com',
      gender: 'Male',
      birthday: '1987-03-26T18:45:57Z',
      salary: 7982,
      phone: '757-156-8492'
    },
    {
      id: 47,
      firstName: 'Elspeth',
      lastName: 'Ugoni',
      email: 'eugoni1a@behance.net',
      gender: 'Female',
      birthday: '1958-07-11T08:29:17Z',
      salary: 9147,
      phone: '448-699-1662'
    },
    {
      id: 48,
      firstName: 'Ellissa',
      lastName: 'Armfield',
      email: 'earmfield1b@ftc.gov',
      gender: 'Female',
      birthday: '1951-04-09T13:52:07Z',
      salary: 7512,
      phone: '518-757-5854'
    },
    {
      id: 49,
      firstName: 'Gwen',
      lastName: 'Sherman',
      email: 'gsherman1c@comcast.net',
      gender: 'Female',
      birthday: '1985-03-31T07:10:27Z',
      salary: 7516,
      phone: '898-821-1262'
    },
    {
      id: 50,
      firstName: 'Kaiser',
      lastName: 'Thominga',
      email: 'kthominga1d@cyberchimps.com',
      gender: 'Male',
      birthday: '1965-05-25T17:39:03Z',
      salary: 6023,
      phone: '345-964-5824'
    },
    {
      id: 51,
      firstName: 'Rozalie',
      lastName: 'Ault',
      email: 'rault1e@zimbio.com',
      gender: 'Female',
      birthday: '1994-09-14T01:14:59Z',
      salary: 5821,
      phone: '504-646-6711'
    },
    {
      id: 52,
      firstName: 'Zenia',
      lastName: 'Melsom',
      email: 'zmelsom1f@is.gd',
      gender: 'Female',
      birthday: '1960-07-11T20:58:00Z',
      salary: 5775,
      phone: '264-781-7240'
    },
    {
      id: 53,
      firstName: 'Beale',
      lastName: 'O Luney',
      email: 'boluney1g@baidu.com',
      gender: 'Male',
      birthday: '1961-11-19T08:44:36Z',
      salary: 7866,
      phone: '510-698-5757'
    },
    {
      id: 54,
      firstName: 'Maggi',
      lastName: 'Doxsey',
      email: 'mdoxsey1h@cisco.com',
      gender: 'Female',
      birthday: '1977-07-10T23:31:52Z',
      salary: 7092,
      phone: '398-859-7041'
    },
    {
      id: 55,
      firstName: 'Nil',
      lastName: 'Ferrarese',
      email: 'nferrarese1i@who.int',
      gender: 'Male',
      birthday: '1961-01-24T08:11:27Z',
      salary: 7037,
      phone: '712-421-2675'
    },
    {
      id: 56,
      firstName: 'Robbie',
      lastName: 'Gernier',
      email: 'rgernier1j@qq.com',
      gender: 'Female',
      birthday: '1967-10-30T02:05:53Z',
      salary: 7959,
      phone: '930-338-8475'
    },
    {
      id: 57,
      firstName: 'Julieta',
      lastName: 'Moultrie',
      email: 'jmoultrie1k@geocities.com',
      gender: 'Female',
      birthday: '1959-11-26T19:34:55Z',
      salary: 9521,
      phone: '990-191-6260'
    },
    {
      id: 58,
      firstName: 'Dunstan',
      lastName: 'Southcombe',
      email: 'dsouthcombe1l@aol.com',
      gender: 'Male',
      birthday: '1962-10-05T01:58:41Z',
      salary: 9988,
      phone: '538-948-3108'
    },
    {
      id: 59,
      firstName: 'Barbabas',
      lastName: 'Gaiter',
      email: 'bgaiter1m@behance.net',
      gender: 'Male',
      birthday: '1964-11-21T16:35:38Z',
      salary: 7979,
      phone: '640-857-0875'
    },
    {
      id: 60,
      firstName: 'Joel',
      lastName: 'Ion',
      email: 'jion1n@dropbox.com',
      gender: 'Male',
      birthday: '1968-01-24T04:16:33Z',
      salary: 7654,
      phone: '470-346-0805'
    },
    {
      id: 61,
      firstName: 'Wilma',
      lastName: 'Bertomier',
      email: 'wbertomier1o@newsvine.com',
      gender: 'Female',
      birthday: '1958-12-14T13:15:18Z',
      salary: 8972,
      phone: '800-894-6218'
    },
    {
      id: 62,
      firstName: 'Neila',
      lastName: 'Ionnisian',
      email: 'nionnisian1p@msu.edu',
      gender: 'Female',
      birthday: '1952-08-19T19:57:42Z',
      salary: 6081,
      phone: '257-518-9401'
    },
    {
      id: 63,
      firstName: 'Grethel',
      lastName: 'Di Franceshci',
      email: 'gdifranceshci1q@yellowbook.com',
      gender: 'Female',
      birthday: '1983-10-21T20:39:37Z',
      salary: 5918,
      phone: '160-304-8318'
    },
    {
      id: 64,
      firstName: 'Dolly',
      lastName: 'Lohan',
      email: 'dlohan1r@fastcompany.com',
      gender: 'Female',
      birthday: '1985-10-03T20:25:17Z',
      salary: 6054,
      phone: '354-156-1015'
    },
    {
      id: 65,
      firstName: 'Patty',
      lastName: 'Hexum',
      email: 'phexum1s@smh.com.au',
      gender: 'Female',
      birthday: '1961-06-06T04:07:39Z',
      salary: 8979,
      phone: '207-203-7786'
    },
    {
      id: 66,
      firstName: 'Heindrick',
      lastName: 'Frounks',
      email: 'hfrounks1t@zimbio.com',
      gender: 'Male',
      birthday: '1971-09-28T22:50:24Z',
      salary: 5479,
      phone: '462-791-2650'
    },
    {
      id: 67,
      firstName: 'Eda',
      lastName: 'Ternent',
      email: 'eternent1u@github.com',
      gender: 'Female',
      birthday: '1967-01-30T08:00:28Z',
      salary: 9294,
      phone: '286-722-9451'
    },
    {
      id: 68,
      firstName: 'Tomasina',
      lastName: 'Valentinetti',
      email: 'tvalentinetti1v@paginegialle.it',
      gender: 'Female',
      birthday: '1952-02-04T03:16:36Z',
      salary: 6915,
      phone: '465-825-0160'
    },
    {
      id: 69,
      firstName: 'Cyb',
      lastName: 'Tschirasche',
      email: 'ctschirasche1w@bloglovin.com',
      gender: 'Female',
      birthday: '1971-08-17T09:17:28Z',
      salary: 9182,
      phone: '921-160-0651'
    },
    {
      id: 70,
      firstName: 'Dare',
      lastName: 'Eckersall',
      email: 'deckersall1x@pcworld.com',
      gender: 'Male',
      birthday: '1979-08-22T14:10:01Z',
      salary: 9942,
      phone: '940-568-0095'
    },
    {
      id: 71,
      firstName: 'Brana',
      lastName: 'Gherardesci',
      email: 'bgherardesci1y@google.ca',
      gender: 'Female',
      birthday: '1967-09-28T17:58:16Z',
      salary: 7693,
      phone: '639-539-4662'
    },
    {
      id: 72,
      firstName: 'Merla',
      lastName: 'McTaggart',
      email: 'mmctaggart1z@time.com',
      gender: 'Female',
      birthday: '1959-05-31T20:25:13Z',
      salary: 9906,
      phone: '964-467-5941'
    },
    {
      id: 73,
      firstName: 'Alla',
      lastName: 'Gumby',
      email: 'agumby20@dion.ne.jp',
      gender: 'Female',
      birthday: '1996-03-22T15:18:04Z',
      salary: 6949,
      phone: '477-291-6995'
    },
    {
      id: 74,
      firstName: 'Austin',
      lastName: 'Rojas',
      email: 'arojas21@cnn.com',
      gender: 'Male',
      birthday: '1977-08-10T08:59:33Z',
      salary: 8134,
      phone: '224-163-2280'
    },
    {
      id: 75,
      firstName: 'Goldina',
      lastName: 'McGuigan',
      email: 'gmcguigan22@oakley.com',
      gender: 'Female',
      birthday: '1970-01-26T06:36:10Z',
      salary: 5347,
      phone: '556-309-4994'
    },
    {
      id: 76,
      firstName: 'Vi',
      lastName: 'Gascard',
      email: 'vgascard23@home.pl',
      gender: 'Female',
      birthday: '1958-02-28T21:44:55Z',
      salary: 8249,
      phone: '293-969-4739'
    },
    {
      id: 77,
      firstName: 'Clive',
      lastName: 'Durn',
      email: 'cdurn24@cnn.com',
      gender: 'Male',
      birthday: '1971-06-26T09:04:10Z',
      salary: 7670,
      phone: '869-427-9625'
    },
    {
      id: 78,
      firstName: 'Arley',
      lastName: 'Trawin',
      email: 'atrawin25@unicef.org',
      gender: 'Male',
      birthday: '1959-12-08T15:43:40Z',
      salary: 6101,
      phone: '560-378-0510'
    },
    {
      id: 79,
      firstName: 'Rodger',
      lastName: 'MacGahey',
      email: 'rmacgahey26@trellian.com',
      gender: 'Male',
      birthday: '1992-08-20T20:06:07Z',
      salary: 6003,
      phone: '474-882-7642'
    },
    {
      id: 80,
      firstName: 'Norrie',
      lastName: 'Pauwel',
      email: 'npauwel27@stanford.edu',
      gender: 'Female',
      birthday: '1983-08-17T08:33:14Z',
      salary: 5806,
      phone: '457-223-4025'
    },
    {
      id: 81,
      firstName: 'Dirk',
      lastName: 'Skillett',
      email: 'dskillett28@nhs.uk',
      gender: 'Male',
      birthday: '1982-02-11T02:41:25Z',
      salary: 6516,
      phone: '871-239-6843'
    },
    {
      id: 82,
      firstName: 'Wilone',
      lastName: 'Trevna',
      email: 'wtrevna29@indiegogo.com',
      gender: 'Female',
      birthday: '1980-09-05T01:33:12Z',
      salary: 7724,
      phone: '660-797-8164'
    },
    {
      id: 83,
      firstName: 'Boonie',
      lastName: 'Pitfield',
      email: 'bpitfield2a@mtv.com',
      gender: 'Male',
      birthday: '1960-10-22T05:46:09Z',
      salary: 7170,
      phone: '476-281-4801'
    },
    {
      id: 84,
      firstName: 'Felice',
      lastName: 'Habergham',
      email: 'fhabergham2b@purevolume.com',
      gender: 'Female',
      birthday: '1969-03-22T18:25:49Z',
      salary: 9870,
      phone: '254-620-2247'
    },
    {
      id: 85,
      firstName: 'Selina',
      lastName: 'Stanex',
      email: 'sstanex2c@hibu.com',
      gender: 'Female',
      birthday: '1984-05-20T16:59:36Z',
      salary: 5593,
      phone: '577-353-3958'
    },
    {
      id: 86,
      firstName: 'Shannan',
      lastName: 'Stening',
      email: 'sstening2d@amazon.co.jp',
      gender: 'Male',
      birthday: '1972-06-03T09:05:59Z',
      salary: 7809,
      phone: '124-715-0591'
    },
    {
      id: 87,
      firstName: 'Livvyy',
      lastName: 'Thorneloe',
      email: 'lthorneloe2e@bing.com',
      gender: 'Female',
      birthday: '1994-03-25T08:42:42Z',
      salary: 7245,
      phone: '134-838-3550'
    },
    {
      id: 88,
      firstName: 'Gene',
      lastName: 'Coldtart',
      email: 'gcoldtart2f@about.me',
      gender: 'Female',
      birthday: '1971-10-24T05:41:39Z',
      salary: 9366,
      phone: '214-749-2400'
    },
    {
      id: 89,
      firstName: 'Mariellen',
      lastName: 'Poll',
      email: 'mpoll2g@ebay.com',
      gender: 'Female',
      birthday: '1998-06-24T15:03:38Z',
      salary: 8832,
      phone: '248-231-2000'
    },
    {
      id: 90,
      firstName: 'Martica',
      lastName: 'Gillbey',
      email: 'mgillbey2h@artisteer.com',
      gender: 'Female',
      birthday: '1960-09-18T05:59:00Z',
      salary: 6886,
      phone: '623-709-2334'
    },
    {
      id: 91,
      firstName: 'Hunfredo',
      lastName: 'Bulbeck',
      email: 'hbulbeck2i@linkedin.com',
      gender: 'Male',
      birthday: '1973-09-14T00:34:29Z',
      salary: 7817,
      phone: '298-713-5885'
    },
    {
      id: 92,
      firstName: 'Cherey',
      lastName: 'Tetlow',
      email: 'ctetlow2j@yale.edu',
      gender: 'Female',
      birthday: '1952-11-23T23:13:00Z',
      salary: 7904,
      phone: '317-189-5425'
    },
    {
      id: 93,
      firstName: 'Margery',
      lastName: 'Savine',
      email: 'msavine2k@ning.com',
      gender: 'Female',
      birthday: '1983-08-10T11:53:23Z',
      salary: 9509,
      phone: '121-438-1420'
    },
    {
      id: 94,
      firstName: 'Anett',
      lastName: 'Honig',
      email: 'ahonig2l@epa.gov',
      gender: 'Female',
      birthday: '1991-11-29T20:36:28Z',
      salary: 8016,
      phone: '548-623-9266'
    },
    {
      id: 95,
      firstName: 'Lynna',
      lastName: 'Carlucci',
      email: 'lcarlucci2m@apache.org',
      gender: 'Female',
      birthday: '1979-03-22T03:34:59Z',
      salary: 8399,
      phone: '716-777-5846'
    },
    {
      id: 96,
      firstName: 'Dene',
      lastName: 'Schirok',
      email: 'dschirok2n@google.com.br',
      gender: 'Male',
      birthday: '1995-07-12T01:34:27Z',
      salary: 9658,
      phone: '406-241-3290'
    },
    {
      id: 97,
      firstName: 'Verile',
      lastName: 'De Micoli',
      email: 'vdemicoli2o@omniture.com',
      gender: 'Female',
      birthday: '1952-04-02T17:17:42Z',
      salary: 9714,
      phone: '774-635-0841'
    },
    {
      id: 98,
      firstName: 'Claudio',
      lastName: 'Liles',
      email: 'cliles2p@yahoo.co.jp',
      gender: 'Male',
      birthday: '1983-07-20T00:52:22Z',
      salary: 6136,
      phone: '913-494-8369'
    },
    {
      id: 99,
      firstName: 'Clarette',
      lastName: 'Carncross',
      email: 'ccarncross2q@go.com',
      gender: 'Female',
      birthday: '1985-10-05T05:31:17Z',
      salary: 9033,
      phone: '469-572-7849'
    },
    {
      id: 100,
      firstName: 'Torre',
      lastName: 'Doppler',
      email: 'tdoppler2r@yolasite.com',
      gender: 'Male',
      birthday: '1998-05-17T10:20:30Z',
      salary: 6924,
      phone: '766-973-5223'
    }
  ];

  constructor() { }

  getAllData() {
    return this.data;
  }
}
