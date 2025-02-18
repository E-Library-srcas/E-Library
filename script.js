document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
        document.getElementById("login-screen").classList.remove("hidden"); // Show login screen after loading
    }, 3000);
});
function authenticateUser() {
    const users = {
        "23129001@srcas.ac.in": "23129001",
        "23129002@srcas.ac.in": "23129002",
        "23129003@srcas.ac.in": "23129003",
        "23129004@srcas.ac.in": "23129004",
        "23129005@srcas.ac.in": "23129005",
        "23129006@srcas.ac.in": "23129006",
        "23129007@srcas.ac.in": "23129007",
        "23129008@srcas.ac.in": "23129008",
        "23129009@srcas.ac.in": "23129009",
        "23129010@srcas.ac.in": "23129010",
        "23129011@srcas.ac.in": "23129011",
        "23129012@srcas.ac.in": "23129012",
        "23129013@srcas.ac.in": "23129013",
        "23129014@srcas.ac.in": "23129014",
        "23129015@srcas.ac.in": "23129015",
        "23129016@srcas.ac.in": "23129016",
        "23129017@srcas.ac.in": "23129017",
        "23129018@srcas.ac.in": "23129018",
        "23129019@srcas.ac.in": "23129019",
        "23129020@srcas.ac.in": "23129020",
        "23129021@srcas.ac.in": "23129021",
        "23129022@srcas.ac.in": "23129022",
        "23129023@srcas.ac.in": "23129023",
        "23129024@srcas.ac.in": "23129024",
        "23129025@srcas.ac.in": "23129025",
        "23129026@srcas.ac.in": "23129026",
        "23129027@srcas.ac.in": "23129027",
        "23129028@srcas.ac.in": "23129028",
        "23129029@srcas.ac.in": "23129029",
        "23129030@srcas.ac.in": "23129030",
        "23129031@srcas.ac.in": "23129031",
        "23129032@srcas.ac.in": "23129032",
        "23129033@srcas.ac.in": "23129033",
        "23129034@srcas.ac.in": "23129034",
        "23129035@srcas.ac.in": "23129035",
        "23129036@srcas.ac.in": "23129036",
        "23129037@srcas.ac.in": "23129037",
        "23129038@srcas.ac.in": "23129038",
        "23129039@srcas.ac.in": "23129039",
        "23129040@srcas.ac.in": "23129040",
        "23129041@srcas.ac.in": "23129041",
        "23129042@srcas.ac.in": "23129042",
        "23129043@srcas.ac.in": "23129043",
        "23129044@srcas.ac.in": "23129044",
        "23129045@srcas.ac.in": "23129045",
        "23129046@srcas.ac.in": "23129046",
        "23129047@srcas.ac.in": "23129047",
        "23129048@srcas.ac.in": "23129048",
        "23129049@srcas.ac.in": "23129049",
        "23129050@srcas.ac.in": "23129050",
        "23129051@srcas.ac.in": "23129051",
        "23129052@srcas.ac.in": "23129052",
        "23129053@srcas.ac.in": "23129053",
        "23129054@srcas.ac.in": "23129054",
        "23129055@srcas.ac.in": "23129055",
        "23129056@srcas.ac.in": "23129056",
        "23129057@srcas.ac.in": "23129057",
        "23129058@srcas.ac.in": "23129058",
        "23129059@srcas.ac.in": "23129059",
        "23129060@srcas.ac.in": "23129060",
        "sample@gmail.com": "sample"
    };
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (users[email] && users[email] === password) {
        document.getElementById("login-screen").style.display = "none";
        document.getElementById("main-content").classList.remove("hidden");
    } else {
        document.getElementById("error-message").innerText = "Invalid credentials!";
    }
}



const books = [
            {
        "title": "Introduction to Python",
        "author": "UDAYAN DAS",
        "edition": "1st",
        "category": "Programming",
        "url": "https://assets.openstax.org/oscms-prodcms/media/documents/Introduction_to_Python_Programming_-_WEB.pdf",
        "image": "https://m.media-amazon.com/images/I/51JrTiMX+ML._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Fundamentals of Python",
        "author": "Kenneth A. Lambert",
        "edition": "2nd",
        "category": "Programming",
        "url": "https://ggnindia.dronacharya.info/Downloads/Sub-info/RelatedBook/PYTHON-TEXT-BOOK-2.pdf",
        "image": "https://i.ytimg.com/vi/DNCAL1GqOvM/hq720.jpg"
    },
    {
        "title": "Python basics notes",
        "author": "Hans Fangohr",
        "edition": "2nd",
        "category": "Programming",
        "url": "https://www.freebookcentre.net/programming-books-download/gotoweb.php?id=11228",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO1MyxpDf0Hx5_KGD0gkzQeFuznTJr98iwwg&s"
    },
    {
        "title": "Introduction to Programming Using Java",
        "author": "David J. Eck",
        "edition": "3rd",
        "category": "Programming",
        "url": "https://www.iitk.ac.in/esc101/share/downloads/javanotes5.pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSb4eoXBNHqsGm5N4Bip_u7AXiOujXOBji_of3ckZRu__bnUic9"
    },
    {
        "title": "Cloud Computing",
        "author": "Jim Dowling",
        "edition": "1st",
        "category": "Cloud Computing",
        "url": "https://www.kth.se/social/files/554fa451f276544829be2e5e/9-cloud-computing.pdf",
        "image": "https://cdn.slidesharecdn.com/ss_thumbnails/9-cloud-computing-230123134716-f0806a0d-thumbnail.jpg"
    },
    {
        "title": "Data Structures & Algorithms in Python",
        "author": "Mitchael T",
        "edition": "none",
        "category": "Programming",
        "url": "https://nibmehub.com/opac-service/pdf/read/Data%20Structures%20and%20Algorithms%20in%20Python.pdf",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1361147120i/13838796.jpg"
    },
            {
        "title": "Learning Python",
        "author": "Mark Lutz",
        "edition": "4th",
        "category": "Programming",
        "url": "https://cfm.ehu.es/ricardo/docs/python/Learning_Python.pdf",
        "image": "https://m.media-amazon.com/images/I/91RcdlPx1CL._AC_UF1000,1000_QL80_.jpg"
    },
            {
        "title": "Python Basics",
        "author": "David Amos",
        "edition": "4th",
        "category": "Programming",
        "url": "https://static.realpython.com/python-basics-sample-chapters.pdf",
        "image": "https://m.media-amazon.com/images/I/71Q0ZUIyUPL._UF1000,1000_QL80_.jpg"
    },
           {
        "title": "Fluent Python",
        "author": "Luciano Ramalho",
        "edition": "2nd",
        "category": "Programming",
        "url": "https://elmoukrie.com/wp-content/uploads/2022/05/luciano-ramalho-fluent-python_-clear-concise-and-effective-programming-oreilly-media-2022.pdf",
        "image": "https://m.media-amazon.com/images/I/81OvszBEdhL._AC_UF1000,1000_QL80_.jpg"
    },
{
        "title": "Python Programming",
        "author": "Hans-Petter Halvorsen",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.halvorsen.blog/documents/programming/python/resources/Python%20Programming.pdf",
        "image": "https://www.halvorsen.blog/documents/programming/python/resources/images/TitlePage1.png"
    },
{
        "title": "Java in a Nutshell",
        "author": "Benjamin J. Evans & David Flanagan",
        "edition": "6th",
        "category": "Programming",
        "url": "https://www.r-5.org/files/books/computers/languages/java/main/Benjamin_Evans_David_Flanagan-Java_in_a_Nutshell_6th_ed-EN.pdf",
        "image": "https://m.media-amazon.com/images/I/91R9esRljJL._AC_UF1000,1000_QL80_.jpg"
    },
{
        "title": "Learn Java in 21 days",
        "author": "Lauraa Lemay",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.cs.cmu.edu/afs/cs.cmu.edu/user/gchen/www/download/java/LearnJava.pdf",
        "image": "https://imgproxy2.pdfroom.com/UdhUjeLDXHy7jmVvrjyiJBrRxV3UW5tbf9XV50zMi0k/rs:auto:200:276:0/g:no/MHEySlFlSkxneEUucG5n.jpg"
    },
{
        "title": "Java for beginners",
        "author": "Riccardo Flask",
        "edition": "2nd",
        "category": "Programming",
        "url": "https://staff.um.edu.mt/__data/assets/pdf_file/0010/57169/jn.pdf",
        "image": "https://2.imimg.com/data2/WE/TT/MY-/6-250x250.jpg"
    },
{
        "title": "Advanced Java",
        "author": "ANDRIY REDKO",
        "edition": "none",
        "category": "Programming",
        "url": "https://enos.itcollege.ee/~jpoial/allalaadimised/reading/Advanced-java.pdf",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1515427610i/37855594.jpg"
    },
{
        "title": "Java Notes for Professionals",
        "author": "Author",
        "edition": "none",
        "category": "Programming",
        "url": "https://goalkicker.com/JavaBook/JavaNotesForProfessionals.pdf",
        "image": "https://goalkicker.com/JavaBook/JavaGrow.png"
    },
{
        "title": "Java for Dummies",
        "author": "Barry Burd",
        "edition": "6th",
        "category": "Programming",
        "url": "https://eprints.triatmamulya.ac.id/1702/1/Java%20for%20Dummies%20(6th%20ed.).pdf",
        "image": "https://m.media-amazon.com/images/I/61hDCvdzBvL._AC_UF1000,1000_QL80_.jpg"
    },
{
        "title": "Java with 101 Examples",
        "author": "Atiwong Suchato",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/01/java101.pdf",
        "image": "https://www.cp.eng.chula.ac.th/books/wp-content/uploads/sites/5/2018/01/java101_cover.png"
    },
{
        "title": "JAVA Programming for Engineers",
        "author": "JULIO SANCHEZ MARIA P. CANTON",
        "edition": "none",
        "category": "Programming",
        "url": "https://api.pageplace.de/preview/DT0400.9781420000009_A25118063/preview-9781420000009_A25118063.pdf",
        "image": "https://m.media-amazon.com/images/I/61nQzwnRNJL._AC_UF1000,1000_QL80_.jpg"
    },
{
        "title": "LEARN JAVATHE EASY WAY",
        "author": "BRYSON PAYNE",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.kea.nu/files/textbooks/humblelearn2code/learnjavatheeasyway.pdf",
        "image": "https://m.media-amazon.com/images/I/81EGXCaqmwL._AC_UF1000,1000_QL80_.jpg"
    },
{
        "title": "A History of Ancient",
        "author": "Upinder Singh",
        "edition": "noone",
        "category": "History",
        "url": "https://tehattagovtcollege.ac.in/Pdf/Resources/History/Online-learning/PDF-Book/INDIAN%20HISTORY%20ANCIENT%20TIME/A%20History%20of%20ancient%20an%20early%20mideaval%20India%20by%20Upinder%20sing.pdf",
        "image": "https://m.media-amazon.com/images/I/91N9nb4kw-L._UF1000,1000_QL80_.jpg"
    },
{
        "title": "THEMES IN INDIAN HISTORY",
        "author": "Agrahayana",
        "edition": "2nd",
        "category": "History",
        "url": "https://afeias.com/wp-content/uploads/2023/06/HISTORY-ENGLISH.pdf",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSbFmEBjNIGQpqPLwVbCuE8RvRSpiDgo3Lqg3C_20DK2g_RsQHW"
    },
{
        "title": "The Penguin History of Early India",
        "author": "ROMILA THAPAR",
        "edition": "none",
        "category": "History",
        "url": "https://www.furkatingcollege.edu.in/wp-content/uploads/2021/05/History-of-Early-India-From-the-Origins-to-AD-1300_Thapar.pdf",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/41PTXOrQs7L._AC_UL600_SR600,600_.jpg"
    },
{
        "title": "U.S. History",
        "author": "Author",
        "edition": "none",
        "category": "History",
        "url": "https://d3bxy9euw4e147.cloudfront.net/oscms-qa/media/documents/USHistory-LR.pdf",
        "image": "https://imgv2-2-f.scribdassets.com/img/document/530323643/149x198/9b1a9227ed/1720295297?v=1"
    },
{
        "title": "WORLD HISTORY",
        "author": "Des Moines",
        "edition": "none",
        "category": "History",
        "url": "https://publications.iowa.gov/27598/1/World%20History%201930.pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6s7lkJ38eFInm6Y4-YDr2xpRpbv1ZDpsqGgM9eN-_-UP7v9Qk"
    },
    {
        "title": "Python Tips",
        "author": "Muhammad Yasoob Ullah Khalid",
        "edition": "1st",
        "category": "Programming",
        "url": "https://book.pythontips.com/_/downloads/en/latest/pdf/",
        "image": "https://yasoob.me/wp-content/uploads/2015/08/cover.png"
    },
    {
        "title": "OBJECT-ORIENTED PYTHON",
        "author": "IRV KALB",
        "edition": "none",
        "category": "Programming",
        "url": "https://matematika-mipa.unsri.ac.id/wp-content/uploads/2022/05/Object-Oriented-Python-Master-OOP-by-Building-Games-and-GUIs-Irv-Kalb-z-lib.org_.pdf",
        "image": "https://m.media-amazon.com/images/I/81PGT1MdwUL._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Python Tricks The Book",
        "author": "Dan Bader",
        "edition": "none",
        "category": "Programming",
        "url": "https://static.realpython.com/python-tricks-book/Python%20Tricks%20Sample.pdf",
        "image": "https://m.media-amazon.com/images/I/815VmQScW4L._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Fun Python",
        "author": "Rada Mihalcea",
        "edition": "none",
        "category": "Programming",
        "url": "https://web.eecs.umich.edu/~mihalcea/urls/FunPython.pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcJUdoxsZuHVu_J-ztbH36vrVvvFKGv6_KEPhkNvl3jCHofNWG"
    },
    {
        "title": "A SmarterWay to Learn Python",
        "author": "Mark Myers",
        "edition": "none",
        "category": "Programming",
        "url": "https://digtvbg.com/files/books-for-hacking/A%20Smarter%20Way%20to%20Learn%20Python%20-%20Learn%20it%20faster.%20Remember%20it%20longer.%20by%20Mark%20Myers.pdf",
        "image": "https://m.media-amazon.com/images/I/61vWVpKbx8L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "PYTHON WORKBOOK",
        "author": "Author",
        "edition": "none",
        "category": "Programming",
        "url": "https://mpbou.edu.in/uploads/files/Python_Workbook_Learn_How_to_Quickly_and_Effectively_Program_with_Exercises,_Projects,_and_Solutions_(Programming_Languages_Academy)_(1).pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQlgtZPEK9OZEO-KBE61HtdVtd_NgEI4gNa3H-h9RV1KfpAna9-"
    },
    {
        "title": "Python Small Projects",
        "author": "AL SWEIGART",
        "edition": "none",
        "category": "Programming",
        "url": "https://edu.anarcho-copy.org/Programming%20Languages/Python/BigBookSmallPythonProjects.pdf",
        "image": "https://m.media-amazon.com/images/I/71Qp645PuKL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "PYTHON PLAYGROUND",
        "author": "MAHESH VENKITACHAL AM",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.kea.nu/files/textbooks/humblepy/pythonplayground_geekyprojectsforthecuriousprogrammer.pdf",
        "image": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1444635675i/22978167.jpg"
    },
    {
        "title": "Python Beyond The Basics",
        "author": "AL SWEIGART",
        "edition": "none",
        "category": "Programming",
        "url": "https://cdn.ttgtmedia.com/rms/pdf/ebook_NoStarch_BeyondtheBasicStuffwithPython.pdf",
        "image": "https://m.media-amazon.com/images/I/71PAmeWNLJL._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Real World Python",
        "author": "LEE VAUGHAN",
        "edition": "none",
        "category": "Programming",
        "url": "https://library.kre.dp.ua/Books/2-4%20kurs/%D0%9C%D0%BE%D0%B2%D0%B8%20%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F/Python/Real_World_Python_A_Hacker%27s_Guide_to_Solving_Problems_with_Code_2021.pdf",
        "image": "https://m.media-amazon.com/images/I/71HrQyqRf2L._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Python Data Science Essentials",
        "author": "Alberto Boschetti and Luca Massaron",
        "edition": "3rd",
        "category": "Programming",
        "url": "https://aaronyeo.org/books_/Data_Science/Python/Python%20Data%20Science%20Essentials.pdf",
        "image": "https://m.media-amazon.com/images/I/71ogWa4hR-L._UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Python for Data Analysis",
        "author": "Wes McKinney",
        "edition": "2nd",
        "category": "Programming",
        "url": "https://nibmehub.com/opac-service/pdf/read/Python%20for%20Data%20Analysis%20_%20data%20wrangling%20with%20Pandas-%20NumPy-%20and%20IPython.pdf",
        "image": "https://m.media-amazon.com/images/I/912I2EtdCbL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Machine Learning with Python",
        "author": "Andreas C. Müller & Sarah Guido",
        "edition": "none",
        "category": "Programming",
        "url": "https://www.nrigroupindia.com/e-book/Introduction%20to%20Machine%20Learning%20with%20Python%20(%20PDFDrive.com%20)-min.pdf",
        "image": "https://m.media-amazon.com/images/I/911CH8DQeUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Buried in the Red Dirt",
        "author": "Frances S. Hasso",
        "edition": "none",
        "category": "History",
        "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/A47416428BE9E8F9E03BA624A65831BC/9781316513545AR.pdf",
        "image": "https://assets.cambridge.org/97813165/13545/cover/9781316513545.jpg"
    },
    {
        "title": "Living for the City",
        "author": "Miles Larmer",
        "edition": "none",
        "category": "History",
        "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/29E9C8673D3BC6498AEFA2F297EF0AE5/9781108833158AR.pdf",
        "image": "https://assets.cambridge.org/97811089/72772/cover/9781108972772.jpg"
    },
    {
        "title": "Pirates of Empire",
        "author": "Stefan Eklöf Amirell",
        "edition": "none",
        "category": "History",
        "url": "https://www.cambridge.org/core/services/aop-cambridge-core/content/view/5E1D8EA4E7DCDD5A3B4384E8FC61C0CF/9781108484213AR.pdf",
        "image": "https://assets.cambridge.org/97811087/06100/cover/9781108706100.jpg"
    },
    {
        "title": "OUR PASTS-I",
        "author": "Author",
        "edition": "none",
        "category": "History",
        "url": "https://www.drishtiias.com/images/pdf/History6.pdf",
        "image": "https://website-assets.studocu.com/img/document_thumbnails/6de0d9750667d35da0b319dc3bcd9811/thumb_1200_1603.png"
    },
    {
        "title": "BACHELOR OF ARTS IN HISTORY",
        "author": "Ms. Aliva Panda",
        "edition": "none",
        "category": "History",
        "url": "https://ddceutkal.ac.in/Downloads/UG_SLM/History/GE_1.pdf",
        "image": "https://imgv2-1-f.scribdassets.com/img/document/788158235/149x198/9e259362a0/1730785643?v=1"
    },
    {
        "title": "Universal History",
        "author": "TYTLER",
        "edition": "1st",
        "category": "History",
        "url": "https://maint.loc.gov/law/mlr/Lieber_Collection-pdf/Universal-History_Vol-I.pdf",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWvo7hkkhj27f0TJBNt4S0HGrxMPvaapKu8YQyrKUyUjHy5ngp"
    },
    {
        "title": "MODERN INDIA EDITORIAL BOARD",
        "author": "Dr. S. Gopal",
        "edition": "none",
        "category": "History",
        "url": "https://blogmedia.testbook.com/kmat-kerala/wp-content/uploads/2023/05/history-of-modern-india-bipin-chandra.wifigyan.com_-36a55e3a.pdf",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcUMwYO6Hyv9ZV4828ObfK4ksIZRKDvNpytsWeOo46UoIs_s7"
    },
    {
        "title": "THE STORY OF CIVILIZATION",
        "author": "ARJUN DEV",
        "edition": "2nd",
        "category": "History",
        "url": "https://www.insightsonindia.com/wp-content/uploads/2013/07/old-ncert-world-history-class-10-pdf-format.pdf",
        "image": "https://imgv2-2-f.scribdassets.com/img/document/238150598/original/63209af4b3/1?v=1"
    },
    {
        "title": "Modern Physics",
        "author": "Paul A. Tipler",
        "edition": "5th",
        "category": "Physics",
        "url": "https://web.pdx.edu/~pmoeck/books/Tipler_Llewellyn.pdf",
        "image": "https://m.media-amazon.com/images/I/51ogaTcn16L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Introductory Physics I",
        "author": "Robert G. Brown",
        "edition": "none",
        "category": "Physics",
        "url": "https://webhome.phy.duke.edu/~rgb/Class/intro_physics_1/intro_physics_1.pdf",
        "image": "https://m.media-amazon.com/images/I/911-2v5Yq8L.jpg"
    },
    {
        "title": "Particle Physics Reference Library",
        "author": "Herwig Schopper",
        "edition": "1st",
        "category": "Physics",
        "url": "https://library.oapen.org/bitstream/20.500.12657/41755/1/2020_Book_ParticlePhysicsReferenceLibrar.pdf",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/28263/2020_Book_ParticlePhysicsReferenceLibrar.pdf.jpg"
    },
    {
        "title": "Selected Topics in Plasma Physics",
        "author": "y Sukhmander Singh",
        "edition": "none",
        "category": "Physics",
        "url": "https://mts.intechopen.com/storage/books/8490/authors_book/authors_book.pdf",
        "image": "https://m.media-amazon.com/images/I/61ZqrzR3A0L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Shaping the Future of Biological Education Research",
        "author": "Konstantinos Korfiatis",
        "edition": "none",
        "category": "Biology",
        "url": "https://library.oapen.org/bitstream/20.500.12657/86132/1/978-3-031-44792-1.pdf",
        "image": "https://m.media-amazon.com/images/I/61xd9BOyy4L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Foundations of Theoretical Approaches in Systems Biology",
        "author": " Alberto Marin-Sanguino",
        "edition": "none",
        "category": "Biology",
        "url": "https://www.frontiersin.org/research-topics/3688/pdf",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/47958/Thumb_166.jpg"
    },
    {
        "title": "Advanced Biology",
        "author": "Dr. P. Muthukumaran",
        "edition": "none",
        "category": "Biology",
        "url": "https://skyfox.co/wp-content/uploads/2020/08/Advanced-biology.pdf",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsh0gI4u5O1jN2lfX-wQ28hwWPHxtXM-00o3S5usUBTHNNVBTn"
    },
    {
        "title": "Chemical Biology",
        "author": "Deniz Ekinci",
        "edition": "none",
        "category": "Biology",
        "url": "https://mts.intechopen.com/storage/books/2232/authors_book/authors_book.pdf",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/65573/web_image.jpg"
    },
    {
        "title": "Biological Control of Arthropods",
        "author": "Langkawi",
        "edition": "none",
        "category": "Biology",
        "url": "https://www.cabidigitallibrary.org/doi/pdf/10.1079/9781786394118.0000?download=true",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/57049.3/9781786394118.cover.jpg"
    },
    {
        "title": "Synthetic biology applications in industrial microbiology",
        "author": "Weiwen Zhang",
        "edition": "none",
        "category": "Biology",
        "url": "https://www.frontiersin.org/research-topics/455/pdf",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/60413/Thumb_166.jpg"
    },
    {
        "title": "BIOLOGY for Dummies",
        "author": " Rene Fester Kratz",
        "edition": "2nd",
        "category": "Biology",
        "url": "https://kamsc.github.io/assets/links/Biology%20for%20Dummies.pdf",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQSoHm9gWzyqwz_axmjTWTdeGxKUYOPXQ5fJbz_JvYT4c1pZyKB"
    },
    {
        "title": "ADVANCED BIOLOGY",
        "author": "WHEAT & FITZPATRICK",
        "edition": "none",
        "category": "Biology",
        "url": "https://upload.wikimedia.org/wikipedia/commons/b/b7/Advanced_biology_(IA_advancedbiology00whea).pdf",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTwo7xcjJpSLgKjmBgrplGNlR9ubXfYZ9wRmNxc93eOaRDShfuu"
    },
    {
        "title": "BASIC BIOLOGY",
        "author": "Adam Purcell",
        "edition": "1st",
        "category": "Biology",
        "url": "https://www.basicbiology.net/wp-content/uploads/edd/2018/05/Basic-Biology-an-introduction.pdf",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqvcwDX1Hed1MUOCAcfxFeBqFlL4fDzsiG7F0SMMt6OA3M0fe-"
    },
    {
        "title": "BIOLOGY FOR ENGINEERS",
        "author": "DR. ANNAMMA ODANETH",
        "edition": "none",
        "category": "Biology",
        "url": "https://mpbou.edu.in/uploads/files/Biology_for_Engineers_-_Final_compressed.pdf",
        "image": "https://m.media-amazon.com/images/I/71vt7J2V0DL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "INTRODUCTION TO BIOLOGY",
        "author": "Author",
        "edition": "none",
        "category": "Biology",
        "url": "https://s3-us-west-2.amazonaws.com/oa2/docfiles/12068c45-dcb8-4f07-a622-96da497d6b27/12068c45-dcb8-4f07-a622-96da497d6b27.pdf",
        "image": "https://imgv2-1-f.scribdassets.com/img/document/766077788/149x198/0995e0b3a9/1725527574?v=1"
    },
    {
        "title": "SIMPLY BIOLOGY",
        "author": "ST. LISBON PUBLICATIONS",
        "edition": "1st",
        "category": "Biology",
        "url": "https://education.giakonda.org.uk/Biology/BIOLOGY(BORNIFACE).pdf",
        "image": "https://s3.studylib.net/store/data/025544412_1-42d76a42689c02a8bd5e276993bea1b8-768x994.png"
    },
    {
        "title": "MATHEMATICS FOR MACHINE LEARNING",
        "author": "Marc Peter Deisenroth",
        "edition": "none",
        "category": "Maths",
        "url": "https://mml-book.github.io/book/mml-book.pdf",
        "image": "https://rukminim2.flixcart.com/image/850/1000/knt7zbk0/book/d/l/t/mathematics-for-machine-learning-original-imag2epv9hfz8tzr.jpeg"
    },
    {
        "title": "Handbook of Optimization",
        "author": "Ivan Zelinka",
        "edition": "1st",
        "category": "Maths",
        "url": "https://core.ac.uk/download/pdf/153409843.pdf",
        "image": "https://m.media-amazon.com/images/I/61yxK6tVyBL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Optimization: Principles and Algorithms",
        "author": "Michel Bierlaire",
        "edition": "1st",
        "category": "Maths",
        "url": "https://transp-or.epfl.ch/books/optimization/html/OptimizationPrinciplesAlgorithms2018.pdf",
        "image": "https://m.media-amazon.com/images/I/71SruOBWgDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "1300 Maths Formulas",
        "author": "Alex Svirin",
        "edition": "1st",
        "category": "Maths",
        "url": "https://drive.uqu.edu.sa/_/quc_physics/files/1300%20Math%20Formulas%20by%20Golden%20Art.pdf",
        "image": "https://easyengineering.net/wp-content/uploads/2017/10/1300-Math-FormulasPDF-By-Alex-Svirin.jpg"
    },
    {
        "title": "Formulae of Mathematics",
        "author": "R.K. Malik",
        "edition": "1st",
        "category": "Maths",
        "url": "https://mathsprasad.wordpress.com/wp-content/uploads/2019/12/formulae-of-mathematics.pdf",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwvPkzLtlgo3zLHoVcbFXw53yzhawfYZsoY93iMUFy7WiFKgfL"
    },
    {
        "title": "SECRETS OF MENTAL MATH",
        "author": "Benjamin",
        "edition": "1st",
        "category": "Maths",
        "url": "https://visaldiary.wordpress.com/wp-content/uploads/2011/07/secrets-of-mental-math.pdf",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSxcOBvTbuuDJxcFsQTAKzfroaLai9sxbDtmO9vf2ewG8F2JqaM"
    },
    {
        "title": "Quick and Easy Math",
        "author": "Isaac Asimov",
        "edition": "1st",
        "category": "Maths",
        "url": "https://www.arvindguptatoys.com/arvindgupta/asimov-quick-maths.pdf",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjA81ARzCsHGziSWs1eezcfKfOl0vJsPrDqgXj80Wdo4wUK3xoUTNOguGqPMpb2dOoB60&usqp=CAU"
    },
    {
        "title": "8 MATH HACKS AND TRICKS",
        "author": "Author",
        "edition": "none",
        "category": "Maths",
        "url": "https://edcuration.com/resource/product/1066/8_Math_Hacks_and_Tricks_to_Turn_Okay_Student_to_Math_Champion%20(1).pdf",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSckk25-lAfAAdFvPwXXKzll3DhZch5-v3ppzHLFyOdg5ENmXtH"
    },
    {
        "title": "Chalcogen Chemistry",
        "author": "Peter Papoh Ndibewu",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/6797/authors_book/authors_book.pdf",
        "image": "https://cdnintech.com/books/6797/1718275681-1689857007/web-cover.jpg"
    },
    {
        "title": "Exploring Chemistry with Pyridine Derivatives",
        "author": "Satyanarayan Pal",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/11562/authors_book/authors_book.pdf",
        "image": "https://m.media-amazon.com/images/I/51LKO7IYOIL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Green Chemistry for Environmental Sustainability",
        "author": "Kinjal J. Shah",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://intech-files.s3.amazonaws.com/a043Y00000zFsnCQAS/0014980_Authors_Book%20%282024-02-08%2014%3A33%3A32%29.pdf",
        "image": "https://cdnintech.com/books/1003076/1721026751-206203731/web-cover.jpg"
    },
    {
        "title": "Organic Synthesis",
        "author": "Belakatte Parameshwarappa Nandeshwarappa",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/9197/authors_book/authors_book.pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7SOSR29ktRLAEyoGsomPms_BBy5qicRWhN7Zd7R8Yuyvpp4AY"
    },
    {
        "title": "Molecular Simulation in Interface and Surfactant",
        "author": "Shiling Yuan and Heng Zhang",
        "edition": "1st",
        "category": "Chemistry",
        "url": "https://mdpi-res.com/bookfiles/book/7231/Molecular_Simulation_in_Interface_and_Surfactant.pdf?v=1739844383",
        "image": "https://mdpi-res.com/bookfiles/book/7231/Molecular_Simulation_in_Interface_and_Surfactant.jpg?v=1731117865"
    },
    {
        "title": "Basic Concepts Viewed from Frontier in Inorganic Coordination Chemistry",
        "author": "Takashiro Akitsu",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/7549/authors_book/authors_book.pdf",
        "image": "https://m.media-amazon.com/images/I/71yETEel2xS._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Surface Chemistry and Catalysis",
        "author": "Michalis Konsolakis",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mdpi-res.com/bookfiles/book/240/Surface_Chemistry_and_Catalysis.pdf?v=1739844043",
        "image": "https://m.media-amazon.com/images/I/61UlC3J+aSL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Green Chemistry",
        "author": "Brajesh Kumar",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/11211/authors_book/authors_book.pdf",
        "image": "https://m.media-amazon.com/images/I/51-yVag8E5L._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Biomimetic Radical Chemistry and Applications 2021",
        "author": "Chryssostomos Chatgilialoglu",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mdpi-res.com/bookfiles/book/5499/Biomimetic_Radical_Chemistry_and_Applications_2021.pdf?v=1739844293",
        "image": "https://mdpi-res.com/bookfiles/book/5499/Biomimetic_Radical_Chemistry_and_Applications_2021.png?v=1736301870"
    },
    {
        "title": "Frontiers in Nucleic Acid Chemistry",
        "author": "Ramon Eritja",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mdpi-res.com/bookfiles/book/8586/Frontiers_in_Nucleic_Acid_Chemistry_in_Memory_of_Professor_Enrique_Pedroso_for_His_Outstanding_Contributions_to_Nucleic_Acid_Chemistry.pdf?v=1739844446",
        "image": "https://m.media-amazon.com/images/I/61bvLCjMcDL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Recent Advances in Analytical Chemistry",
        "author": "Muharrem Ince",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/8637/authors_book/authors_book.pdf",
        "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0Y_gXLNb3jq0Cco-0H9Vv4ZhO0CnHSAHAK7a1LEINPFec6kM-"
    },
    {
        "title": "Alkaline Chemistry and Applications",
        "author": "Riadh Marzouki",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/10581/authors_book/authors_book.pdf",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTjuGlyuC8zs3qqI7eFb_yxwF_dPUFYqXTIHpx7rgR1Z69HlPEX"
    },
    {
        "title": "Recent Progress in Organometallic Chemistry",
        "author": "Mohammed Muzibur Rahma",
        "edition": "none",
        "category": "Chemistry",
        "url": "https://mts.intechopen.com/storage/books/5848/authors_book/authors_book.pdf",
        "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRl0OC1jpSX1eMNPDtSVoNYZ2adED9SGF_hgD3rLfxp7SQgkQWS"
    },
    {
        "title": "Accounting from a Cross-Cultural Perspective",
        "author": "Asma Salman ",
        "edition": "none",
        "category": "Accounts",
        "url": "https://mts.intechopen.com/storage/books/6660/authors_book/authors_book.pdf",
        "image": "https://m.media-amazon.com/images/I/51aE0vjtgUL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": " Accountability in Public Policy Partnerships",
        "author": "Julia Steets",
        "edition": "none",
        "category": "Accounts",
        "url": "https://library.oapen.org/bitstream/handle/20.500.12657/34606/392745.pdf;jsessionid=F8DA8D7EF8A425359A182AD129D7866C?sequence=1",
        "image": "https://media.springernature.com/full/springer-static/cover-hires/book/978-0-230-29061-7"
    },
    {
        "title": "BASICS OF ACCOUNTING",
        "author": "Author",
        "edition": "1st",
        "category": "Accounts",
        "url": "https://anujjindal.in/wp-content/uploads/2022/08/Basics-of-Accounting.pdf",
        "image": "https://imgv2-1-f.scribdassets.com/img/document/740373919/149x198/b66ace4fef/1717832877?v=1"
    },
    {
        "title": "FUNDAMENTALS OF ACCOUNTING",
        "author": "Author",
        "edition": "2nd",
        "category": "Accounts",
        "url": "https://icmai.in/upload/Students/Syllabus-2012/Study_Material_New/Foundation-Paper2-Revised.pdf",
        "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRiIRHciy3me6ABKfmVHjScXBwoigCUSllZqnQ6tSv9DTkU4nHI"
    },
    {
        "title": "Book keeping & Accountancy",
        "author": "STANDARD ELEVEN",
        "edition": "none",
        "category": "Accounts",
        "url": "https://books.ebalbharati.in/pdfs/1103020425.pdf",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRYwq-b_o9_-ZzJALCr_zS07VW0Xxyl1MFs3GLNe2wqTToVtHzbwQovzmeT64LXzK4YF8&usqp=CAU"
    },
    {
        "title": "Principals off financial Accounting",
        "author": "Christine Jonick",
        "edition": "none",
        "category": "Accounts",
        "url": "https://web.ung.edu/media/university-press/Principles-of-Financial-Accounting.pdf?t=1542408454385",
        "image": "https://m.media-amazon.com/images/I/71kZLu36FcL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Accounting I",
        "author": "Author",
        "edition": "none",
        "category": "Accounts",
        "url": "https://www.opentextbooks.org.hk/system/files/export/12/12841/pdf/Accounting_I_12841.pdf",
        "image": "https://dirzon.com/file/telegram/Ethio-exams/accounting%202.png"
    },
    {
        "title": "GOLDEN BOOK OF ACCOUNTING & FINANCE",
        "author": "Author",
        "edition": "none",
        "category": "Accounts",
        "url": "https://jguni.in/images/question-bank/golden-book-of-accounting-finance-interviews.pdf",
        "image": "https://images-eu.ssl-images-amazon.com/images/I/81IfMr8eyML._AC_UL600_SR600,600_.jpg"
    },
    {
        "title": "Social Accountability ",
        "author": "Ward Vloeberghs",
        "edition": "none",
        "category": "Accounts",
        "url": "https://library.oapen.org/bitstream/handle/20.500.12657/89940/978-3-031-51322-0.pdf;jsessionid=D5304B47BC383EFF3247096834541AEF?sequence=1",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/136511/978-3-031-51322-0.pdf.jpg"
    },
    {
        "title": "Understanding Accountability",
        "author": "Yannis Papadopoulos",
        "edition": "none",
        "category": "Accounts",
        "url": "https://library.oapen.org/bitstream/handle/20.500.12657/91679/213946.pdf",
        "image": "https://assets.cambridge.org/97811089/78231/cover/9781108978231.jpg"
    },
    {
        "title": "Extracting Accountability",
        "author": "Jesicca M.Smith",
        "edition": "none",
        "category": "Accounts",
        "url": "https://direct.mit.edu/books/oa-monograph-pdf/2244246/book_9780262366151.pdf",
        "image": " https://mitp.silverchair-cdn.com/mitp/content_public/books/5208/book/3/m_9780262366151-cover.jpeg?Expires=1742309971&Signature=Mx6aKKpY4ho-4CbF7e6QHVFAwRKaxMK2qAq3ioFxLhxUIb9prkIvh~VJqvAjkYGtO4G2Mqz7sRT~uzNtW15kVhHLB7RJ8HyUITa9EhRlmgk6Nk~B80Ya~1-Z6VlyJ46do-qb5zeT8w8w0PDMld2hqu8auJygnHrMIYFDLi39ecF1yVnMl3OrR-9GRBS22BvqRdPeTbqQhU9oqf0o34LQPr~jBVdWkAO04M-eTytJxK1g5bcE8xN2Zcd~FqxPQsqsiQwP0LEkvTwzBHhcMa443vEUyUupVufOy7UhwrYhkZZopU3~~KQc5u8I7-wxA9HayF34RIqVmLudkiLkwbRK9Q__&Key-Pair-Id=APKAIE5G5CRDK6RD3PGA"
    },
    {
        "title": "Cats, Carpenters, and Accountants",
        "author": "Wayne DeFremey",
        "edition": "none",
        "category": "Accounts",
        "url": "https://watermark.silverchair.com/book_9780262377966.pdf?token=AQECAHi208BE49Ooan9kkhW_Ercy7Dm3ZL_9Cf3qfKAc485ysgAAAywwggMoBgkqhkiG9w0BBwagggMZMIIDFQIBADCCAw4GCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMUpqiJ5B15B532yAmAgEQgIIC38MqCKjcmSK4VwTJjCTS4DoEgQwlPpSOH6EZyuCVfYv5hBELgJvxsmssso77Pin-X2bIp7G2zClNJS_3KhR4ckK1le90lhSKFvMPTug0FtBdNq6yFWmXIgKu8esjpxWnsdG0qalSQvPfrPV5enVVx16LH3IvZKVmRmxa3TmNezNUNMuZlXWZORx9eZamoYM6txE4-_EQEVuh7ZzuWa9BSloFjngy34BckhBRXudIja1yiUN7MkJ-Q8IlMpAZJcxi02pZUdFMrDH8vD3z8bBbdQRkWzH4qqJoUgo74I1D0g0JKa1RRg8J5cidhJqJtsfE23HWpXT9I7FMI4bfw92_MuOzjQkwe1vpXaQTZ3rLOW9k0e4mjBfhi_GFy3ZetHjxEeoJJR6CtGidG8QWU7CHb1QqRTnV-Mfy-sVw2di66MfgbB3AMHU0cox92xBGZaZVjOWamd_yR9gfFd6vBcaQUGCqeJJpvBGN3oZEUYr0nDNCtS9Zovtu1te-M-dbLvrKxFXUfhyA7hDDtU5N7PKfxcYWk4E9_v9uv7qbOA5gSvRDNC6TGbI3ja1xSSezRrmr2v1y3HlJRkZKsiSkBRPARAAIw4sbZV_DzChtqS58BBRaG-dfSQ8opdYd2mi0WqYSvWFIy4K01Poptn0AxyEV",
        "image": "https://m.media-amazon.com/images/I/91o5psLK6HL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Association of Physical Fitness",
        "author": "Clemens Drenowatz",
        "edition": "none",
        "category": "Health-Care",
        "url": "https://mdpi-res.com/bookfiles/book/7039/Association_of_Physical_Fitness_and_Motor_Competence_with_Health_and_WellBeing_in_Children_and_Adolescents.pdf?v=1739844372",
        "image": "https://directory.doabooks.org/bitstream/handle/20.500.12854/98977/Association_of_Physical_Fitness_and_Motor_Competence_with_Health_and_WellBeing_in_Children_and_Adolescents.jpg%3fv1680526425?sequence=1&isAllowed=y"
    },
    {
        "title": "Quantum Entanglement in High Energy Physics",
        "author": "Oliver K. Baker",
        "edition": "none",
        "category": "Physics",
        "url": "https://intech-files.s3.amazonaws.com/a043Y00000zXAyYQAW/0015109_Authors_Book%20%282024-05-09%2013%3A59%3A36%29.pdf",
        "image": "https://m.media-amazon.com/images/I/51kiIuHh8PL._AC_UF1000,1000_QL80_.jpg"
    },
    {
        "title": "Mineral Physics—In Memory of Orson Anderson",
        "author": "Robert Cooper Liebermann",
        "edition": "none",
        "category": "Physics",
        "url": "https://mdpi-res.com/bookfiles/book/2663/Mineral_PhysicsIn_Memory_of_Orson_Anderson.pdf?v=1739844149",
        "image": "https://m.media-amazon.com/images/I/61E0wPpTzyL.jpg"
    },
    {
        "title": "  Health Promotion in Health Care ",
        "author": "Gørill Haugan",
        "edition": "none",
        "category": "Health-Care",
        "url": "https://library.oapen.org/bitstream/20.500.12657/47291/1/9783030631352.pdf",
        "image": "https://m.media-amazon.com/images/I/51WrmWyuSJL._AC_UF1000,1000_QL80_.jpg"
    }   
        ];

        function displayBooks(filteredBooks) {
            const bookList = document.getElementById("bookList");
            bookList.innerHTML = "";
            filteredBooks.forEach(book => {
                const bookItem = document.createElement("div");
                bookItem.className = "bookItem";
                bookItem.innerHTML = `<img src="${book.image}" class="bookImage">
                                      <div class="bookTitle">${book.title}</div>
                                      <div>Author: ${book.author}</div>
                                      <div>Edition: ${book.edition}</div>
                                      <div>Category: ${book.category}</div>
                                      <a href="${book.url}" target="_blank" class="downloadBtn">Download</a>`;
                bookList.appendChild(bookItem);
            });
        }

        function searchBooks() {
            const query = document.getElementById("searchBox").value.toLowerCase().split(" ");
            const selectedCategory = document.getElementById("categorySelect").value;
            const filteredBooks = books.filter(book => {
                const bookData = `${book.title} ${book.author} ${book.edition} ${book.category}`.toLowerCase();
                const matchesQuery = query.every(term => bookData.includes(term));
                const matchesCategory = selectedCategory === "" || book.category === selectedCategory;
                return matchesQuery && matchesCategory;
            });
            displayBooks(filteredBooks);
        }

        function shuffleBooks(array) {
    return array.sort(() => Math.random() - 0.5);
}

displayBooks(shuffleBooks(books));
