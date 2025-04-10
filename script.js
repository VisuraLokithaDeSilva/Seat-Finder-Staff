const nameInput = document.getElementById("nameInput");
const seatNumberInput = document.getElementById("seatNumber");
const suggestionsList = document.getElementById("suggestions");

const members = [
    { name: "Hon. K.V. Samantha Vidyarathna", seat: "G-01 (Badulla)" },
    { name: "Hon. Sunil Handunnetti", seat: "G-02 (Matara)" },
    { name: "Hon. K.D. Lal Kantha", seat: "G-03 (Kandy)" },
    { name: "Hon. Vijitha Herath", seat: "G-04 (Gampaha)" },
    { name: "Hon. (Dr.) Nalinda Jayathissa", seat: "G-05 (Kaluthara)" },
    { name: "Hon. Bimal Rathnayake", seat: "G-06 (National List)" },
    { name: "Hon. (Dr.)(Ms.) Harini Amarasuriya", seat: "G-07 (Colombo)" },
    { name: "Hon. Anura Kumara Dissanayake", seat: "G-08 (Hon. President)" },
    { name: "Hon. Ramalingam Chandrasekar", seat: "G-09 (National List)" },
    { name: "Hon. Wasantha Samarasinghe", seat: "G-10 (Anuradhapura)" },
    { name: "Hon. (Prof.) A.H.M.H. Abayarathna", seat: "G-11 (Puttalam)" },
    { name: "Hon. Chrishantha Abeysena", seat: "G-12 (Gampaha)" },
    { name: "Hon. (Prof.) Anil Jayantha", seat: "G-13 (Gampaha)" },
    { name: "Hon. Harshana Nanayakkara (AAL)", seat: "G-14 (Colombo)" },
    { name: "Hon. (Dr.) Dammika Patabendi", seat: "G-15 (Kegalla)" },
    { name: "Hon. (Mrs.) Saroja Savithri Paulraj", seat: "G-16 (Matara)" },
    { name: "Hon. Ananda Wijepala", seat: "G-17 (Kurunegala)" },
    { name: "Hon. (Dr.) Hiniduma Sunil Senevi", seat: "G-18 (Ratnapura)" },
    { name: "Hon. Sunil Kumara Gamage", seat: "G-19 (National List)" },
    { name: "Hon. Kumara Jayakody", seat: "G-20 (National List)" },
    { name: "Hon. (Dr.) Rizvie Salih", seat: "G-21 (Colombo)" },
    { name: "Hon. Anura Karunathilaka", seat: "G-22 (National List)" },
    { name: "Hon. (Dr.) Upali Pannilage", seat: "G-23 (National List)" },
    { name: "Hon. Nihal Galappaththi", seat: "G-24 (Hambantota)" },
    { name: "Hon. (Dr.) Nihal Abeysinghe", seat: "G-25 (Kalutara)" },
    { name: "Hon. Namal Karunaratne", seat: "G-26 (Kurunegala)" },
    { name: "Hon. Wasantha Piyathissa", seat: "G-27 (Digamadulla)" },
    { name: "Hon. Gamagedara Dissanayake", seat: "G-28 (Matale)" },
    { name: "Hon. R.M. Jayawardhana", seat: "G-29 (Moneragala)" },
    { name: "Hon. Sunil Watagala (AAL)", seat: "G-30 (Colombo)" },
    { name: "Hon. Rathna Gamage", seat: "G-31 (Galle)" },
    { name: "Hon. Mahinda Jayasinghe", seat: "G-32 (Gampaha)" },
    { name: "Hon. Chathuranga Abeysinghe", seat: "G-33 (Colombo)" },
    { name: "Hon. Eranga Gunasekara", seat: "G-34 (Colombo)" },
    { name: "Hon. Upali Samarasingha", seat: "G-35 (National List)" },
    { name: "Hon. T. B. Sarath", seat: "G-36 (Polonnaruwa)" },
    { name: "Hon. Nalin Hewage", seat: "G-37 (Galle)" },
    { name: "Hon. (Dr.) Prasanna Gunasena", seat: "G-38 (Kandy)" },
    { name: "Hon. Anton Jayakody", seat: "G-39 (Puttalam)" },
    { name: "Hon. Sundaralingam Pradeep", seat: "G-40 (Ratnapura)" },
    { name: "Hon. (Mrs.) Hemali Weerasekara", seat: "G-41 (Gampaha)" },
    { name: "Hon. Ruwan Ranasinghe", seat: "G-42 (National List)" },
    { name: "Hon. Muneer Mulaffer", seat: "G-43 (Gampaha)" },
    { name: "Hon. (Dr.) Susil Ranasinghe", seat: "G-44 (Anuradhapura)" },
    { name: "Hon. (Dr.) Hansaka Wijemuni", seat: "G-45 (Kandy)" },
    { name: "Hon. Eranga Weerarathna", seat: "G-46 (National List)" },
    { name: "Hon. (Dr.) Namal Sudarshana", seat: "G-47 (Kurunegala)" },
    { name: "Hon. P. Ruwan Senarath", seat: "G-48 (Hambantota)" },
    { name: "Hon. (Dr.) Madhura Senevirathna", seat: "G-49 (Nuwara Eliya)" },
    { name: "Hon. Arun Hemachandra", seat: "G-50 (Trincomalee)" },
    { name: "Hon. Janitha Ruwan Kodithuwakku", seat: "G-51 (National List)" },
    { name: "Hon. Maj Gen (Rtd) Aruna Jayasekera", seat: "G-52 (National List)" },
    { name: "Hon. Sugath Thilakaratne", seat: "G-53 (National List)" },
    { name: "Hon.(Dr.) Harshana Suriyapperuma", seat: "G-54 (National List)" },
    { name: "Hon. Asoka Sapumal Ranwala", seat: "G-55 (Gampaha)" },
    { name: "Hon. Lakshman Nipuna Arachchi", seat: "G-56 (Colombo)" },
    { name: "Hon. R.M. Gamini Rathnayake", seat: "G-57 (National List)" },
    { name: "Hon. Manjula Suraweera Arachchi", seat: "G-58 (Nuwara Eliya)" },
    { name: "Hon. K. Ilankumaran", seat: "G-59 (Jaffna)" },
    { name: "Hon. Shantha Pathma Kumara Subasinga", seat: "G-60 (Ratnapura)" },
    { name: "Hon. (Mrs.) Samanmali Gunasingha", seat: "G-61 (Colombo)" },
    { name: "Hon. Gayan Janaka", seat: "G-62 (Puttalam)" },
    { name: "Hon. Ajith Agalakada", seat: "G-63 Moneragala)" },
    { name: "Hon. (Mrs.) Sagarika Athauda (AAL)", seat: "G-64 (Kegalla)" },
    { name: "Hon. Roshan Akmeemana", seat: "G-65 (Trincomalee)" },
    { name: "Hon. U.P. Abeywickrama (AAL)", seat: "G-66 (Gampaha)" },
    { name: "Hon. (Prof.) L.M. Abeywickrama", seat: "G-67 (Matara)" },
    { name: "Hon. M.K.M. Aslam", seat: "G-68 (Kurunegala)" },
    { name: "Hon. (Dr.)(Ms.) Kaushalya Ariyarathne", seat: "G-69 (Colombo)" },
    { name: "Hon. Asitha Niroshana Egoda Vithana", seat: "G-70 (Colombo)" },
    { name: "Hon. Arkam Ilyas", seat: "G-71 (Matara)" },
    { name: "Hon. (Mrs.) Oshani Umanga", seat: "G-72 (Kalutara)" },
    { name: "Hon. (Ms.) Krishnan Kalaichelvi", seat: "G-73 (Nuwara Eliya)" },
    { name: "Hon. Upul Kithsiri", seat: "G-74 (Ratnapura)" },
    { name: "Hon. Wasantha Pushpa Kumara", seat: "G-75 (Ratnapura)" },
    { name: "Hon. Chaminda Lalith Kumara", seat: "G-76 (Gampaha)" },
    { name: "Hon. Sarath Kumara (AAL)", seat: "G-77 (Moneragala)" },
    { name: "Hon. (Mrs.) Nilanthi Kottahachchi (AAL)", seat: "G-78 (Kalutara)" },
    { name: "Hon. (Mrs.) M.A.C.S. Chathuri Gangani", seat: "G-79 (Moneragala)" },
    { name: "Hon. Lasith Bhashana Gamage", seat: "G-80 (Gampaha)" },
    { name: "Hon. Thilanka U. Gamage", seat: "G-81 (Galle)" },
    { name: "Hon. (Mrs.) Nilusha Lakmali Gamage", seat: "G-82 (Ratnapura)" },
    { name: "Hon. Ajantha Gammeddage", seat: "G-83 (Matara)" },
    { name: "Hon. Ajith Gihan", seat: "G-84 (Puttalam)" },
    { name: "Hon. (Dr.)Jagath Gunawardana", seat: "G-85 (Kurunegala)" },
    { name: "Hon. Ashoka Gunasena", seat: "G-86 (Kurunegala)" },
    { name: "Hon. Ruwanthilaka Jayakody", seat: "G-87 (Gampaha)" },
    { name: "Hon. Kosala Nuwan Jayaweera", seat: "G-88 (Kegalla)" },
    { name: "Hon. (Mrs.) Thushari Jayasingha (AAL)", seat: "G-89 (Kandy)" },
    { name: "Hon. T.K. Jayasundara", seat: "G-90 (Galle)" },
    { name: "Hon. Mayilvaganam Jegathiswaran", seat: "G-91 (Vanni)" },
    { name: "Hon. Rajeevan Jeyachandramoorthy", seat: "G-92 (Jaffna)" },
    { name: "Hon. Sellaththamby Thilaganathan", seat: "G-93 (Vanni)" },
    { name: "Hon. (Mrs.) Anushka Thilakarathne (AAL)", seat: "G-94 (Nuwara Eliya)" },
    { name: "Hon. Chandana Thennakoon", seat: "G-95 (Kurunegala)" },
    { name: "Hon. Thanura Dissanayake", seat: "G-96 (Kandy)" },
    { name: "Hon. Sugath Wasantha de Silva", seat: "G-97 (National List)" },
    { name: "Hon. Darmapriya Dissanayaka", seat: "G-98 (Kurunegala)" },
    { name: "Hon. Sujeewa Dissanayake", seat: "G-99 (Kurunegala)" },
    { name: "Hon. Susantha Dodawatta (AAL)", seat: "G-100 Colombo)" },
    { name: "Hon. Susantha Kumara Nawarathna", seat: "G-101 (Anuradhapura)" },
    { name: "Hon. (Prof.) Sena Nanayakkara", seat: "G-102 (Anuradhapura)" },
    { name: "Hon. Nandana Pathmakumara", seat: "G-103 (Kalutara)" },
    { name: "Hon. Aruna Panagoda", seat: "G-104 (Colombo)" },
    { name: "Hon. Nimal Palihena", seat: "G-105 (Anuradhapura)" },
    { name: "Hon. Nishantha Perera", seat: "G-106 (Galle)" },
    { name: "Hon. Stepni Fernando", seat: "G-107 (Gampaha)" },
    { name: "Hon. Kanthasamy Prabu", seat: "G-108 (Batticaloa)" },
    { name: "Hon. Lal Premanath", seat: "G-109 (Matara)" },
    { name: "Hon. Nanda Bandara", seat: "G-110 (Kurunegala)" },
    { name: "Hon. Padmasiri Bandara", seat: "G-111 (Polonnaruwa)" },
    { name: "Hon. Ravindra Bandara", seat: "G-112 (Badulla)" },
    { name: "Hon. Sudath Balagalla", seat: "G-113 (Badulla)" },
    { name: "Hon. (Dr.) Sri Bavanandarajah", seat: "G-114 (Jaffna)" },
    { name: "Hon. E.M. Basnayaka", seat: "G-115 (Kandy)" },
    { name: "Hon. Wijesiri Basnayake", seat: "G-116 (Kurunegala)" },
    { name: "Hon. Sunil Biyanwila", seat: "OG-65 (Matale)" },
    { name: "Hon. (Dr.) Sandaruwan Madarasinghe", seat: "OG-66 (Hambantota)" },
    { name: "Hon. Prageeth Madhuranga", seat: "OG-67 (Gampaha)" },
    { name: "Hon. Jagath Manuwarna", seat: "OG-68 (Kandy)" },
    { name: "Hon. Ruwan Mapalagama", seat: "OG-69 (Gampaha)" },
    { name: "Hon. (Dr.) Nandana Millagala", seat: "OG-70 (Kegalla)" },
    { name: "Hon. Riyas Farook", seat: "OG-71 (Kandy)" },
    { name: "Hon. Danushka Ranganath", seat: "OG-72 (Kalutara)" },
    { name: "Hon. Sanjeewa Ranasingha", seat: "OG-81 (Kalutara)" },
    { name: "Hon. Sunil Rathnasiri", seat: "OG-82 (Polonnaruwa)" },
    { name: "Hon. Manjula Sugath Rathnayaka", seat: "OG-83 (Digamadulla)" },
    { name: "Hon. (Mrs.) A.M.M.M. Rathwaththe", seat: "OG-84 (Digamadulla)" },
    { name: "Hon. Manoj Rajapaksha", seat: "OG-85 (Kegalla)" },
    { name: "Hon. Sunil Rajapaksha", seat: "OG-86 (Ratnapura)" },
    { name: "Hon. (Mrs.) Hasara Liyanage (AAL)", seat: "OG-87 (Galle)" },
    { name: "Hon. (Mrs.) Deepthi Wasalage", seat: "OG-88 (Matale)" },
    { name: "Hon. Kanchana Welipitiya", seat: "OG-89 (Kegalla)" },
    { name: "Hon. R.G. Wijerathna", seat: "OG-90 (Nuwara Eliya)" },
    { name: "Hon. Dr. Nishantha Samaraweera", seat: "OG-91 (Galle)" },
    { name: "Hon. Priyantha Wijerathna (AAL)", seat: "OG-92 (Digamadulla)" },
    { name: "Hon. Ruwan Wijeweera", seat: "OG-93 (Moneragala)" },
    { name: "Hon. Darmapriya Wijesinghe", seat: "OG-94 (Gampaha)" },
    { name: "Hon. (Mrs.) Hiruni Wijesinghe (AAL)", seat: "OG-95 (Puttalam)" },
    { name: "Hon. Athula Welandagoda", seat: "OG-96 (Hambantota)" },
    { name: "Hon. Fasmin Sharif", seat: "OG-97 (Kandy)" },
    { name: "Hon. Dinindu Saman", seat: "OG-98 (Badulla)" },
    { name: "Hon. Thilina Samarakoon", seat: "OG-99 (Anuradhapura)" },
    { name: "Hon. (Ms.) Ambika Samivel", seat: "OG-100 (Badulla)" },
    { name: "Hon. Dewananda Suraweera", seat: "OG-101 (Colombo)" },
    { name: "Hon. Chandana Sooriyaarachchi", seat: "OG-102 (Colombo)" },
    { name: "Hon. Major General Sooriyabandara", seat: "OG-103 (Kurunegala)" },
    { name: "Hon. Aravinda Senarath", seat: "OG-104 (Hambantota)" },
    { name: "Hon. Kitnan Selvaraj", seat: "OG-105 (Nuwara Eliya)" },
    { name: "Hon. (Dr.) Janaka Senarathna", seat: "OG-106 (Ratnapura)" },
    { name: "Hon. Chandima Hettiaratchi", seat: "OG-107 (Kalutara)" },
    { name: "Hon. Champika Hettiarachchi", seat: "OG-108 (Gampaha)" },
    { name: "Hon. Dinesh Hemantha", seat: "OG-109 (Matale)" },
    { name: "Hon. (Mrs.) Geetha Herath (AAL)", seat: "OG-110 (Kurunegala)" },
    { name: "Hon. Bhagya Sri Herath (AAL)", seat: "OG-111 (Anuradhapura)" },
    { name: "Hon. Muhammad Faizal", seat: "OG-112 (Puttalam)" },
    { name: "Hon. Aboobucker Athambawa", seat: "OG-113 (National List)" },
    { name: "Hon. (Dr.) Najith Indika", seat: "OG-114 (National List)" },
    { name: "Hon. (Ms.) Lakmali Hemachandra (AAL)", seat: "OG-115 (National List)" },
    { name: "Hon. Mano Ganesan", seat: "O-01 (National List)" },
    { name: "Hon. Kabir Hashim", seat: "O-02 (Kegalla)" },
    { name: "Hon. Palani Thigambaram", seat: "O-03 (Nuwara Eliya)" },
    { name: "Hon. Rishad Bathiudeen", seat: "O-04 (Vanni)" },
    { name: "Hon. Rauff Hakeem (AAL)", seat: "O-05 (Kandy)" },
    { name: "Hon. R. M. Ranjith Madduma Bandara", seat: "O-06 (National List)" },
    { name: "Hon. Gayantha Karunathilleka", seat: "O-07 (Galle)" },
    { name: "Hon. Sajith Premadasa", seat: "O-08 (Colombo)" },
    { name: "Hon. Ravi Karunanayake", seat: "O-09 (National List)" },
    { name: "Hon. (Dr.) M.L.A.M. Hizbullah", seat: "O-10 (Battcola)" },
    { name: "Hon. Namal Rajapaksa (AAL)", seat: "O-11 (National List)" },
    { name: "Hon. Jeevan Thondaman", seat: "O-12 (Nuwara Eliya)" },
    { name: "Hon. Kader Masthan", seat: "O-13 (Vanni)" },
    { name: "Hon. Amirthanathan Adaikkalanathan", seat: "O-14 (Vanni)" },
    { name: "Hon. G.G. Ponnambalam", seat: "O-15 (Jaffna)" },
    { name: "Hon. (Dr.) Ramanathan Archchuna", seat: "O-16 (Jaffna)" },
    { name: "Hon. M.A.M. Thahir", seat: "O-17 (Digamadulla)" },
    { name: "Hon. Dilith Jayaweera", seat: "O-18 (National List)" },
    { name: "Hon. Shanakiyan Rajaputhiran Rasamanickam", seat: "O-19 (Batticola)" },
    { name: "Hon. Sivagnanam Shritharan", seat: "O-20 (Jaffna)" },
    { name: "Hon. Dayasiri Jayasekara (AAL)", seat: "O-21 (Kurunegala)" },
    { name: "Hon. (Dr.) Harsha de Silva", seat: "O-22 (Colombo)" },
    { name: "Hon. Ajith P. Perera", seat: "O-23 (Kalutara)" },
    { name: "Hon. Sujeewa Senasinghe (AAL)", seat: "O-24 (National List)" },
    { name: "Hon. (Dr.) V.S. Radhakrishnan", seat: "O-25 (Nuwara Eliya)" },
    { name: "Hon. Dilip Wedaarachchi", seat: "O-26 (Hambantota)" },
    { name: "Hon. J.C. Alawathuwala", seat: "O-27 (Kurunegala)" },
    { name: "Hon. Nalin Bandara Jayamaha", seat: "O-28 (Kurunegala)" },
    { name: "Hon. Hector Appuhamy", seat: "O-29 (Puttalam)" },
    { name: "Hon. Hesha Withanage", seat: "O-30 (Ratnapura)" },
    { name: "Hon. (Dr.) Kavinda Heshan Jayawardhana", seat: "O-31 (Gampaha)" },
    { name: "Hon. Sujith Sanjaya Perera", seat: "O-32 (Kegalla)" },
    { name: "Hon. S.M. Marikkar", seat: "O-33 (Colombo)" },
    { name: "Hon. Imran Maharoof", seat: "O-34 (Trincomalee)" },
    { name: "Hon. Harshana Rajakaruna", seat: "O-35 (Gampaha)" },
    { name: "Hon. (Mrs.) Rohini Kumari Wijerathna", seat: "O-36 (Matale)" },
    { name: "Hon. Faiszer Musthapha", seat: "O-37 (National List)" },
    { name: "Hon. Rohitha Abeygunawardhana", seat: "O-38 (Kalutara)" },
    { name: "Hon. Kaveenthiran Kodeeswaran", seat: "O-39 (Digamadulla)" },
    { name: "Hon. Gnanamuththu Srineshan", seat: "O-40 (Batticola)" },
    { name: "Hon. Chaminda Wijesiri", seat: "O-41 (Badulla)" },
    { name: "Hon. Mujibur Rahman", seat: "O-42 (Colombo)" },
    { name: "Hon. Waruna Liyanage", seat: "O-43 (Ratnapura)" },
    { name: "Hon. Kins Nelson", seat: "O-44 (Polonnaruwa)" },
    { name: "Hon. Rohana Bandara", seat: "O-45 (Anuradhapura)" },
    { name: "Hon. W. H. M. Dharmasena", seat: "O-46 (Moneragala)" },
    { name: "Hon. Nayana Wasalathilaka", seat: "O-47 (Badulla)" },
    { name: "Hon. B. Ariyawansha", seat: "O-48 (Ratnapura)" },
    { name: "Hon. (Ms.) Chamindranee Kiriella (AAL)", seat: "O-49 (Kandy)" },
    { name: "Hon. Chathura Galappaththi", seat: "O-50 (Matara)" },
    { name: "Hon. Chithral Fernando (AAL)", seat: "O-51 (Puttalam)" },
    { name: "Hon. Amila Prasad", seat: "O-52 (Gampaha)" },
    { name: "Hon. Anuradha Jayaratne", seat: "O-53 (Kandy)" },
    { name: "Hon. Chamara Sampath Dasanayake", seat: "O-54 Badulla)" },
    { name: "Hon. D. V. Chanaka", seat: "O-55 (Hambantota)" },
    { name: "Hon. Chanaka Madugoda", seat: "O-56 (Galle)" },
    { name: "Hon. M.S. Uthumalebbe", seat: "O-57 (Digamadulla)" },
    { name: "Hon. K.S. Kugathasan", seat: "O-59 (Trincomalee)" },
    { name: "Hon. Thurairasa Ravikaran", seat: "O-60 (Vanni)" },
    { name: "Hon. Suranga Rathnayaka", seat: "O-61 (Anuradhapura)" },
    { name: "Hon. Jagath Vithana", seat: "O-62 (Kalutara)" },
    { name: "Hon. Ismail Muththu Mohamed", seat: "O-63 (National List)" },
    { name: "Hon. M. Nizam Kariapper (PC)", seat: "O-64 (National List)" },
    { name: "Hon. (Dr.) Elayathamby Srinath", seat: "O-79 (Batticola)" },
    { name: "Hon. (Dr.) Pathmanathan Sathiyalingam", seat: "O-80 (National List)" },
    { name: "Hon. (Dr.) Jagath Wickramaratne", seat: "Speaker" }
    ];



const sequence = [
    'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BB',
    'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BB',
    'EBBBBBEBBBBBE', 'EBBBBBEBBBBBE', 'EBBBBBEBBBBBE', 'EBBBBBEBBBBBE', 'BB',
    'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BB',
    'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB', 'BBBBBBEBBBBBB'
];

const manualNumbers = [
    "G-101", "G-81", "G-61", "G-41", "G-21", "G-01", "O-01", "O-21", "O-41", "O-61", "OG-81", "OG-101", 
    "G-102", "G-82", "G-62", "G-42", "G-22", "G-02", "O-02", "O-22", "O-42", "O-62", "OG-82", "OG-102", 
    "G-103", "G-83", "G-63", "G-43", "G-23", "G-03", "O-03", "O-23", "O-43", "O-63", "OG-83", "OG-103", 
    "G-104", "G-84", "G-64", "G-44", "G-24", "G-04", "O-04", "O-24", "O-44", "O-64", "OG-84", "OG-104", 
    "G-105", "G-85", "G-65", "G-45", "G-25", "G-05", "O-05", "O-25", "O-45", "OG-65", "OG-85", "OG-105", 
    "G-106", "G-86", "G-66", "G-46", "G-26", "G-06", "O-06", "O-26", "O-46", "OG-66", "OG-86", "OG-106", 
    "G-107", "G-87", "G-67", "G-47", "G-27", "G-07", "O-07", "O-27", "O-47", "OG-67", "OG-87", "OG-107", 
    "G-108", "G-88", "G-68", "G-48", "G-28", "G-08", "O-08", "O-28", "O-48", "OG-68", "OG-88", "OG-108", 
    "G-89", "G-69", "G-49", "G-29", "G-09", "O-09", "O-29", "O-49", "OG-69", "OG-89",
    "G-90", "G-70", "G-50", "G-30", "G-10", "O-10", "O-30", "O-50", "OG-70", "OG-90",
    "G-91", "G-71", "G-51", "G-31", "G-11", "O-11", "O-31", "O-51", "OG-71", "OG-91",
    "G-92", "G-72", "G-52", "G-32", "G-12", "O-12", "O-32", "O-52", "OG-72", "OG-92",
    "G-109", "G-93", "G-73", "G-53", "G-33", "G-13", "O-13", "O-33", "O-53", "O-73", "OG-93", "OG-109",
    "G-110", "G-94", "G-74", "G-54", "G-34", "G-14", "O-14", "O-34", "O-54", "O-74", "OG-94", "OG-110",
    "G-111", "G-95", "G-75", "G-55", "G-35", "G-15", "O-15", "O-35", "O-55", "O-75", "OG-95", "OG-111",
    "G-112", "G-96", "G-76", "G-56", "G-36", "G-16", "O-16", "O-36", "O-56", "O-76", "OG-96", "OG-112",
    "G-113", "G-97", "G-77", "G-57", "G-37", "G-17", "O-17", "O-37", "O-57", "O-77", "OG-97", "OG-113",
    "G-114", "G-98", "G-78", "G-58", "G-38", "G-18", "O-18", "O-38", "O-58", "O-78", "OG-98", "OG-114",
    "G-115", "G-99", "G-79", "G-59", "G-39", "G-19", "O-19", "O-39", "O-59", "O-79", "OG-99", "OG-115",
    "G-116", "G-100", "G-80", "G-60", "G-40", "G-20", "O-20", "O-40", "O-60", "O-80", "OG-100", "OG-116"
];

let currentSuggestions = [];
let selectedIndex = -1;
let currentHighlightedSeat = null;

// When the document is ready, generate the seating layout and set up event listeners
document.addEventListener('DOMContentLoaded', function() {
    generateSeatingLayout();

    // If you want the seat number input to be editable (for two-way search), remove "readonly"
    seatNumberInput.removeAttribute("readonly");

    // Listen for input events on both fields
    searchBox.addEventListener("input", function() {
        updateSuggestions(searchBox.value, "name");
    });
    seatNumberInput.addEventListener("input", function() {
        updateSuggestions(seatNumberInput.value, "seat");
    });
});

// Build the seating layout using the sequence and manualNumbers arrays
function generateSeatingLayout() {
    const layoutContainer = document.getElementById('seatingLayout');
    let seatIndex = 0;
    sequence.forEach(row => {
        if (row === 'BB') {
            const rowBreak = document.createElement('div');
            rowBreak.className = 'row-break';
            layoutContainer.appendChild(rowBreak);
        } else {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'row';
            row.split('').forEach(char => {
                if (char === 'B') {
                    const seatDiv = document.createElement('div');
                    seatDiv.className = 'seat';
                    if (seatIndex < manualNumbers.length) {
                        const seatNum = manualNumbers[seatIndex];
                        seatDiv.setAttribute('data-seat', seatNum);
                        seatDiv.setAttribute('title', seatNum);
                        // Display only the number portion (after the dash)
                        seatDiv.textContent = seatNum.split('-')[1];
                        // Set seat color based on prefix
                        if (seatNum.startsWith("G-") || seatNum.startsWith("OG-")) {
                            seatDiv.style.backgroundColor = (seatNum === "OG-116") ? "#DEDAF4" : "#FFADAD";
                        } else if (seatNum.startsWith("O-")) {
                            seatDiv.style.backgroundColor = (["O-73","O-74","O-75","O-76","O-77","O-78","O-58"].includes(seatNum)) ? "#DEDAF4" : "#E7FFCE";
                        }
                        // When a seat is clicked, update the fields and highlight it
                        seatDiv.addEventListener("click", function() {
                            handleSeatClick(seatNum);
                        });
                        seatIndex++;
                    }
                    rowDiv.appendChild(seatDiv);
                } else if (char === 'E') {
                    const emptyDiv = document.createElement('div');
                    emptyDiv.className = 'empty';
                    rowDiv.appendChild(emptyDiv);
                }
            });
            layoutContainer.appendChild(rowDiv);
        }
    });
}

// Called when a seat is clicked
function handleSeatClick(seatNumber) {
    // For this layout, seatNumber is already the complete string (e.g. "G-01")
    const seatPrefix = seatNumber.split(' ')[0]; // In our case, no extra text exists.
    const emptySeats = ["O-73", "O-74", "O-75", "O-76", "O-77", "O-78", "OG-116","O-58"];
    if (emptySeats.includes(seatPrefix)) {
        searchBox.value = "Empty Seat";
        seatNumberInput.value = seatPrefix;
    } else {
        const member = members.find(m => m.seat.toLowerCase().startsWith(seatPrefix.toLowerCase()));
        if (member) {
            searchBox.value = member.name;
            seatNumberInput.value = member.seat;
        } else {
            searchBox.value = "";
            seatNumberInput.value = seatNumber;
        }
    }
    highlightSeat(seatPrefix);
    suggestionsList.style.display = "none";
}

// Updates the suggestion list based on the input value and search type ("name" or "seat")
function updateSuggestions(inputValue, searchBy) {
    suggestionsList.innerHTML = "";
    selectedIndex = -1;
    if (!inputValue.trim()) {
        suggestionsList.style.display = "none";
        currentSuggestions = [];
        return;
    }
    inputValue = inputValue.toLowerCase();
    // Filter member suggestions
    let memberSuggestions = members.filter(member => {
        if (searchBy === "name") {
            return member.name.toLowerCase().includes(inputValue) ||
                   member.seat.toLowerCase().startsWith(inputValue);
        } else {
            return member.seat.toLowerCase().includes(inputValue);
        }
    }).map(member => {
        return { display: member.name, seat: member.seat, type: "member" };
    });
    // Filter empty seat suggestions from manualNumbers (only include if no member occupies that seat)
    let emptySuggestions = manualNumbers.filter(seat => seat.toLowerCase().includes(inputValue))
        .filter(seat => !members.some(member => member.seat.toLowerCase().startsWith(seat.toLowerCase())))
        .map(seat => {
            return { display: "Empty Seat", seat: seat, type: "empty" };
        });
    const suggestions = memberSuggestions.concat(emptySuggestions);
    if (suggestions.length === 0) {
        suggestionsList.style.display = "none";
        currentSuggestions = [];
        return;
    }
    currentSuggestions = suggestions;
    suggestionsList.style.display = "block";
    suggestions.forEach((suggestion, index) => {
        const div = document.createElement("div");
        div.classList.add("suggestion-item");
        div.textContent = suggestion.type === "member"
            ? `${suggestion.display} (${suggestion.seat.split(' ')[0]})`
            : `${suggestion.display} (${suggestion.seat})`;
        div.setAttribute("data-index", index);
        div.addEventListener("click", function() {
            selectSuggestion(index);
        });
        suggestionsList.appendChild(div);
    });
}

// When a suggestion is selected (by click or keyboard), update the fields and highlight the seat
function selectSuggestion(index) {
    const suggestion = currentSuggestions[index];
    if (suggestion.type === "member") {
        searchBox.value = suggestion.display;
        seatNumberInput.value = suggestion.seat;
    } else {
        searchBox.value = "Empty Seat";
        seatNumberInput.value = suggestion.seat;
    }
    suggestionsList.style.display = "none";
    highlightSeat(suggestion.seat.split(' ')[0]);
}

// Highlights the seat element in the layout that matches the given seat prefix
function highlightSeat(seatPrefix) {
    // Remove previous highlights
    document.querySelectorAll(".seat").forEach(seat => seat.classList.remove("highlighted"));
    const seatElement = document.querySelector(`.seat[data-seat="${seatPrefix}"]`);
    if (seatElement) {
        seatElement.classList.add("highlighted");
        currentHighlightedSeat = seatElement;
        seatElement.scrollIntoView({ behavior: "smooth", block: "center" });
    }
}

// Clear button: resets both fields, suggestions, and seat highlights
function clearSearch() {
    searchBox.value = "";
    seatNumberInput.value = "";
    suggestionsList.innerHTML = "";
    suggestionsList.style.display = "none";
    currentSuggestions = [];
    selectedIndex = -1;
    document.querySelectorAll(".highlighted").forEach(seat => seat.classList.remove("highlighted"));
    currentHighlightedSeat = null;
}

// Optional: Keyboard navigation for suggestions (Arrow keys and Enter)
document.addEventListener("keydown", (event) => {
    const items = document.querySelectorAll(".suggestion-item");
    if (items.length === 0) return;
    if (event.key === "ArrowDown") {
        selectedIndex = (selectedIndex + 1) % items.length;
        items.forEach(item => item.classList.remove("selected"));
        items[selectedIndex].classList.add("selected");
    } else if (event.key === "ArrowUp") {
        selectedIndex = (selectedIndex - 1 + items.length) % items.length;
        items.forEach(item => item.classList.remove("selected"));
        items[selectedIndex].classList.add("selected");
    } else if (event.key === "Enter") {
        if (selectedIndex >= 0 && currentSuggestions.length > 0) {
            selectSuggestion(selectedIndex);
        }
    }
});
