import { useSession } from "next-auth/react";
import Image from "next/image";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { useRef, useState } from "react";
import { db, storage } from "../firebase";
import { ref, uploadString, getDownloadURL } from "firebase/storage";
import { serverTimestamp, collection, addDoc, setDoc, doc } from "firebase/firestore";

function InputBox() {
  const { data: session } = useSession();

  // reference to input field
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const [imageToPost, setImageToPost] = useState(null);

  const sendPost = (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;
    addDoc(collection(db, "posts"), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp(),
    }).then((document) => {
      if (imageToPost) {
        const uploadTask = uploadString(
          ref(storage, `posts/${document.id}`),
          imageToPost,
          "data_url"
        );

        removeImage();

        uploadTask.then((snapshot) => {
          // upload completes, add the URL to the post
          getDownloadURL(ref(storage, `posts/${document.id}`)).then((url) => {
            setDoc(
              doc(db, "posts", document.id),
              {
                postImage: url,
              },
              { merge: true }
            );
          });
        });
      }
    });

    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.onload = (readerEvent) => {
        setImageToPost(readerEvent.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <div className='bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6 p-2'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          width='40'
          height='40'
          layout='fixed'
        />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            ref={inputRef}
            placeholder={`What's on your mind, ${session.user.name}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>

        {imageToPost && (
          <div
            onClick={removeImage}
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
          >
            <img className='h-10 object-contain' src={imageToPost} alt='image to post' />
            <p className='text-xs text-red-500 text-center'>Remove</p>
          </div>
        )}
      </div>

      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
          <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden></input>
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
