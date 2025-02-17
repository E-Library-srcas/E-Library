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
