// Add your Firebase Project Config here...
const firebaseConfig = {
    apiKey: "AIzaSyAsHsjIGe7k2HLxVCn2BUt607I_QgpM1QQ",
    authDomain: "lab-20211208-183f8.firebaseapp.com",
    projectId: "lab-20211208-183f8",
    storageBucket: "lab-20211208-183f8.appspot.com",
    messagingSenderId: "916605299992",
    appId: "1:916605299992:web:842be171988b4db8a1026d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const user = db.collection('userList');
const tbody = document.querySelector('tbody');

(
    async() => {
        const UserInfoList = await user.get();
        UserInfoList.forEach(UserInfo => {
            const{city, country, gender, name, phone, picture} = UserInfo.data();
            const tableData = `
                <tr>
                    <th>
                        <img src="${picture}" class="rounded-circle" style="width: 25px; height: 25px;"></img>
                    </th>
                    <td>${name}</td>
                    <td>${gender}</td>
                    <td>${country}</td>
                    <td>${city}</td>
                    <td>${phone}</td>
                </tr>
            `;
            tbody.innerHTML = tbody.innerHTML + tableData;
        })
    }
)();