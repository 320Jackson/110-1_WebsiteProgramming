// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsHsjIGe7k2HLxVCn2BUt607I_QgpM1QQ",
    authDomain: "lab-20211208-183f8.firebaseapp.com",
    projectId: "lab-20211208-183f8",
    storageBucket: "lab-20211208-183f8.appspot.com",
    messagingSenderId: "916605299992",
    appId: "1:916605299992:web:6e8275c00cbbd4eba1026d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const reviewList = db.collection("reviewList");

const ratyOptions = {
    starHalf: "https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-half.png",
    starOff: "https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png",
    starOn: "https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png"
}

// Initialize sections
const formGroup = $("#rating");
const table = $("thead");
const createViewBtn = $("button");

createViewBtn.button().click(
    async function (event) {
        event.preventDefault();
    
        const title = $("#title").val();
        const rate = formGroup.data('raty').score();
    
        await reviewList.add({title, rate});
        window.location.reload()
    }
);

function createRatingDiv() {
    formGroup.raty({ ...ratyOptions });
    getDatabaseData()
}


function updateData(rate) {
    reviewList.doc(this.id).update({
        rate,
    });
}

async function getDatabaseData() {
    const reviewListInfo = await reviewList.get();
    reviewListInfo.forEach(reviewInfo => {
        const {rate, title} = reviewInfo.data();
        const showData = `
            <tr>
                <th>${title}</th>
                <th><div id="${reviewInfo.id}"></div></th>
            </tr>
        `;
        table.append(showData);
        console.log(rate);
        $(`#${reviewInfo.id}`).raty({
            ...ratyOptions,
            score: rate,
            click: updateData,
        });
    });
}

createRatingDiv();
