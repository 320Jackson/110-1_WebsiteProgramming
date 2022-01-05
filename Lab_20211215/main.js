// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsHsjIGe7k2HLxVCn2BUt607I_QgpM1QQ",
    authDomain: "lab-20211208-183f8.firebaseapp.com",
    projectId: "lab-20211208-183f8",
    storageBucket: "lab-20211208-183f8.appspot.com",
    messagingSenderId: "916605299992",
    appId: "1:916605299992:web:38478ddab79d5d85a1026d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Start your scripts here...
const todoList = db.collection('todoList');
const dataul = document.querySelector('ul');
const uploadButton = document.querySelector('button');

async function uploadData(event) {
    event.preventDefault();
    
    const title = document.getElementById("createTodoTitle").value;
    const color = document.getElementById("createTodoColor").value;
    
    await todoList.add({color, title});
    window.location.reload();
}

uploadButton.addEventListener('click', uploadData);
(
    async() => {
        const todoInfoList = await todoList.get();
        todoInfoList.forEach(todoInfo => {
            const {color, title} = todoInfo.data();
            const showData = `
                <li class="list-group-item">
                    <span class="box bg-${color}"></span>
                    ${title}
                </li>
            `;
            dataul.innerHTML = dataul.innerHTML + showData;
        });
    }
)();

