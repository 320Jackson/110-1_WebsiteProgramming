# Lab 20211222

### 1. Create Firebase Storage Folder path

Create a folder path in Firebase Storage Dashboard.

![https://i.imgur.com/b6hoIir.png](https://i.imgur.com/b6hoIir.png)

![https://i.imgur.com/NH0ANSC.png](https://i.imgur.com/NH0ANSC.png)

### 2. Storage security rules

Set the security rules to `allow read, write: if true;` Otherwise it will trigger `Permission denied` error message.

![https://i.imgur.com/wCOu7Li.png](https://i.imgur.com/wCOu7Li.png)



### 3. Upload Image

Click the button `Upload Image` then select any image file from your computer. It will start the image uploading process by running `put()` function from storage ref object:

```
const ref = firebase.storage().ref(storagePath);
ref.put(file)
```

For more documentation: [https://firebase.google.com/docs/storage/web/upload-files?authuser=0#web-version-8](https://firebase.google.com/docs/storage/web/upload-files?authuser=0#web-version-8)


and you will be able to get the image URL using:

```
ref.getDownloadURL()
```

## Tasks

### Task 1

Show the image preview after the image is uploaded.

![](https://i.imgur.com/ri9WX6A.png)

hint: you might use [html() function](https://api.jquery.com/html/#html) from jQuery.

### Task 2

After the image is uploaded. Remove the `disabled` property from `#createPostBtn`.

hint: you might use [prop() function](https://api.jquery.com/prop/) from jQuery.

### Task 3

After the form is submitted, Save the data to firestore collection. Each data should have two fields: `title`, `imageURL`. Reload the page after the data is created successfully.

![](https://i.imgur.com/ri9WX6A.png)

### Task 4

Loading the data from firestore collection after enter this page. You can use bootstrap [Card component](https://getbootstrap.com/docs/4.6/components/card/) to layout the gallery post.

![](https://i.imgur.com/RU6jaNU.png)


