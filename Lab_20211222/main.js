// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAsHsjIGe7k2HLxVCn2BUt607I_QgpM1QQ",
    authDomain: "lab-20211208-183f8.firebaseapp.com",
    projectId: "lab-20211208-183f8",
    storageBucket: "lab-20211208-183f8.appspot.com",
    messagingSenderId: "916605299992",
    appId: "1:916605299992:web:06c824c9522f226ea1026d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const imgList = db.collection('imgList');

const $createPostForm = $("#createPostForm");
const $createPostTitle = $("#createPostTitle");
const $createPostImage = $("#createPostImage");
const $createPostImageURL = $("#createPostImageURL");
const $imagePreview = $("#imagePreview");
const $createPostBtn = $("#createPostBtn");
const $galleryPostList = $("#galleryPostList");

// Binding change event for createPostImage
$createPostImage.change(function (e) {
    // Get the file object when user choose any files
    const file = this.files[0];
    const fileName = file.name;
    // Setup folder path for firebase storage
    const storagePath = `galleryImages/${fileName}`;
    const ref = firebase.storage().ref(storagePath);
    // Upload file to firebase storage
    console.log(`Start Upload image to: ${storagePath}`);
    $createPostImageURL.text(`Start Upload image to: ${storagePath}`);
    ref.put(file)
        .then(snapshot => {
            // If file is uploaded successfully
            console.log(snapshot);
            // Get image URL
            ref.getDownloadURL()
                .then(imageURL => {
                    console.log("imageURL", imageURL);
                    $createPostImageURL.text(`Image URL: ${imageURL}`);
                    const showData = `
                        <img src="${imageURL}" alt="">
                    `;
                    $imagePreview[0].innerHTML = showData;
                    $createPostBtn.prop("disabled", false);
                })
                .catch(err => {
                    $createPostImageURL.text(`Error: ${err}`);
                    console.log(err)
                });
        })
        .catch(err => {
            $createPostImageURL.text(`Error: ${err}`);
            console.log(err)
        });
});

$createPostBtn.button().click(
    async function(event) {
        event.preventDefault();

        const title = $createPostTitle.val();
        const imageURL = $createPostImageURL.text().split(": ")[1];

        console.log(title);
        console.log(imageURL);

        await imgList.add({title, imageURL});
        window.location.reload();
    }
);

(
    async() => {
        const imgListInfo = await imgList.get();
        imgListInfo.forEach(imgInfo => {
            const {imageURL, title} = imgInfo.data();
            const showData = `
                <div class="card" style="width: 18rem; margin: 10px">
                    <img class="card-img-top" src="${imageURL}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${title}</h5>
                    </div>
                </div>
            `;
            $galleryPostList.append(showData);
        });
    }
)();