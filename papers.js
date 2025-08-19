const allPapers = [
  {
    "id": "p001",
    "title": "Hyperspectral Imaging of Head and Neck Squamous Cell Carcinoma for Cancer Margin Detection using Deep Learning",
    "authors": ["Martin Halicek", "James D. Dormer", "James V. Little"],
    "year": 2019,
    "filename": "paper1.pdf",
    "keyword": ["head", "neck"]
  },
  {
    "id": "p002",
    "title": "Hyperspectral Microscopic Imaging for Automatic Detection of Head and Neck Squamous Cell Carcinoma Using Histologic Image and Machine Learning",
    "authors": ["Ling Maa", "Martin Halicek", "Ximing Zhou"],
    "year": 2020,
    "filename": "paper2.pdf",
    "keyword": ["head", "neck"]
  },
  {
    "id": "p003",
    "title": "Detection of Head and Neck Cancer in Surgical Specimens Using Quantitative Hyperspectral Imaging",
    "authors": ["Guolan Lu", "James V. Little", "Xu Wang"],
    "year": 2017,
    "filename": "paper3.pdf",
    "keyword": ["head", "neck"]
  },
  {
    "id": "p004",
    "title": "Artificial Intelligence in Head and Neck Cancer: A Systematic Review of Systematic Reviews",
    "authors": ["Antti A. Maekitie", "Rasheed Omobolaji Alabi", "Sweet Ping Ng"],
    "year": 2023,
    "filename": "paper4.pdf",
    "keyword": ["head", "neck"]
  },
  {
    "id": "p005",
    "title": "Deep Learning for Dental Hyperspectral Image Analysis",
    "authors": ["Oleksandr Boiko", "Joni Hyttinen", "Pauli Faelt"],
    "year": 2019,
    "filename": "paper5.pdf",
    "keyword": ["oral", "dental"]
  },
  {
    "id": "p006",
    "title": "Classification of Dental Diseases Using Hyperspectral Imaging and Laser Induced Fluorescence",
    "authors": ["Ahmed L. Abdel Gawad", "Yasser El-Sharkawy", "H.S. Ayoub"],
    "year": 2018,
    "filename": "paper6.pdf",
    "keyword": ["dental"]
  },
  {
    "id": "p007",
    "title": "Hyperspectral Imaging of the Oral Cavity",
    "authors": ["V.E Ronaldson", "S. Karthik", "N. Calms"],
    "year": 2016,
    "filename": "paper7.pdf",
    "keyword": ["oral"]
  },
  {
    "id": "p008",
    "title": "Hyperspectral Imaging for Clinical Applications",
    "authors": ["Jonghee Yoon"],
    "year": 2021,
    "filename": "paper8.pdf",
    "keyword": ["head", "neck", "oral", "dental", "skin", "abdomen", "brain"]
  },
  {
    "id": "p009",
    "title": "Tissue Characterization Utilizing Hyperspectral Imaging for Liver Thermal Ablation",
    "authors": ["Mohamed Hisham Aref", "Ibrahim H. Aboughaleb", "Yasser H. El-Sharkawy"],
    "year": 2020,
    "filename": "paper9.pdf",
    "keyword": ["abdomen"]
  },
  {
    "id": "p010",
    "title": "Hyperspectral Image Segmentation and its Application in Abdominal Surgery",
    "authors": ["Hamed Akbari", "Yukio Kosugi"],
    "year": 2009,
    "filename": "paper10.pdf",
    "keyword": ["abdomen"]
  },
  {
    "id": "p011",
    "title": "Comprehensive Hyperspectral Imaging Applications Across Multiple Body Parts",
    "authors": ["Baowei Fei"],
    "year": 2020,
    "filename": "paper11.pdf",
    "keyword": ["head", "neck", "skin", "abdomen", "brain", "oral", "dental"]
  },
  {
    "id": "p012",
    "title": "Use of Hyperspectral/Multispectral Imaging in Gastroenterology",
    "authors": ["Samuel Ortega", "Himar Fabelo", "Dimitris K. Iakovidis"],
    "year": 2019,
    "filename": "paper12.pdf",
    "keyword": ["abdomen"]
  },
  {
    "id": "p013",
    "title": "Medical Hyperspectral Imaging: A Review",
    "authors": ["Guolan Lu", "Baowei Fei"],
    "year": 2014,
    "filename": "paper13.pdf",
    "keyword": ["abdomen", "skin", "brain"]
  },
  {
    "id": "p014",
    "title": "3D-Perfusion Analysis of Burn Wounds Using Hyperspectral Imaging",
    "authors": ["Joerg Marotz", "Torsten Schulz", "Sebastian Seider"],
    "year": 2020,
    "filename": "paper14.pdf",
    "keyword": ["skin"]
  },
  {
    "id": "p015",
    "title": "Hyperspectral Imaging in Woundcare: A Systematic Review",
    "authors": ["Gennadi Saiko", "Phoebe Lombardi", "Yunghan Au"],
    "year": 2020,
    "filename": "paper15.pdf",
    "keyword": ["skin"]
  },
  {
    "id": "p016",
    "title": "Burn Depth Assessment Using Hyperspectral Imaging in a Prospective Single Center Study",
    "authors": ["Joerg Marotz", "Torsten Schulz", "Sebastian Seider"],
    "year": 2021,
    "filename": "paper16.pdf",
    "keyword": ["skin"]
  },
  {
    "id": "p017",
    "title": "Hyperspectral Imaging in the Medical Field: Present and Future",
    "authors": ["Mihaela Antonina", "Sorin Viorel", "Dan Savastru"],
    "year": 2013,
    "filename": "paper17.pdf",
    "keyword": ["head", "neck", "skin", "abdomen", "brain", "oral", "dental"]
  },
  {
    "id": "p018",
    "title": "Review of Spectral Imaging Technology in Biomedical Engineering: Achievements and Challenges",
    "authors": ["Qingli Li", "Xiaofu He", "Yiting Wang"],
    "year": 2013,
    "filename": "paper18.pdf",
    "keyword": ["head", "neck", "skin", "abdomen", "brain", "oral", "dental"]
  },
  {
    "id": "p019",
    "title": "Hyperspectral Imaging for In-Vivo/Ex-Vivo Tissue Analysis of Human Brain Cancer",
    "authors": ["Raquel Leon", "Sofia H. Gelado", "Himar Fabelo"],
    "year": 2020,
    "filename": "paper19.pdf",
    "keyword": ["brain"]
  },
  {
    "id": "p020",
    "title": "Hyperspectral Imaging: A Review and Trends Towards Medical Imaging",
    "authors": ["Shahid Karim", "Akeel Qadir", "Umar Farooq"],
    "year": 2019,
    "filename": "paper20.pdf",
    "keyword": ["abdomen"]
  },
  {
    "id": "p021",
    "title": "A Hyperspectral Imaging System for In Vivo Optical Diagnostics",
    "authors": ["Tuan Vo-Dinh", "David Stokes", "Ramesh Jagannathan"],
    "year": 2004,
    "filename": "paper21.pdf",
    "keyword": ["head", "neck", "skin", "abdomen", "brain", "oral", "dental"]
  },
  {
    "id": "p022",
    "title": "Hyperspectral Imaging Applied to Medical Diagnoses and Food Safety",
    "authors": ["Oscar Carrasco", "Richard Gomez", "Arun Chainani"],
    "year": 2003,
    "filename": "paper22.pdf",
    "keyword": ["head", "neck", "skin", "abdomen", "brain", "oral", "dental"]
  },
  {
    "id": "p023",
    "title": "In-Vivo and Ex-Vivo Tissue Analysis through Hyperspectral Imaging Techniques: Revealing the Invisible Features of Cancer",
    "authors": ["Martin Halicek", "Himar Fabelo", "Samuel Ortega"],
    "year": 2019,
    "filename": "paper23.pdf",
    "keyword": ["head", "neck", "brain", "skin"]
  }
];
